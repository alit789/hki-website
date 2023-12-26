import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SearhPage from "../Pages/SearchPage/Display";
import HomePage from "../Pages/Home/Home";

// import page

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearhPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp;
