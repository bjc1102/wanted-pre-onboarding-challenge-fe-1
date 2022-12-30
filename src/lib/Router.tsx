import React from "react";
import { Route, Routes } from "react-router-dom";
import SignUp from "../pages/SignUp";

import Auth from "../pages/Auth";
import Home from "../pages/Home";

const Router = () => {
  return (
    <Routes>
      <Route path="" element={<Home />} />
      <Route path="/auth/*" element={<Auth />} />
      <Route path="/auth/signup" element={<SignUp />} />
    </Routes>
  );
};

export default Router;
