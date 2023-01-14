import React from "react";
import { useQuery, useQueryClient } from "react-query";
import { TodoAPI } from "../../../lib/instance";
import { TodoDataResponse, TodoFormType } from "../../../types/todo";
import { todoSlice } from "../../../utils/todoSlice";
import { TodoListKey } from "../../../static/const";

const useGetTodoList = () => {
  const { data: todoList } = useQuery(TodoListKey, TodoAPI.getTodoList);

  return todoList;
};

export default useGetTodoList;
