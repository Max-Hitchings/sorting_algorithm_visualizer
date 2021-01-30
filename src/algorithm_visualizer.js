import React, { useRef } from "react";

export default function AlgorithmVisualizer() {
  function GenerateArray(e) {
    const Arraylen = ArrayLengthRef.current.value;

    let numArray = [];
    for (let i = 0; i < Arraylen; i++) {
      numArray = [...numArray, Math.floor(Math.random() * Arraylen) + 1];
    }
    console.log(numArray);
    return <div>sd</div>;
  }

  const ArrayLengthRef = useRef();
  return (
    <div>
      <input ref={ArrayLengthRef} type="number" />
      <button onClick={GenerateArray}>Generate New Array</button>
    </div>
  );
}
