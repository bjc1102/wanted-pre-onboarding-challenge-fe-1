import React from "react";
import useUpdateTodo from "../hooks/queries/Todo/useUpdateTodo";
import useForm from "../hooks/useForm";
import { TodoDataResponse, TodoFormType } from "../types/todo";
import TodoForm from "./TodoForm";

interface TodoUpdateProps {
  todo: TodoDataResponse;
}

const TodoUpdate = ({ todo }: TodoUpdateProps) => {
  const updateTodo = useUpdateTodo();
  const updateTodoAPI = (values: TodoFormType) => updateTodo(values);

  const { values, handleChange, handleSubmit } = useForm<TodoFormType>({
    initialValue: { title: todo.title, content: todo.content },
    onSubmit: updateTodoAPI,
  });

  return (
    <TodoForm
      value={values}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default TodoUpdate;
