import React from "react";
import { TodoType } from "../types/todo";

interface TodoFormProps {
  value?: TodoType;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

const TodoForm = ({ value, handleChange, handleSubmit }: TodoFormProps) => {
  console.log(value);

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={value?.title}
        required
        type="text"
        name="title"
        onChange={handleChange}
        placeholder="TODO 제목을 입력해주세요"
        className="my-2 bg-gray-50 placeholder:text-gray-400 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      />
      <textarea
        value={value?.content}
        required
        name="content"
        onChange={handleChange}
        placeholder="TODO 내용을 입력해주세요"
        className="w-full p-2.5 placeholder:text-gray-400 rounded-sm bg-gray-50 min-h-[40px] block text-sm border border-solid border-gray-300"
      />
      <button
        className="float-right mt-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="submit"
      >
        등록하기
      </button>
    </form>
  );
};

export default TodoForm;
