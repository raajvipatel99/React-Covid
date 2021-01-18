import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Covid19App from "./components/covid19App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter } from "react-router-dom";
import Covid19TotalStats from "./components/covid19TotalStats";

ReactDOM.render(
  <BrowserRouter>
    <Covid19App />
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
