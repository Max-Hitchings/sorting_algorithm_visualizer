import React from "react";
import "./CreateArray.css";

export default function CreateArray({ currentArray }) {
  const width = 95 / currentArray.length;
  const margin = currentArray.length < 91 ? 1 : 0;
  return currentArray.map((arrayItem) => {
    return (
      <span
        className="arrayItem"
        style={{
          marginLeft: margin,
          width: width + "%",
          height: (arrayItem / currentArray.length) * 100 + "%",
        }}
      ></span>
    );
  });
}
