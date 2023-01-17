import React from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { TodoAPI } from "../../../lib/instance";
import { TodoListKey } from "../../../static/const";

const useGetTodoList = () => {
  const { data: todoList } = useQuery(TodoListKey, TodoAPI.getTodoList);

  return todoList;
};

export default useGetTodoList;
