import React from "react";
import PenSquare from "../assets/PenSquare";
import Xmark from "../assets/Xmark";
import useDeleteTodo from "../hooks/queries/Todo/useDeleteTodo";

type Props = {
  id: string;
  handleUpdateMode: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const TodoMenu = (props: Props) => {
  const deleteTodo = useDeleteTodo(props.id);
  function handleDeleteClick() {
    deleteTodo(props.id);
  }

  return (
    <div className="flex justify-center items-center gap-2">
      <button
        onClick={props.handleUpdateMode}
        className="w-5 h-5 p-2 box-content cursor-pointer bg-white outline-none"
      >
        <PenSquare />
      </button>
      <button
        onClick={handleDeleteClick}
        className="w-7 h-7 p-1 box-content cursor-pointer bg-white outline-none"
      >
        <Xmark />
      </button>
    </div>
  );
};

export default TodoMenu;
