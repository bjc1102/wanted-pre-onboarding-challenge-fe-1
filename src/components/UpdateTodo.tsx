import React from "react";
import useForm from "../hooks/useForm";
import API from "../lib/instance";
import { TodoType } from "../types/todo";
import { ValueType } from "../types/util";
import TodoForm from "./TodoForm";

interface UpdateTodoProps {
  id: string;
  title: string;
  content: string;
  updateTodo: () => void;
}

const UpdateTodo = ({ id, title, content, updateTodo }: UpdateTodoProps) => {
  const UpdateAPI = (value: ValueType) => API.updateTodo(value as TodoType, id);
  const handleUpdate = () => updateTodo();

  const onSubmit = () => {
    return {
      API: UpdateAPI,
      onSuccess: handleUpdate,
    };
  };

  const { values, handleChange, handleSubmit } = useForm({
    initialValue: { title, content },
    onSubmit,
  });

  return (
    <TodoForm
      {...{ value: values as TodoType }}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default UpdateTodo;
