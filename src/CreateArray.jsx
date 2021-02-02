import React from "react";
import "./CreateArray.css";

//this renders the array onscreen with the approprite colours which are passed through in the prameters
export default function CreateArray({
  currentArray,
  checkingList,
  wrongList,
  isListSolved,
}) {
  const width = 95 / currentArray.length;
  const margin = currentArray.length < 91 ? 1 : 0;
  return currentArray.map((arrayItem, index) => {
    const backColour = isListSolved
      ? "rgb(30, 139, 36)"
      : wrongList.includes(index)
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
