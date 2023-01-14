import { To } from "react-router-dom";
import { SignFormType } from "./form";

export interface AuthResponse {
  message: string;
  token: string;
}

export function isAuthResponseType(data: unknown): data is AuthResponse {
  const isAuthResponse =
    typeof data === "object" &&
    "token" in (data as any) &&
    typeof (data as any)["token"] === "string";
  if (isAuthResponse === false) throw new Error("data is not AuthResponse");
  return isAuthResponse;
}

export interface AuthContextType {
  token: boolean;
  SignIn: (callback?: VoidFunction) => (SignData: SignFormType) => void;
  SignUp: (callback?: VoidFunction) => (SignData: SignFormType) => void;
  LogOut: (callback?: VoidFunction) => void;
  SignNavigateCallback: (route: To) => VoidFunction;
}
