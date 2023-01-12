import React from "react";
import { SignInitialValue } from "../static/const";
import { Link } from "react-router-dom";
import useForm from "../hooks/useForm";
import { SignType } from "../types/form";
import signValidation, { isFormValidate } from "../utils/validate";
import useSignin from "../hooks/queries/Auth/useSignin";
import Input from "./common/Input";
import SignForm from "./common/SignForm";
import Button from "./common/Button";

const LoginForm = () => {
  const SigninMutate = useSignin();
  const loginFormSubmit = (value: SignType) => SigninMutate(value);

  const { values, handleChange, handleSubmit, error } = useForm<SignType>({
    initialValue: SignInitialValue,
    validate: signValidation,
    onSubmit: loginFormSubmit,
  });

  function hasInputError(value: keyof SignType) {
    if (!values[value]) return false;
    if (error[value]) return true;
  }

  return (
    <>
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
            disabled={isFormValidate(error)}
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
