import { AnimatePresence } from "framer-motion";
import React from "react";
import useGetTodoList from "../hooks/queries/Todo/useGetTodoList";
import AddButton from "./AddButton";
import LogoutButton from "./LogoutButton";
import Todo from "./Todo";
import CreateTodo from "./CreateTodo";

const TodoList = () => {
  const [isWriteFormOpen, setIsWriteFormOpen] = React.useState(false);
  const setOpen = () => setIsWriteFormOpen(!isWriteFormOpen);

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
          <LogoutButton />
        </div>
        <AddButton setOpen={setOpen} />
      </div>
      <ul className="max-w-4xl p-10 mx-auto mt-10 mb-5 flex flex-col gap-1 divide-y border border-solid border-gray-200 rounded-lg">
        <AnimatePresence>
          {isWriteFormOpen && <CreateTodo setOpen={setOpen} />}
        </AnimatePresence>
        {todoSpreader()}
      </ul>
    </div>
  );
};

export default TodoList;
