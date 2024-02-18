import React from "react";
import { Route, Routes } from "react-router-dom";

import { Home, NotFound } from "@client/pages";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
