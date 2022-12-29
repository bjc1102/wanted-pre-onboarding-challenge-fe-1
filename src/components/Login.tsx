import React from "react";
import { initialValue } from "../pages/Auth";
import { Link, useNavigate } from "react-router-dom";
import useForm from "../hooks/useForm";
import signValidation, { isFormValidate } from "../utils/validate";
import { SignType } from "../types/form";
import API from "../lib/instance";

const Login = () => {
  const navigate = useNavigate();
  const onSubmit = async (value: SignType) => {
    const result = await API.signin(value);
    if (result.status === 200) {
      localStorage.setItem("token", result.data.token);
      navigate("/");
    }
  };

  const { handleChange, handleSubmit, error } = useForm({
    initialValue,
    validate: signValidation,
    onSubmit,
  });

  console.log(error);

  return (
    <div className="w-full max-w-xs">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
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
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            disabled={isFormValidate(error)}
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
      <p className="text-center text-gray-500 text-xs">
        &copy;2020 Acme Corp. All rights reserved.
      </p>
    </div>
  );
};

export default Login;
