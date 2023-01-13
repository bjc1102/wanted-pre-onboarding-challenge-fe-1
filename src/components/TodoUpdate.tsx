import React from "react";
import useUpdateTodo from "../hooks/queries/Todo/useUpdateTodo";
import useForm from "../hooks/useForm";
import { TodoDataResponse, TodoFormType } from "../types/todo";
import Button from "./common/Button";
import TodoForm from "./common/TodoForm";

interface TodoUpdateProps {
  todo: TodoDataResponse;
  setUpdateMode: () => void;
}

const TodoUpdate = ({ todo, setUpdateMode }: TodoUpdateProps) => {
  const updateTodo = useUpdateTodo(setUpdateMode);
  const updateTodoAPI = (values: TodoFormType) =>
    updateTodo({ id: todo.id, value: values });

  const { values, handleChange, handleSubmit } = useForm<TodoFormType>({
    initialValue: { title: todo.title, content: todo.content },
    onSubmit: updateTodoAPI,
  });

  return (
    <TodoForm
      value={values}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    >
      <Button style_type="primary" type="submit">
        수정하기
      </Button>
      <Button onClick={setUpdateMode} style_type="secondary" type="button">
        취소하기
      </Button>
    </TodoForm>
  );
};

export default TodoUpdate;
