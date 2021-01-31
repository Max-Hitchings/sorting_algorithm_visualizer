import React, { useState } from "react";
import CreateArray from "./CreateArray.jsx";
import "./CreateArray.css";
import Slider from "@material-ui/core/Slider";
import bubbleSort from "./algorithms/BubbleSort";

export default function AlgorithmVisualizer() {
  const [currentArray, setcurrentArray] = useState([]);
  const [arrayLength, setarrayLength] = React.useState(30);
  const [sliderTime, setsliderTime] = useState(false);

  function GenerateArray() {
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
  }

  const bubbleSort = (arr) => {
    const arrayLength = arr.length;
    let solved = false;
    while (!solved) {
      solved = true;
      for (var i = 0; i < arrayLength; i++) {
        if (arr[i + 1] < arr[i]) {
          let temp1 = arr[i];
          let temp2 = arr[i + 1];
          arr[i] = temp2;
          arr[i + 1] = temp1;
          //console.log(arr);
          //console.log(arr[i], "swapping with", arr[i + 1]);
          solved = false;
        }
      }
    }
    return arr;
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

  const handleRegenerateButton = () => {
    GenerateArray();
    antiSliderSpam();
  };

  const handleBubbleSort = () => {
    console.log(bubbleSort([...currentArray]));
    setcurrentArray(bubbleSort([...currentArray]));
  };

  return (
    <div>
      <button onClick={handleRegenerateButton}>Regenerate Current Array</button>
      <button onClick={handleBubbleSort} style={{ marginLeft: 10 }}>
        BubbleSort
      </button>
      <Slider
        value={arrayLength}
        onChange={handleSliderChange}
        aria-labelledby="continuous-slider"
        min={5}
        max={85}
      />
      <div className="arrayContainer">
        <CreateArray currentArray={[...currentArray]} />
      </div>
    </div>
  );
}
