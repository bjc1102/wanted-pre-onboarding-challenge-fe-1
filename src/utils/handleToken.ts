import history from "../lib/history";
import { AuthResponse } from "../types/Auth";

const checkToken = (msg = "로그인이 필요한 서비스입니다") => {
  if (history.location.pathname !== "/auth") {
    localStorage.removeItem("token");
    history.replace("/auth");
    window.alert(msg);
  }
};

const storageToken = (response: AuthResponse) => {
  localStorage.setItem("token", response.token);
  history.replace("/");
};

export { checkToken, storageToken };
