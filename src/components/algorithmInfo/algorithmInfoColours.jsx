import React from "react";
import { v4 as uuidv4 } from "uuid"; //so i can generate unique ID's easily

export default function AlgorithmInfoColours(colours) {
  return colours.colours.map((item) => {
    return (
      <div className="algorithmInfo-colourContainer" key={uuidv4()}>
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
