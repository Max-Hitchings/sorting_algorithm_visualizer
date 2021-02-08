import React, { useRef } from "react";
import data from "./EndInfoData";
import "../css/endInfo.css";
import Typography from "@material-ui/core/Typography";

export default function EndInfo(checkCount) {
  const log = () => {
    console.log(data);
    //const hi = document.getElementById("test1");
    //document.getElementById(test2.current.id).style.transform =
    //  "rotate(180deg)";
    //hi.style.opacity = "0";
    //console.log("shush", test2.current.style);
  };

  const showInfo = () => {
    document.getElementById(endInfo.current.id).style.top = "0";
  };
  const hideInfo = () => {
    document.getElementById(endInfo.current.id).style.top = "-150px";
  };
  const endInfo = useRef();

  return (
    <div>
      <div className="endInfo_container" id="endInfo" ref={endInfo}>
        <div
          className="endInfoClose"
          onClick={() => {
            hideInfo();
          }}
        >
          &times;
        </div>
        <div className="endInfo_TextContainer">
          <Typography className="endInfo_counterText" variant="h5">
            Checks Performed:
          </Typography>
          <Typography className="endInfo_counterText" variant="h5">
            {checkCount.checkCount}
          </Typography>
        </div>
      </div>
    </div>
  );
}
