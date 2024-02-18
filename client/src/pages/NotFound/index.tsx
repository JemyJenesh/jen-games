import React from "react";
import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <div>
      <p>Page not found</p>
      <Link to="/">Go to home</Link>
    </div>
  );
}
