import React from "react";
import PenSquare from "../assets/PenSquare";
import Xmark from "../assets/Xmark";

type Props = {
  handleUpdateMode: (e: React.MouseEvent<HTMLButtonElement>) => void;
  handleModalOpen: VoidFunction;
};

const TodoMenu = ({ handleModalOpen, handleUpdateMode }: Props) => {
  return (
    <div className="flex justify-center items-center gap-2">
      <button
        onClick={handleUpdateMode}
        className="w-5 h-5 p-2 box-content cursor-pointer bg-white outline-none"
      >
        <PenSquare />
      </button>
      <button
        onClick={handleModalOpen}
        className="w-7 h-7 p-1 box-content cursor-pointer bg-white outline-none"
      >
        <Xmark />
      </button>
    </div>
  );
};

export default TodoMenu;
