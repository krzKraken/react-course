import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import { CounterApp } from "./Counter.App.jsx";
// import { MyFirstApp } from "./myFirstApp";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CounterApp valor={0} />

    {/* <MyFirstApp title="titulo app" subTitle="subtitle" userName={"10"} /> */}
  </React.StrictMode>
);
