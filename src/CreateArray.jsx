import React from "react";
import "./CreateArray.css";

export default function CreateArray({
  currentArray,
  checkingList,
  animations,
}) {
  console.log("CreateArray called");
  const width = 95 / currentArray.length;
  const margin = currentArray.length < 91 ? 1 : 0;
  return currentArray.map((arrayItem, index) => {
    const backColour = checkingList.includes(index)
      ? "rgb(14, 128, 194)"
      : "rgb(94, 44, 44)";
    //console.log(backColour);
    return (
      <span
        id={index}
        className="arrayItem"
        style={{
          marginLeft: margin,
          width: width + "%",
          height: (arrayItem / currentArray.length) * 100 + "%",
          backgroundColor: backColour,
        }}
      ></span>
    );
  });
}
