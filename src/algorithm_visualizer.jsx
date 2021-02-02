import React, { useState, useEffect } from "react";
import CreateArray from "./CreateArray.jsx";
import "./CreateArray.css";
import Slider from "@material-ui/core/Slider";
import { v4 as uuidv4 } from "uuid";

export default function AlgorithmVisualizer() {
  const [currentArray, setcurrentArray] = useState([]);
  const [arrayLength, setarrayLength] = React.useState(30);
  const [sliderTime, setsliderTime] = useState(false);
  const [checkingList, setcheckingList] = useState([]);

  const GenerateArray = () => {
    if (sliderTime) {
      const Arraylen = arrayLength;

      let numArray = [];
      for (let i = 0; i < Arraylen; i++) {
        numArray = [...numArray, Math.floor(Math.random() * Arraylen) + 1];
      }
      setcurrentArray(numArray);
      if (sliderTime) {
        setsliderTime(false);
      }
      return numArray;
    }
  };

  //Sleep function from https://www.sitepoint.com/delay-sleep-pause-wait/
  const sleep = (milliseconds) => {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  };

  const bubbleSort = (arr) => {
    //console.log("bubble sort");
    const arrayLength = arr.length;
    let solved = false;
    while (!solved) {
      solved = true;
      for (var i = 0; i < arrayLength; i++) {
        setcheckingList([i, i - 1]);
        setcurrentArray(arr);

        //console.log("Checking ", [i, i + 1]);
        document.getElementById("1").style.backgroundColor = "lightblue";
        sleep(0);
        if (arr[i + 1] < arr[i]) {
          let temp1 = arr[i];
          let temp2 = arr[i + 1];
          arr[i] = temp2;
          arr[i + 1] = temp1;
          solved = false;
        }
      }
    }
  };

  async function antiSliderSpam() {
    setTimeout(() => {
      setsliderTime(true);
    }, 200);
  }

  const handleSliderChange = (event, newValue) => {
    setarrayLength(newValue);
    GenerateArray();
    antiSliderSpam();
  };

  return (
    <div>
      <button
        onClick={() => {
          GenerateArray();
          antiSliderSpam();
        }}
      >
        Regenerate Current Array
      </button>
      <button
        onClick={() => {
          bubbleSort([...currentArray]);
        }}
        style={{ marginLeft: 10 }}
      >
        BubbleSort
      </button>
      <button
        onClick={() => {
          setcheckingList([]);
        }}
      >
        Reset Colours
      </button>
      <Slider
        value={arrayLength}
        onChange={handleSliderChange}
        aria-labelledby="continuous-slider"
        min={5}
        max={85}
      />
      <div className="arrayContainer">
        <CreateArray
          currentArray={currentArray}
          checkingList={checkingList}
          key={uuidv4()}
        />
      </div>
    </div>
  );
}
