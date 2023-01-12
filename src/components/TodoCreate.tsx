import React from "react";
import { motion } from "framer-motion";
import { openAnimation, TodoVars } from "../utils/animation";

import useForm from "../hooks/useForm";
import { TodoInitialValue as initialValue } from "../static/const";
import TodoForm from "./TodoForm";
import useCreateTodo from "../hooks/queries/Todo/useCreateTodo";

import { TodoFormType } from "../types/todo";
import Button from "./common/Button";

interface CreateTodoProps {
  setWriteFormOpen: () => void;
}

const TodoCreate = ({ setWriteFormOpen }: CreateTodoProps) => {
  const createTodo = useCreateTodo(setWriteFormOpen);
  const createNewTodo = (value: TodoFormType) => createTodo(value);

  const { handleChange, handleSubmit } = useForm<TodoFormType>({
    initialValue,
    onSubmit: createNewTodo,
  });

  return (
    <motion.li className="px-3" {...openAnimation}>
      <TodoForm handleChange={handleChange} handleSubmit={handleSubmit}>
        <Button style_type="primary" type="submit">
          저장하기
        </Button>
        <Button onClick={setWriteFormOpen} style_type="secondary" type="button">
          취소하기
        </Button>
      </TodoForm>
    </motion.li>
  );
};

export default TodoCreate;
