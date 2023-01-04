import React from "react";
import handleToken from "../utils/handleToken";

const LogoutButton = () => {
  const handleClick = () => handleToken("로그아웃 되었습니다.");

  return (
    <button
      onClick={handleClick}
      className="px-5 py-2 font-medium bg-blue-50 hover:bg-blue-100 hover:text-blue-600 text-blue-500 rounded-lg text-sm"
    >
      로그아웃
    </button>
  );
};

export default LogoutButton;
