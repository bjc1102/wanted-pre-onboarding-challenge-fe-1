import React from "react";
import { useMutation, useQueryClient } from "react-query";
import { TodoAPI } from "../../../lib/instance";
import { TodoListKey } from "../../../static/const";
import { TodoDataResponse } from "../../../types/todo";
import { todoSlice } from "../../../utils/todoSlice";

const useDeleteTodo = (id: string) => {
  const queryClient = useQueryClient();

  const { mutate: deleteTodo } = useMutation(TodoAPI.deleteTodo, {
    onSuccess(todo) {
      queryClient.setQueryData<TodoDataResponse[]>(TodoListKey, (oldData) => {
        if (!oldData) return [];
        const index = oldData.findIndex((v) => v.id === id);
        const { prev, next } = todoSlice(oldData, index);
        return [...prev, ...next];
      });
    },
  });

  return deleteTodo;
};

export default useDeleteTodo;
