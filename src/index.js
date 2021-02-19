import React from "react";
import ReactDOM from "react-dom";
import AlgorithmVisualizer from "./components/algorithm_visualizer.jsx";

// ALL CSS FILES
import "./css/algorithmInfo.css";
import "./css/CreateArray.css";
import "./css/algorithm_visualizer.css";
import "./css/CreateArray.css";
import "./css/endInfo.css";

ReactDOM.render(
  <React.StrictMode>
    <AlgorithmVisualizer />
  </React.StrictMode>,
  document.getElementById("root")
);
