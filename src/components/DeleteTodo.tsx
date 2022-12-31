import React from "react";
import Xmark from "../assets/Xmark";
import API from "../lib/instance";
import { handleTodoDataType } from "../types/todo";

interface DeleteTodoProps extends handleTodoDataType {
  deleteTodo: (index: number) => void;
}

const DeleteTodo = ({ id, index, deleteTodo }: DeleteTodoProps) => {
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    API.deleteTodo(id).then(() => deleteTodo(index));
  };

  return (
    <div
      onClick={handleClick}
      className="w-6 h-6 p-1 box-content cursor-pointer"
    >
      <Xmark />
    </div>
  );
};

export default DeleteTodo;
