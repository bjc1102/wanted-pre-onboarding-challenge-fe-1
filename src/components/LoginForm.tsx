import React from "react";
import { initialValue } from "../pages/Auth";
import { Link } from "react-router-dom";
import useForm from "../hooks/useForm";
import { SignType } from "../types/form";
import API from "../lib/instance";
import { ValueType } from "../types/util";
import useLogin from "../hooks/useLogin";

const LoginForm = () => {
  const LoginAPI = (value: ValueType) => API.signin(value as SignType);
  const LoginLogic = useLogin();

  const onSubmit = () => {
    return {
      API: LoginAPI,
      onSuccess: LoginLogic,
    };
  };

  const { handleChange, handleSubmit, error } = useForm({
    initialValue,
    onSubmit,
  });

  return (
    <>
      <div className="w-full max-w-xs">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 "
        >
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              placeholder="example@example.com"
              name="email"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              placeholder="비밀번호는 8자리 이상이어야 합니다"
              name="password"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="disabled:opacity-75 disabled:text-gray-300 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              로그인
            </button>
            <Link to="/auth/signup">
              <span className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
                회원가입하기
              </span>
            </Link>
          </div>
        </form>
        {error.error && (
          <span className="text-xs w-full p-4 block leading-none text-center whitespace-nowrap align-baseline font-bold bg-red-600 text-white rounded">
            {error.error}
          </span>
        )}
      </div>
    </>
  );
};

export default LoginForm;
