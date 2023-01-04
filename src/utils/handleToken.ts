import history from "../lib/history";

const handleToken = (msg = "로그인이 필요한 서비스입니다") => {
  if (history.location.pathname !== "/auth") {
    localStorage.removeItem("token");
    history.replace("/auth");
    window.alert(msg);
  }
};

export default handleToken;
