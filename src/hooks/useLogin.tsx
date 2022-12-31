import { AxiosResponse } from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

const useLogin = () => {
  const navigate = useNavigate();
  const LoginLogic = (response: AxiosResponse<any, any>) => {
    localStorage.setItem("token", response.data.token);
    navigate("");
  };
  return LoginLogic;
};

export default useLogin;
