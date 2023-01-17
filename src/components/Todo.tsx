import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { openAnimation } from "../utils/animation";
import { TodoDataResponse } from "../types/todo";
import { useSearchParams } from "react-router-dom";
import TodoMenu from "./TodoMenu";
import TodoUpdate from "./TodoUpdate";
import ConfirmModal from "./common/ConfirmModal";
import useModal from "../hooks/useModal";
import useDeleteTodo from "../hooks/queries/Todo/useDeleteTodo";

interface TodoProps {
  todo: TodoDataResponse;
}

const Todo = ({ todo }: TodoProps) => {
  const { id, title, content } = todo;
  const [updateMode, setUpdateMode] = useState(false);
  const [searchParam, setSearchParam] = useSearchParams();
  const { isModalOpen, handleModalOpen, handleModalClose } = useModal();
  const deleteTodo = useDeleteTodo();

  function setTodoOpen() {
    if (isTodoOpen()) return setSearchParam("");
    setSearchParam({ id: id });
  }

  function setUpdateModeFn() {
    setUpdateMode(!updateMode);
  }

  function isTodoOpen() {
    return searchParam.get("id") === id;
  }

  function handleUpdateMode(e: React.MouseEvent<HTMLButtonElement>) {
    e.stopPropagation();
    setUpdateMode(!updateMode);
  }

  function handleDeleteClick() {
    deleteTodo(id);
  }

  const TodoCard = () => {
    if (updateMode)
      return <TodoUpdate todo={todo} setUpdateMode={setUpdateModeFn} />;
    return (
      <>
        <li onClick={setTodoOpen} className="py-4 px-5">
          <div className="relative px-0 py-2 flex justify-between items-center w-full text-base text-gray-800 text-left bg-white border-0 rounded-none focus:outline-none">
            {title}
            <TodoMenu
              handleUpdateMode={handleUpdateMode}
              handleModalOpen={handleModalOpen}
            />
          </div>
          <AnimatePresence mode="wait">
            {isTodoOpen() ? (
              <motion.div {...openAnimation}>{content}</motion.div>
            ) : null}
          </AnimatePresence>
        </li>
        <ConfirmModal
          content="TODO를 삭제하시겠습니까?"
          isModalOpen={isModalOpen}
          handleSubmit={handleDeleteClick}
          handleClose={handleModalClose}
        />
      </>
    );
  };

  return TodoCard();
};

export default React.memo(Todo);
