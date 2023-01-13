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
