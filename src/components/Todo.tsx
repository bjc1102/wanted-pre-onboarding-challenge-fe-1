import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { TodoVars } from "../utils/animation";
import { TodoDataType } from "../types/todo";
import { useSearchParams } from "react-router-dom";
import DeleteTodo from "./DeleteTodo";
import UpdateTodo from "./UpdateTodo";

interface TodoProps extends TodoDataType {
  index: number;
  updateTodo: (todo: TodoDataType, index: number) => void;
  deleteTodo: (index: number) => void;
}

const Todo = ({
  id,
  title,
  content,
  index,
  updateTodo,
  deleteTodo,
}: TodoProps) => {
  const [searchParam, setSearchParam] = useSearchParams();
  const [isReadMode, setIsReadMode] = React.useState(false);
  const isOpen = () => searchParam.get("id") === id;
  const handleClick = () => {
    if (isOpen()) setSearchParam("");
    else setSearchParam({ id: id });
  };
  const deleteTodoData = (index: number) => {
    setSearchParam("", { replace: true });
    deleteTodo(index);
  };

  return (
    <li onClick={handleClick} className="py-4 px-5">
      <div className="relative px-0 py-2 flex justify-between items-center w-full text-base text-gray-800 text-left bg-white border-0 rounded-none focus:outline-none">
        {title}
        <div className="flex justify-center items-center gap-2">
          <UpdateTodo updateTodo={updateTodo} id={id} index={index} />
          <DeleteTodo deleteTodo={deleteTodoData} id={id} index={index} />
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
  );
};

export default React.memo(Todo);
