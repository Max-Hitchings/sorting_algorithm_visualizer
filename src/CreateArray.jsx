import React from "react";
import "./CreateArray.css";

export default function CreateArray({ currentArray, checkingList, wrongList }) {
  const width = 95 / currentArray.length;
  const margin = currentArray.length < 91 ? 1 : 0;
  return currentArray.map((arrayItem, index) => {
    const backColour = wrongList.includes(index)
      ? "rgb(255,0,0)"
      : checkingList.includes(index)
      ? "rgb(14, 128, 194)"
      : "rgb(94, 44, 44)";

    const innerNum = currentArray.length < 45 ? arrayItem : null;
    return (
      <span
        id={index}
        className="arrayItem"
        style={{
          marginLeft: margin,
          width: width + "%",
          height: (arrayItem / currentArray.length) * 100 + "%",
          backgroundColor: backColour,
          fontSize: "large",
          color: "white",
        }}
      >
        {innerNum}
      </span>
    );
  });
}
