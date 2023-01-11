import React from "react";
import { motion } from "framer-motion";
import { TodoVars } from "../utils/animation";

import useForm from "../hooks/useForm";
import { TodoInitialValue as initialValue } from "../static/const";
import TodoForm from "./TodoForm";
import useCreateTodo from "../hooks/queries/Todo/useCreateTodo";

import { TodoFormType } from "../types/todo";

interface CreateTodoProps {
  setOpen: () => void;
}

const CreateTodo = ({ setOpen }: CreateTodoProps) => {
  const createTodo = useCreateTodo();
  const createNewTodo = (value: TodoFormType) => createTodo(value);

  const { handleChange, handleSubmit } = useForm<TodoFormType>({
    initialValue,
    onSubmit: createNewTodo,
  });

  return (
    <motion.li
      className="px-3"
      variants={TodoVars}
      initial="start"
      animate="animation"
      exit="end"
    >
      <TodoForm
        handleClose={setOpen}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      >
        <div className="flex float-right mt-3 gap-1 text-base">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            등록하기
          </button>
          <button
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            취소하기
          </button>
        </div>
      </TodoForm>
    </motion.li>
  );
};

export default CreateTodo;
