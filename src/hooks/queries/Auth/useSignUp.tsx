import React from "react";
import { useMutation } from "react-query";
import { AuthAPI } from "../../../lib/instance";
import { storageToken } from "../../../utils/handleToken";

const useSignUp = () => {
  const { mutate: SignUpMutate } = useMutation(AuthAPI.signup, {
    onSuccess(data) {
      storageToken(data);
    },
  });
  return SignUpMutate;
};

export default useSignUp;
