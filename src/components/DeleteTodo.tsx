import React from "react";
import Xmark from "../assets/Xmark";
import { TodoAPI } from "../lib/instance";

interface DeleteTodoProps {
  id: string;
  deleteTodo: () => void;
}

const DeleteTodo = ({ id, deleteTodo }: DeleteTodoProps) => {
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    TodoAPI.deleteTodo(id).then(() => {
      deleteTodo();
    });
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
