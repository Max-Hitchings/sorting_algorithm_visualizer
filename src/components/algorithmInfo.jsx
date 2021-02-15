import React from "react";
import InfoIcon from "@material-ui/icons/Info";
import AlgorithmInfoColours from "./algorithmInfoColours.jsx";
import "../css/algorithmInfo.css";

export default function AlgorithmInfo(data) {
  return (
    <div className="algorithmInfo">
      <InfoIcon
        style={{
          color: "#1f1f1f",
          marginLeft: "8",
          marginRight: "0",
          transform: "translateY(3px)",
        }}
      />
      <div className="algorithmInfo-Dropdown">
        <div className="algorithmInfo-title">
          {data.algorithmData.algorithm}
        </div>
        <div className="algorithmInfo-hedder">description</div>
        <div className="algorithmInfo-row2">
          {data.algorithmData.description}
        </div>
        <div className="algorithmInfo-hedder">colour code</div>
        <div className="algorithmInfo-row3">
          <AlgorithmInfoColours colours={data.algorithmData.colours} />
        </div>
      </div>
    </div>
  );
}
