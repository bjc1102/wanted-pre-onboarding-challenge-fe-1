import React from "react";
import { useMutation } from "@tanstack/react-query";
import { AuthAPI } from "../../../lib/instance";

const useSignin = () => {
  const { mutate: SignInMutate } = useMutation(AuthAPI.signin);
  return SignInMutate;
};

export default useSignin;
