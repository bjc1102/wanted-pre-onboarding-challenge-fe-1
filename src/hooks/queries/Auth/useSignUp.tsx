import React from "react";
import { useMutation } from "react-query";
import { AuthAPI } from "../../../lib/instance";
import { storageToken } from "../../../utils/handleToken";

const useSignUp = () => {
  const { mutate: doSignUp } = useMutation(AuthAPI.signup, {
    onSuccess(data) {
      storageToken(data);
    },
  });
  return doSignUp;
};

export default useSignUp;
