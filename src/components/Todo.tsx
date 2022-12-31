import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { TodoVars } from "../utils/animation";
import { TodoDataType } from "../types/todo";
import { useSearchParams } from "react-router-dom";

const Todo = ({ id, title, content }: TodoDataType) => {
  const [searchParam, setSearchParam] = useSearchParams();
  const handleClick = () => setSearchParam({ id: id });

  return (
    <li onClick={handleClick} className="py-4 px-5">
      <div className="relative px-0 py-2 flex items-center w-full text-base text-gray-800 text-left bg-white border-0 rounded-none focus:outline-none">
        {title}
        <div>{/* 수정/삭제버튼 위치 */}</div>
      </div>
      <AnimatePresence mode="wait">
        {true && (
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
