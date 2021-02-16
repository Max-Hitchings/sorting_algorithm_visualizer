import React from "react";

export default function AlgorithmInfoColours(colours) {
  return colours.colours.map((item) => {
    return (
      <div className="algorithmInfo-colourContainer">
        <div
          className="algorithmInfo-colourSquare"
          style={{ backgroundColor: item.colour, left: "50%" }}
        ></div>
        <div className="algorithmInfo-colourDescription">
          {item.colourDescription}
        </div>
      </div>
    );
  });
}
