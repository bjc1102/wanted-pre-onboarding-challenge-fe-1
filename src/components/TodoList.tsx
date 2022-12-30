import { AnimatePresence } from "framer-motion";
import React from "react";
import AddBtn from "./AddBtn";
import Tab from "./Tab";
import WriteTab from "./WriteTab";

export const initialTodo = {
  title: "",
  description: "",
};

const TodoList = () => {
  const arr = Array.from({ length: 30 }, (v, index) => index);
  const [isOpen, setIsOpen] = React.useState(false);
  const setOpen = () => setIsOpen(!isOpen);

  return (
    <div className="w-full mt-5">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <h2 className="">MY TODO</h2>
        <AddBtn setOpen={setOpen} />
      </div>
      <ul className="max-w-4xl mx-auto mt-10 mb-5 flex flex-col gap-1 divide-y border border-solid border-gray-200 rounded-lg">
        <AnimatePresence>{isOpen && <WriteTab />}</AnimatePresence>
        {arr.map((v) => {
          return <Tab key={v} num={v} />;
        })}
      </ul>
    </div>
  );
};

export default TodoList;
