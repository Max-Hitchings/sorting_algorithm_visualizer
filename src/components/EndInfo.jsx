import React, { useRef } from "react";
import Typography from "@material-ui/core/Typography";
import { v4 as uuidv4 } from "uuid"; //so i can generate unique ID's easily

export default function EndInfo(checkCount) {
  const hideInfo = () => {
    document.getElementById(endInfo.current.id).style.top = "-150px";
  };
  const endInfo = useRef();

  return (
    <>
      <div className="endInfo_container" id="endInfo" ref={endInfo}>
        <div className="endInfoClose" onClick={hideInfo}>
          &times;
        </div>
        <div className="endInfo_TextContainer">
          <Typography className="endInfo_counterText" variant="h5">
            Checks Performed:
          </Typography>
          <Typography
            className="endInfo_counterText"
            variant="h5"
            key={uuidv4()}
          >
            {checkCount.checkCount}
          </Typography>
        </div>
      </div>
    </>
  );
}
