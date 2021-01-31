import React, { useRef, useState } from "react";
import CreateArray from "./CreateArray.jsx";
import "./CreateArray.css";
import PropTypes from "prop-types";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { PrettoSlider } from "@material-ui/core/Slider";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/Tooltip";

export default function AlgorithmVisualizer() {
  const [currentArray, setcurrentArray] = useState([]);
  const [arrayLength, setarrayLength] = React.useState(30);
  const [value, setValue] = React.useState(30);

  function GenerateArray() {
    //const Arraylen = ArrayLengthRef.current.value;
    const Arraylen = arrayLength;

    let numArray = [];
    for (let i = 0; i < Arraylen; i++) {
      numArray = [...numArray, Math.floor(Math.random() * Arraylen) + 1];
    }
    console.log(numArray);
    setcurrentArray(numArray);
    console.log("currentArray", currentArray);
    return numArray;
  }

  const handleSliderChange = (event, newValue) => {
    setarrayLength(newValue);
    GenerateArray();
    console.log(newValue);
  };

  const ArrayLengthRef = useRef();
  const slider = useRef();
  return (
    <div>
      <button onClick={GenerateArray}>Regenerate Current Array</button>
      <Slider
        value={arrayLength}
        onChange={handleSliderChange}
        aria-labelledby="continuous-slider"
        min={5}
        max={89}
      />
      <div className="arrayContainer">
        <CreateArray currentArray={[...currentArray]} />
      </div>
    </div>
  );
}
