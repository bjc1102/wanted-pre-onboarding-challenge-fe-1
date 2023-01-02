import history from "../lib/history";

const handleToken = () => {
  if (history.location.pathname !== "/auth") {
    localStorage.removeItem("token");
    window.alert("로그인이 필요한 서비스입니다.");
    history.replace("/auth");
  }
};

export default handleToken;
