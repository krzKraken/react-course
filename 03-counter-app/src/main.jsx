import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import { CounterApp } from "./counter";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CounterApp valor={"10"} />
  </React.StrictMode>
);
