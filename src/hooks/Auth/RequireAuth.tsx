import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./AuthProvider";

function RequireAuth({ children }: { children: JSX.Element }) {
  const auth = useAuth();
  const location = useLocation();

  if (!auth.token)
    return <Navigate to={"/auth"} state={{ from: location }} replace />;

  return children;
}

export default RequireAuth;
