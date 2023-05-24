import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
// import { CounterApp } from "./counter";
import { MyFirstApp } from "./myFirstApp";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MyFirstApp titulo="titulo" subTitle="subtitle" userName="Kraken" />
  </React.StrictMode>
);
