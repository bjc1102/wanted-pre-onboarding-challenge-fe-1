import React from "react";
import AddBtn from "./AddBtn";
import Tab from "./Tab";

export const initialTodo = {
  title: "",
  description: "",
};

const TodoList = () => {
  const arr = Array.from({ length: 30 }, (v, index) => index);
  return (
    <div className="w-full mt-5">
      <div className="max-w-4xl mx-auto flex justify-between">
        <h2 className="">MY TODO</h2>
        <AddBtn />
      </div>
      <ul className="max-w-4xl mx-auto mt-10 mb-5 flex flex-col gap-1 divide-y border border-solid border-gray-200 rounded-lg">
        {arr.map((v) => {
          return <Tab key={v} num={v} />;
        })}
      </ul>
    </div>
  );
};

export default TodoList;
