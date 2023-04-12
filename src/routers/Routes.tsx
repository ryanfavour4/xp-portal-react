import React from "react";
import { Routes, Route } from "react-router-dom";
import Faculty from "../pages/Faculty";

function Routers() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Faculty />} />
      </Routes>
    </div>
  );
}

export default Routers;