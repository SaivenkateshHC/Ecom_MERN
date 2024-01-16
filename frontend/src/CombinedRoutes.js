import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Pages/Home";

const CombinedRoutes = () => {
  return (
    <Routes>
      <Route element={<Home/>} path="/"/>
    </Routes>
  );
};

export default CombinedRoutes;
