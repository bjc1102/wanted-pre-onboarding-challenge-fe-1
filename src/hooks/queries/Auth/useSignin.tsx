import React from "react";
import { useMutation } from "react-query";
import { AuthAPI } from "../../../lib/instance";
import { storageToken } from "../../../utils/handleToken";
import { SuccessToast } from "../../../utils/tostify";

const useSignin = () => {
  const { mutate: SignInMutate } = useMutation(AuthAPI.signin, {
    onSuccess(data) {
      SuccessToast("로그인 성공!");
      storageToken(data);
    },
  });
  return SignInMutate;
};

export default useSignin;
