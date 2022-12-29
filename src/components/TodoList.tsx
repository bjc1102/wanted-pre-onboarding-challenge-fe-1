import React from "react";
import Tab from "./Tab";

type Props = {};

const TodoList = (props: Props) => {
  const arr = Array.from({ length: 30 }, (v, index) => index);

  return (
    <div className="w-full">
      <div className="max-w-4xl mx-auto flex">
        <h2 className="">MY TODO</h2>
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
