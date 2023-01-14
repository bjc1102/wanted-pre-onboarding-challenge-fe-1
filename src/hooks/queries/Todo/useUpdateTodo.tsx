import React from "react";
import { useMutation, useQueryClient } from "react-query";
import { TodoAPI } from "../../../lib/instance";
import { TodoListKey } from "../../../static/const";
import { TodoDataResponse } from "../../../types/todo";
import { todoSlice } from "../../../utils/todoSlice";
import { SuccessToast } from "../../../utils/tostify";

const useUpdateTodo = (onSucceeded?: () => void) => {
  const queryClient = useQueryClient();

  const { mutate: updateTodo } = useMutation(TodoAPI.updateTodo, {
    onSuccess(todo) {
      queryClient.setQueryData<TodoDataResponse[]>(TodoListKey, (oldData) => {
        if (!oldData) return [];
        const index = oldData.findIndex((v) => v.id === todo.id);
        const { prev, next } = todoSlice(oldData, index);
        return [...prev, todo, ...next];
      });
      if (onSucceeded) onSucceeded();
      SuccessToast("Todo가 수정되었습니다.");
    },
  });

  return updateTodo;
};

export default useUpdateTodo;
