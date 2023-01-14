import React from "react";
import { Route, Routes } from "react-router-dom";
import SignUp from "../pages/SignUp";

import Auth from "../pages/Auth";
import Home from "../pages/Home";
import AuthProvider from "../hooks/Auth/AuthProvider";
import RequireAuth from "../hooks/Auth/RequireAuth";

const Router = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route
          index
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        />
        <Route path="/auth" element={<Auth />} />
        <Route path="/auth/signup" element={<SignUp />} />
        <Route path="*" element={<>NULL</>} />
      </Routes>
    </AuthProvider>
  );
};

export default Router;
