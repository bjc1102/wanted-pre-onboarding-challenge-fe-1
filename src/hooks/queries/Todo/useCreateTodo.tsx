import React from "react";
import { useMutation, useQueryClient } from "react-query";
import { TodoAPI } from "../../../lib/instance";
import { TodoListKey } from "../../../static/const";
import { TodoDataResponse } from "../../../types/todo";

const useCreateTodo = () => {
  const queryClient = useQueryClient();

  const { mutate: createTodo } = useMutation(TodoAPI.createTodo, {
    onSuccess(todo) {
      console.log(todo);
      queryClient.setQueryData<TodoDataResponse[]>(TodoListKey, (oldData) => {
        if (!oldData) return [];
        return [...oldData, todo];
      });
    },
  });

  return createTodo;
};

export default useCreateTodo;
