import React from "react";
import { useMutation } from "react-query";
import { AuthAPI } from "../../../lib/instance";
import { storageToken } from "../../../utils/handleToken";

const useSignin = () => {
  const { mutate: SignInMutate } = useMutation(AuthAPI.signin, {
    onSuccess(data) {
      storageToken(data);
    },
  });
  return SignInMutate;
};

export default useSignin;
