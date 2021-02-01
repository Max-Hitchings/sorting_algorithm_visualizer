import React from "react";
import AlgorithmVisualizer from "./algorithm_visualizer.jsx";
import { v4 as uuidv4 } from "uuid";

function App() {
  return (
    <div>
      <AlgorithmVisualizer key={uuidv4()} />
    </div>
  );
}

export default App;
