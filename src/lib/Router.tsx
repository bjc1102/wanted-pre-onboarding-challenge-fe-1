import React from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import SignUp from "../pages/SignUp";

import Auth from "../pages/Auth";
import Home from "../pages/Home";
import handleToken from "../utils/handleToken";

const Router = () => {
  const location = useLocation();

  React.useEffect(() => {
    const token = localStorage.getItem("token");
    if (token === null && location.pathname !== "/auth") handleToken();
  }, [localStorage.getItem("token")]);

  return (
    <Routes>
      <Route path="" element={<Home />} />
      <Route path="/auth/*" element={<Auth />} />
      <Route path="/auth/signup" element={<SignUp />} />
    </Routes>
  );
};

export default Router;
