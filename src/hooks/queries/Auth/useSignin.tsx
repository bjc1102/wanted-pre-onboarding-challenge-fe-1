import React from "react";
import { useMutation } from "react-query";
import { AuthAPI } from "../../../lib/instance";
import { storageToken } from "../../../utils/handleToken";

const useSignin = () => {
  const { mutate: doSignin } = useMutation(AuthAPI.signin, {
    onSuccess(data) {
      storageToken(data);
    },
  });
  return doSignin;
};

export default useSignin;
