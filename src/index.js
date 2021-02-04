//react boilerplate code
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/js/App";
import { v4 as uuidv4 } from "uuid";

ReactDOM.render(
  <React.StrictMode>
    <App key={uuidv4()} />
  </React.StrictMode>,
  document.getElementById("root")
);
