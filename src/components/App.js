import React from "react";
import AlgorithmVisualizer from "./algorithm_visualizer.jsx";
import { v4 as uuidv4 } from "uuid";

// ALL CSS FILES
import "../css/algorithmInfo.css";
import "../css/CreateArray.css";
import "../css/algorithm_visualizer.css";
import "../css/CreateArray.css";
import "../css/endInfo.css";

function App() {
  return (
    <div>
      <AlgorithmVisualizer key={uuidv4()} />
    </div>
  );
}

export default App;
