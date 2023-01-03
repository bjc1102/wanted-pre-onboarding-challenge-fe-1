import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { TodoVars } from "../utils/animation";
import { TodoDataType, TodoType } from "../types/todo";
import { useSearchParams } from "react-router-dom";
import DeleteTodo from "./DeleteTodo";
import UpdateTodo from "./UpdateTodo";
import PenSquare from "../assets/PenSquare";
import API from "../lib/instance";

interface TodoProps {
  todo: TodoDataType;
  updateTodo: (todo: TodoType) => void;
  deleteTodo: () => void;
}

const Todo = ({ todo, updateTodo, deleteTodo }: TodoProps) => {
  const { id, title, content } = todo;
  const [searchParam, setSearchParam] = useSearchParams();
  const [isReadMode, setIsReadMode] = React.useState(true);
  const isOpen = () => searchParam.get("id") === id;
  const handleOpenTodo = () => {
    if (isOpen()) setSearchParam("");
    else setSearchParam({ id: id });
  };
  const handleDeleteTodo = () => {
    setSearchParam("", { replace: true });
    deleteTodo();
  };
  const handleReadMode = () => setIsReadMode(!isReadMode);
  const handleUpdateTodo = ({
    title: updatedTitle,
    content: updatedContent,
  }: TodoType) => {
    setIsReadMode(true);
    handleOpenTodo();
    updateTodo({ title: updatedTitle, content: updatedContent });
  };

  return isReadMode ? (
    <li onClick={handleOpenTodo} className="py-4 px-5">
      <div className="relative px-0 py-2 flex justify-between items-center w-full text-base text-gray-800 text-left bg-white border-0 rounded-none focus:outline-none">
        {title}
        <div className="flex justify-center items-center gap-2">
          <div
            onClick={handleReadMode}
            className="w-5 h-5 p-1 box-content cursor-pointer"
          >
            <PenSquare />
          </div>
          <DeleteTodo deleteTodo={handleDeleteTodo} id={id} />
        </div>
      </div>
      <AnimatePresence mode="wait">
        {isOpen() && (
          <motion.div
            variants={TodoVars}
            initial="start"
            animate="animation"
            exit="end"
            key="num"
          >
            {content}
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  ) : (
    <UpdateTodo {...{ id, title, content }} updateTodo={handleUpdateTodo} />
  );
};

export default React.memo(Todo);
