import React from "react";
import { useMutation } from "@tanstack/react-query";
import { AuthAPI } from "../../../lib/instance";

const useSignUp = () => {
  const { mutate: SignUpMutate } = useMutation(AuthAPI.signup);
  return SignUpMutate;
};

export default useSignUp;
