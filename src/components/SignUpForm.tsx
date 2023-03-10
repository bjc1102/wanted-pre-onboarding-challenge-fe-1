import React from "react";
import useForm from "../hooks/useForm";
import { SignInitialValue } from "../static/const";
import { SignFormType } from "../types/form";
import signValidation, { isFormValidate } from "../utils/validate";
import Input from "./common/Input";
import Button from "./common/Button";
import SignForm from "./common/SignForm";
import { useAuth } from "../hooks/Auth/AuthProvider";

const SignUpForm = () => {
  const auth = useAuth();
  const { values, handleChange, handleSubmit, error } = useForm<SignFormType>({
    initialValue: SignInitialValue,
    validate: signValidation,
    onSubmit: auth.SignUp(auth.SignNavigateCallback("")),
  });

  function hasInputError(value: keyof SignFormType) {
    if (!values[value]) return false;
    if (error[value]) return true;
  }

  return (
    <>
      <h1 className="w-full text-center text-lg bg-slate-200 max-w-xs mb-3">
        회원가입 폼
      </h1>
      <SignForm onSubmit={handleSubmit}>
        <div className="mb-6">
          <Input
            label="Email"
            type="email"
            name="email"
            onChange={handleChange}
            placeholder="example@example.com"
          />
          {hasInputError("email") ? (
            <span className="text-red-500">{error.email}</span>
          ) : null}
        </div>
        <div className="mb-6">
          <Input
            label="Password"
            type="password"
            name="password"
            onChange={handleChange}
            placeholder="비밀번호는 8자리 이상이어야 합니다"
          />
          {hasInputError("password") ? (
            <span className="text-red-500">{error.password}</span>
          ) : null}
        </div>
        <div className="flex items-center justify-between">
          <Button
            style_type="disabled"
            disabled={isFormValidate<SignFormType>(error)}
            type="submit"
          >
            회원가입
          </Button>
        </div>
      </SignForm>
    </>
  );
};

export default SignUpForm;
