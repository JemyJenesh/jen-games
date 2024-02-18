import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import { Example } from "@client/components";

const rootElement = document.querySelector("#root");
if (!rootElement) {
  throw new Error("No root element found!");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <div>
    <Example />
  </div>
);
