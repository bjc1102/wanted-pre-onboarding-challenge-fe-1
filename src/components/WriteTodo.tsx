import React from "react";
import { motion } from "framer-motion";
import { TodoVars } from "../utils/animation";

import useForm from "../hooks/useForm";
import { initialTodo } from "./TodoList";
import API from "../lib/instance";
import { TodoDataType, TodoType } from "../types/todo";
import { ValueType } from "../types/util";
import { AxiosResponse } from "axios";

interface WriteTodoProps {
  setOpen: () => void;
  setTodo: (value: TodoDataType) => void;
}

const WriteTodo = ({ setOpen, setTodo }: WriteTodoProps) => {
  const onSuccess = (response: AxiosResponse<any, any>) => {
    setTodo(response.data.data);
    setOpen();
  };
  const createTodoAPI = (value: ValueType) => API.createTodo(value as TodoType);
  const onSubmit = () => {
    return {
      API: createTodoAPI,
      onSuccess: onSuccess,
    };
  };

  const { values, handleChange, handleSubmit } = useForm({
    initialValue: initialTodo,
    onSubmit,
  });

  return (
    <motion.li
      className="px-3"
      variants={TodoVars}
      initial="start"
      animate="animation"
      exit="end"
    >
      <form onSubmit={handleSubmit}>
        <input
          required
          type="text"
          name="title"
          onChange={handleChange}
          placeholder="TODO 제목을 입력해주세요"
          className="my-2 bg-gray-50 placeholder:text-gray-400 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        />
        <textarea
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
    </motion.li>
  );
};

export default WriteTodo;
