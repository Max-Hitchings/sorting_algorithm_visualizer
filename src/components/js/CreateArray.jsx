import React from "react";
import "../css/CreateArray.css";

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
      ? " rgb(66, 190, 72)"
      : wrongList.includes(index)
      ? "#f34d5e" //"rgb(183, 27, 245)"
      : checkingList.includes(index)
      ? "#66FCF1" //"rgb(14, 128, 194)"
      : "#45A29E";

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
        }}
      >
        {innerNum}
      </span>
    );
  });
}
