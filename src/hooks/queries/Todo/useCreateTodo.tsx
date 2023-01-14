import React from "react";
import { useMutation, useQueryClient } from "react-query";
import { TodoAPI } from "../../../lib/instance";
import { TodoListKey } from "../../../static/const";
import { TodoDataResponse } from "../../../types/todo";
import { SuccessToast } from "../../../utils/tostify";

const useCreateTodo = (onSucceeded?: () => void) => {
  const queryClient = useQueryClient();

  const { mutate: createTodo } = useMutation(TodoAPI.createTodo, {
    onSuccess(todo) {
      queryClient.setQueryData<TodoDataResponse[]>(TodoListKey, (oldData) => {
        if (!oldData) return [];
        return [...oldData, todo];
      });
      if (onSucceeded) onSucceeded();
      SuccessToast("TODO가 저장되었습니다.");
    },
  });

  return createTodo;
};

export default useCreateTodo;
