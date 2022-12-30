import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../components/Login";
import SignUp from "./SignUp";

export const initialValue = {
  email: "",
  password: "",
};

const Auth = () => {
  return <Login />;
};

export default Auth;
