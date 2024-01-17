import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import PrivateRoute from "./utils/PrivateRoute";

const CombinedRoutes = () => {
  return (
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<PrivateRoute Component={Product} />} path="/product" />
    </Routes>
  );
};

export default CombinedRoutes;
