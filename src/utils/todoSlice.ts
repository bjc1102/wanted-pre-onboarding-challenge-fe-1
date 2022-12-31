import { TodoDataType } from "../types/todo";

export const todoSlice = (todos: TodoDataType[], index: number) => {
  const prev = todos.slice(0, index);
  const next = todos.slice(index + 1);

  return { prev, next };
};
