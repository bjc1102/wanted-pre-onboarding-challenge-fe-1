import React, { ReactNode } from "react";
import { TodoFormType } from "../types/todo";
import Button from "./common/Button";

interface TodoFormProps {
  value?: TodoFormType;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  children: ReactNode;
}

const TodoForm = ({
  value,
  handleChange,
  handleSubmit,
  children,
}: TodoFormProps) => {
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
        className="w-full p-2.5 placeholder:text-gray-400 rounded-sm bg-gray-50 min-h-[100px] block text-sm border border-solid border-gray-300"
      />
      <div className="flex float-right mt-3 gap-1 text-base">{children}</div>
    </form>
  );
};

export default TodoForm;
