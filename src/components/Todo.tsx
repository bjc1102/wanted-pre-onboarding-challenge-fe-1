import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { TodoVars } from "../utils/animation";
import { TodoDataResponse, TodoFormType } from "../types/todo";
import { useLocation, useSearchParams } from "react-router-dom";
import DeleteTodo from "./DeleteTodo";
import UpdateTodo from "./UpdateTodo";
import PenSquare from "../assets/PenSquare";

interface TodoProps {
  todo: TodoDataResponse;
}

const Todo = ({ todo }: TodoProps) => {
  const { id, title, content } = todo;
  const [searchParam, setSearchParam] = useSearchParams();

  function setTodoOpen() {
    if (isTodoOpen()) return setSearchParam("");
    setSearchParam({ id: id });
  }

  function isTodoOpen() {
    return searchParam.get("id") === id;
  }

  const TodoCard = () => {
    // if (searchParam.get("id") === id && searchParam.get("mode") === "write") {
    //   return (
    //     <UpdateTodo
    //       {...{ id, title, content }}
    //       updateTodo={handleUpdateTodo}
    //       handleClose={handleWriteMode}
    //     />
    //   );
    // }
    return (
      <li onClick={setTodoOpen} className="py-4 px-5">
        <div className="relative px-0 py-2 flex justify-between items-center w-full text-base text-gray-800 text-left bg-white border-0 rounded-none focus:outline-none">
          {title}
          <div className="flex justify-center items-center gap-2">
            <div className="w-5 h-5 p-1 box-content cursor-pointer">
              <PenSquare />
            </div>
            {/* <DeleteTodo deleteTodo={handleDeleteTodo} id={id} /> */}
          </div>
        </div>
        <AnimatePresence mode="wait">
          {isTodoOpen() ? (
            <motion.div
              variants={TodoVars}
              initial="start"
              animate="animation"
              exit="end"
              key="num"
            >
              {content}
            </motion.div>
          ) : null}
        </AnimatePresence>
      </li>
    );
  };

  return TodoCard();
};

export default React.memo(Todo);
