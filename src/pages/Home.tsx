import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

type Props = {};

const Home = (props: Props) => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token === null) navigate("/auth", { replace: true });
  }, []);

  return <div>Home</div>;
};

export default Home;
