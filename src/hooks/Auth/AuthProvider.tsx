import React from "react";
import { To, useNavigate } from "react-router-dom";
import { AuthContextType } from "../../types/auth";
import { SignFormType } from "../../types/form";
import { findToken, removeToken, storageToken } from "../../utils/handleToken";
import useSignin from "../queries/Auth/useSignin";
import useSignUp from "../queries/Auth/useSignUp";

export const AuthContext = React.createContext<AuthContextType>(null!);

export function useAuth() {
  return React.useContext(AuthContext);
}

function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isToken, setIsToken] = React.useState(findToken());
  const SignInMutate = useSignin();
  const SignUpMutate = useSignUp();
  const navigate = useNavigate();

  function SignIn(callback?: VoidFunction) {
    return function (SignData: SignFormType) {
      SignInMutate(SignData, {
        onSuccess(response) {
          storageToken(response.token);
          setIsToken(true);
          if (callback) callback();
        },
      });
    };
  }

  function SignUp(callback?: VoidFunction) {
    return function (SignData: SignFormType) {
      SignUpMutate(SignData, {
        onSuccess(response) {
          storageToken(response.token);
          setIsToken(true);
          if (callback) callback();
        },
      });
    };
  }

  function LogOut(callback?: VoidFunction) {
    return function () {
      removeToken();
      setIsToken(false);
      if (callback) callback();
    };
  }

  function SignNavigateCallback(route: To) {
    return function () {
      navigate(route, { replace: true });
    };
  }

  const value = {
    token: isToken,
    SignIn,
    SignUp,
    LogOut,
    SignNavigateCallback,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
