import React from "react";
import PenSquare from "../assets/PenSquare";
import { handleTodoDataType, TodoDataType } from "../types/todo";

interface UpdateTodoProps extends handleTodoDataType {
  updateTodo: (todo: TodoDataType, index: number) => void;
}

const UpdateTodo = ({ id, index, updateTodo }: UpdateTodoProps) => {
  return (
    <div className="w-5 h-5 p-1 box-content cursor-pointer">
      <PenSquare />
    </div>
  );
};

export default UpdateTodo;
