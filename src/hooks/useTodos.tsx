import React from "react";
import { TodoAPI } from "../lib/instance";
import { TodoDataType, TodoType } from "../types/todo";
import { todoSlice } from "../utils/todoSlice";

const TodoListKey = ["TodoList"];

const useTodos = () => {
  const [todos, setTodos] = React.useState<TodoDataType[]>([]);

  const createTodo = (value: TodoDataType) =>
    setTodos((prev) => [...prev, value]);

  const updateTodo = (index: number) => (todo: TodoType) =>
    setTodos((todos) => {
      const { prev, next } = todoSlice(todos, index);
      const updatedTodo = Object.assign(todos[index], todo);
      return [...prev, updatedTodo, ...next];
    });

  const deleteTodo = (index: number) => () =>
    setTodos((todos) => {
      const { prev, next } = todoSlice(todos, index);
      return [...prev, ...next];
    });

  React.useEffect(() => {
    TodoAPI.getTodos().then((response) => {
      setTodos(response.data.data);
    });
  }, []);

  return { todos, createTodo, updateTodo, deleteTodo };
};

export default useTodos;
