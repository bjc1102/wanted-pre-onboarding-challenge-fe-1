import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../components/Login";
import SignUp from "../components/SignUp";

export const initialValue = {
  email: "",
  password: "",
};

const Auth = () => {
  return (
    <Routes>
      <Route path="" element={<Login />} />
      <Route path="signup" element={<SignUp />} />
    </Routes>
  );
};

export default Auth;
