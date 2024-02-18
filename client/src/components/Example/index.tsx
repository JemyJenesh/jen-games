import React, { useEffect } from "react";

import bingoImg from "@client/assets/img/bingo.jpg";

export function Example() {
  useEffect(() => {
    fetch("/api/healthcheck")
      .then((res) => {
        return res.json();
      })
      .then((data) => console.log(data));
  }, []);

  return (
    <div>
      <p style={{ fontSize: "bold" }}>Example Component</p>
      <p className="example-red-text">This is a red text</p>
      <img src={bingoImg} alt="bingo" />
    </div>
  );
}
