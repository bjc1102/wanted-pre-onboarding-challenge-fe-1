import React from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { TodoAPI } from "../../../lib/instance";
import { TodoListKey } from "../../../static/const";
import { TodoDataResponse } from "../../../types/todo";
import { todoSlice } from "../../../utils/todoSlice";
import { ErrorToast, SuccessToast } from "../../../lib/tostify";

const useDeleteTodo = () => {
  const queryClient = useQueryClient();

  const { mutate: deleteTodo } = useMutation(TodoAPI.deleteTodo, {
    onSuccess(data) {
      queryClient.setQueryData<TodoDataResponse[]>(TodoListKey, (oldData) => {
        if (!oldData) return [];
        const index = oldData.findIndex((v) => v.id === data);
        const { prev, next } = todoSlice(oldData, index);
        return [...prev, ...next];
      });
      SuccessToast("TODO가 삭제되었습니다.");
    },
    onError() {
      ErrorToast("Todo를 삭제하던 중 에러가 발생했습니다...");
    },
  });

  return deleteTodo;
};

export default useDeleteTodo;
