import React from "react";

import bingoImg from "@client/assets/img/bingo.jpg";

export function Example() {
  return (
    <div>
      <p style={{ fontSize: "bold" }}>Example Component</p>
      <p className="example-red-text">This is a red text</p>
      <img src={bingoImg} alt="bingo" />
    </div>
  );
}
