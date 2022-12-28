import React from "react";
import useForm from "../hooks/useForm";
import API from "../lib/instance";
import { initialValue } from "../pages/Auth";
import { createObjType, SignType } from "../types/util";
import submit from "../utils/submit";
import signValidation, { isFormValidate } from "../utils/validate";

const SignUp = () => {
  const onSubmit = async (value: createObjType<SignType>) => {
    const result = await API.signup(value);
    submit(result);
  };

  const { handleChange, handleSubmit, error } = useForm({
    initialValue,
    validate: signValidation,
    onSubmit,
  });

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-sm">
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
            Email
          </label>
        </div>
        <div className="md:w-2/3">
          <input
            onChange={handleChange}
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            type="email"
            placeholder="example@example.com"
            name="email"
          />
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
            Password
          </label>
        </div>
        <div className="md:w-2/3">
          <input
            onChange={handleChange}
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            type="password"
            placeholder="비밀번호는 8자리 이상이어야 합니다"
            name="password"
          />
        </div>
      </div>
      <div className="md:flex md:items-center">
        <div className="md:w-1/3"></div>
        <div className="md:w-2/3">
          <button
            disabled={isFormValidate(error)}
            className="shadow disabled:opacity-75 disabled:text-gray-300 bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            회원가입
          </button>
        </div>
      </div>
    </form>
  );
};

export default SignUp;
