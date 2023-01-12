import { AnimatePresence } from "framer-motion";
import React from "react";
import useGetTodoList from "../hooks/queries/Todo/useGetTodoList";
import Button from "./common/Button";
import Todo from "./Todo";
import TodoCreate from "./TodoCreate";

const TodoList = () => {
  const [isWriteFormOpen, setIsWriteFormOpen] = React.useState(false);
  const setWriteFormOpen = () => setIsWriteFormOpen(!isWriteFormOpen);

  const { todoList } = useGetTodoList();

  const todoSpreader = () => {
    if (todoList?.length === 0)
      return <p className="text-center">TODO를 등록해주세요!</p>;
    return todoList?.map((v) => <Todo key={v.id} todo={v} />);
  };

  return (
    <div className="w-full mt-5">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <h2 className="">MY TODO</h2>
        </div>
        <div className="flex gap-2">
          <Button style_type="primary" onClick={setWriteFormOpen}>
            Todo 등록
          </Button>
          <Button style_type="secondary">로그아웃</Button>
        </div>
      </div>
      <ul className="max-w-4xl p-10 mx-auto mt-10 mb-5 flex flex-col gap-1 divide-y border border-solid border-gray-200 rounded-lg">
        <AnimatePresence>
          {isWriteFormOpen && (
            <TodoCreate setWriteFormOpen={setWriteFormOpen} />
          )}
        </AnimatePresence>
        {todoSpreader()}
      </ul>
    </div>
  );
};

export default TodoList;
