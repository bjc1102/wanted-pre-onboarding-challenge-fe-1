import { AnimatePresence } from "framer-motion";
import React from "react";
import API from "../lib/instance";
import { TodoType } from "../types/todo";
import AddBtn from "./AddBtn";
import Tab from "./Tab";
import WriteTab from "./WriteTab";

export const initialTodo = {
  title: "",
  description: "",
};

const TodoList = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const setOpen = () => setIsOpen(!isOpen);
  const [todos, setTodos] = React.useState<TodoType[]>([]);

  const todoSpreader = () => {
    if (todos.length === 0)
      return <p className="text-center">TODO를 등록해주세요!</p>;
    return todos.map((v, index) => <Tab key={index} num={index} />);
  };

  React.useEffect(() => {
    (async () => {
      const result = await API.getTodo();
      setTodos(result.data.data);
    })();
  }, []);

  return (
    <div className="w-full mt-5">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <h2 className="">MY TODO</h2>
        <AddBtn setOpen={setOpen} />
      </div>
      <ul className="max-w-4xl p-10 mx-auto mt-10 mb-5 flex flex-col gap-1 divide-y border border-solid border-gray-200 rounded-lg">
        <AnimatePresence>{isOpen && <WriteTab />}</AnimatePresence>
        {todoSpreader()}
      </ul>
    </div>
  );
};

export default TodoList;
