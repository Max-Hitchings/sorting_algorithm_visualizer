import React from "react";
import InfoIcon from "@material-ui/icons/Info";
import AlgorithmInfoColours from "./algorithmInfoColours.jsx";
import AlgorithmInfoBigO from "./AlgorithmInfoBigO.jsx";

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
      <div className="algorithmInfo-Dropdown hvr-bubble-top">
        <div className="algorithmInfo-title">
          {data.algorithmData.algorithm}
        </div>
        <div className="algorithmInfo-hedder">description</div>
        <div className="algorithmInfo-row1">
          {data.algorithmData.description}
        </div>
        <div className="algorithmInfo-hedder">time complexity (big O)</div>
        <div className="algorithmInfo-row3">
          <AlgorithmInfoBigO o={data.algorithmData.o} />
        </div>
        <div className="algorithmInfo-hedder">colour code</div>
        <div className="algorithmInfo-row3">
          <AlgorithmInfoColours colours={data.algorithmData.colours} />
        </div>
      </div>
    </div>
  );
}
