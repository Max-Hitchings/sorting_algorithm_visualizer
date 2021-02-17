import React from "react";

export default function AlgorithmInfoBigO(o) {
  return (
    <div style={{ marginBottom: "23px" }}>
      <div className="algorithmInfo-oContainer">
        <div className="algorithmInfo-oTitle">Best</div>
        <div className="algorithmInfo-oText">
          {o.o.base.best}
          <sup>{o.o.sup.best}</sup>)
        </div>
      </div>
      <div className="algorithmInfo-oContainer">
        <div className="algorithmInfo-oTitle">Average</div>
        <div className="algorithmInfo-oText">
          {o.o.base.average}
          <sup>{o.o.sup.average}</sup>)
        </div>
      </div>
      <div className="algorithmInfo-oContainer">
        <div className="algorithmInfo-oTitle">Worst</div>
        <div className="algorithmInfo-oText">
          {o.o.base.worst}
          <sup>{o.o.sup.worst}</sup>)
        </div>
      </div>
    </div>
  );
}
