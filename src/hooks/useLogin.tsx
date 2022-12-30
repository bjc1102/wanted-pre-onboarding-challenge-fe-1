import React from "react";
import { useNavigate } from "react-router-dom";

const useLogin = () => {
  const navigate = useNavigate();
  const LoginLogic = (token: string) => {
    localStorage.setItem("token", token);
    navigate("/");
  };
  return LoginLogic;
};

export default useLogin;
