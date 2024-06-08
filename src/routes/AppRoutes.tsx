// src/routes.tsx
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import CountryDetail from "../pages/CountryDetail";
import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound";

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/country/:name" element={<CountryDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
