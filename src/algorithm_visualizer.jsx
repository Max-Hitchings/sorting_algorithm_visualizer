import React, { useRef, useState } from "react";
import CreateArray from "./CreateArray.jsx";
import "./CreateArray.css";
import Slider from "@material-ui/core/Slider";

export default function AlgorithmVisualizer() {
  const [currentArray, setcurrentArray] = useState([]);
  const [arrayLength, setarrayLength] = React.useState(30);
  const [sliderTime, setsliderTime] = useState(false);

  function GenerateArray() {
    //const Arraylen = ArrayLengthRef.current.value;
    if (sliderTime) {
      const Arraylen = arrayLength;

      let numArray = [];
      for (let i = 0; i < Arraylen; i++) {
        numArray = [...numArray, Math.floor(Math.random() * Arraylen) + 1];
      }
      console.log(numArray);
      setcurrentArray(numArray);
      console.log("currentArray", currentArray);
      if (sliderTime) {
        setsliderTime(false);
      }
      return numArray;
    }
  }

  async function antiSliderSpam() {
    setTimeout(() => {
      console.log("World!");
      setsliderTime(true);
      console.log(sliderTime);
    }, 200);
  }

  const handleSliderChange = (event, newValue) => {
    setarrayLength(newValue);
    GenerateArray();
    console.log(newValue);
    antiSliderSpam();
  };

  const handleRegenerate = () => {
    GenerateArray();
    antiSliderSpam();
  };

  const ArrayLengthRef = useRef();
  const slider = useRef();
  return (
    <div>
      <button onClick={handleRegenerate}>Regenerate Current Array</button>
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
