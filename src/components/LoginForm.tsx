import React from "react";
import { SignInitialValue } from "../static/const";
import { Link, useLocation } from "react-router-dom";
import useForm from "../hooks/useForm";
import { SignFormType } from "../types/form";
import signValidation, { isFormValidate } from "../utils/validate";
import Input from "./common/Input";
import SignForm from "./common/SignForm";
import Button from "./common/Button";
import { useAuth } from "../hooks/Auth/AuthProvider";

const LoginForm = () => {
  const auth = useAuth();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const { values, handleChange, handleSubmit, error } = useForm<SignFormType>({
    initialValue: SignInitialValue,
    validate: signValidation,
    onSubmit: auth.SignIn(auth.SignNavigateCallback(from)),
  });

  function hasInputError(value: keyof SignFormType) {
    if (!values[value]) return false;
    if (error[value]) return true;
  }

  return (
    <>
      <h1 className="w-full text-center text-lg bg-slate-200 max-w-xs mb-3">
        로그인 폼
      </h1>
      <SignForm onSubmit={handleSubmit}>
        <div className="mb-6">
          <Input
            label="Email"
            onChange={handleChange}
            type="email"
            placeholder="example@example.com"
            name="email"
            required
          />
          {hasInputError("email") ? (
            <span className="text-red-500">{error.email}</span>
          ) : null}
        </div>
        <div className="mb-6">
          <Input
            label="Password"
            onChange={handleChange}
            type="password"
            placeholder="비밀번호는 8자리 이상이어야 합니다"
            name="password"
            required
          />
          {hasInputError("password") ? (
            <span className="text-red-500">{error.password}</span>
          ) : null}
        </div>
        <div className="flex items-center justify-between">
          <Button
            disabled={isFormValidate<SignFormType>(error)}
            style_type="disabled"
            type="submit"
          >
            로그인
          </Button>
          <Link to="/auth/signup">
            <span className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
              회원가입하기
            </span>
          </Link>
        </div>
      </SignForm>
    </>
  );
};

export default LoginForm;
