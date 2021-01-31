import React, { useRef, useState } from "react";
import CreateArray from "./CreateArray.jsx";
import "./CreateArray.css";

export default function AlgorithmVisualizer() {
  const [currentArray, setcurrentArray] = useState([]);

  function GenerateArray() {
    const Arraylen = ArrayLengthRef.current.value;

    let numArray = [];
    for (let i = 0; i < Arraylen; i++) {
      numArray = [...numArray, Math.floor(Math.random() * Arraylen) + 1];
    }
    console.log(numArray);
    setcurrentArray(numArray);
    console.log("currentArray", currentArray);
    return numArray;
  }

  const ArrayLengthRef = useRef();
  return (
    <div>
      <input ref={ArrayLengthRef} type="number" />
      <button onClick={GenerateArray}>Generate New Array</button>
      <div className="arrayContainer">
        <CreateArray currentArray={[...currentArray]} />
      </div>
    </div>
  );
}
