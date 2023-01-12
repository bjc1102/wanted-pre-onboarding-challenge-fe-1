import React from "react";
import { useQuery, useQueryClient } from "react-query";
import { TodoAPI } from "../../../lib/instance";
import { TodoDataResponse, TodoFormType } from "../../../types/todo";
import { todoSlice } from "../../../utils/todoSlice";
import { TodoListKey } from "../../../static/const";

const useGetTodoList = () => {
  const [todos, setTodos] = React.useState<TodoDataResponse[]>([]);
  const { data: todoList } = useQuery(TodoListKey, TodoAPI.getTodoList);

  const updateTodo = (index: number) => (todo: TodoFormType) =>
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

  return { todoList, updateTodo, deleteTodo };
};

export default useGetTodoList;
