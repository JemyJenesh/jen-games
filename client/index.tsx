import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";

import { App } from "./App";

const rootElement = document.querySelector("#root");
if (!rootElement) {
  throw new Error("No root element found!");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
