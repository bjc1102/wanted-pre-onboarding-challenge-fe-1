import React from "react";
import { motion } from "framer-motion";
import { TodoVars } from "../utils/animation";

import useForm from "../hooks/useForm";
import { initialTodo } from "./TodoList";
import API from "../lib/instance";
import { TodoDataType, TodoType } from "../types/todo";
import { ValueType } from "../types/util";
import { AxiosResponse } from "axios";
import TodoForm from "./TodoForm";

interface WriteTodoProps {
  setOpen: () => void;
  createTodo: (value: TodoDataType) => void;
}

const WriteTodo = ({ setOpen, createTodo }: WriteTodoProps) => {
  const onSuccess = (response: AxiosResponse<any, any>) => {
    createTodo(response.data.data);
    setOpen();
  };

  const createTodoAPI = (value: ValueType) => API.createTodo(value as TodoType);
  const onSubmit = () => {
    return {
      API: createTodoAPI,
      onSuccess: onSuccess,
    };
  };

  const { handleChange, handleSubmit } = useForm({
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
      <TodoForm
        handleClose={setOpen}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </motion.li>
  );
};

export default WriteTodo;
