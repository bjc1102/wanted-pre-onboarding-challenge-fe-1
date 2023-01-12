import React from "react";
import { motion } from "framer-motion";
import { openAnimation, TodoVars } from "../utils/animation";

import useForm from "../hooks/useForm";
import { TodoInitialValue as initialValue } from "../static/const";
import TodoForm from "./TodoForm";
import useCreateTodo from "../hooks/queries/Todo/useCreateTodo";

import { TodoFormType } from "../types/todo";

interface CreateTodoProps {
  setTodoOpen: () => void;
}

const TodoCreate = ({ setTodoOpen }: CreateTodoProps) => {
  const createTodo = useCreateTodo();
  const createNewTodo = (value: TodoFormType) => createTodo(value);

  const { handleChange, handleSubmit } = useForm<TodoFormType>({
    initialValue,
    onSubmit: createNewTodo,
  });

  return (
    <motion.li className="px-3" {...openAnimation}>
      <TodoForm handleChange={handleChange} handleSubmit={handleSubmit} />
    </motion.li>
  );
};

export default TodoCreate;
