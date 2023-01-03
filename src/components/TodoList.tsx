import { AnimatePresence } from "framer-motion";
import React from "react";
import { useNavigate } from "react-router-dom";
import useTodos from "../hooks/useTodos";
import API from "../lib/instance";
import { TodoDataType, TodoType } from "../types/todo";
import { todoSlice } from "../utils/todoSlice";
import AddBtn from "./AddBtn";
import Todo from "./Todo";
import WriteTodo from "./WriteTodo";

export const initialTodo = {
  title: "",
  content: "",
};

const TodoList = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const setOpen = () => setIsOpen(!isOpen);

  const { todos, createTodo, updateTodo, deleteTodo } = useTodos();

  const todoSpreader = () => {
    if (todos.length === 0)
      return <p className="text-center">TODO를 등록해주세요!</p>;
    return todos.map((v, index) => (
      <Todo
        key={v.id}
        todo={v}
        updateTodo={updateTodo(index)}
        deleteTodo={deleteTodo(index)}
      />
    ));
  };

  return (
    <div className="w-full mt-5">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <h2 className="">MY TODO</h2>
        <AddBtn setOpen={setOpen} />
      </div>
      <ul className="max-w-4xl p-10 mx-auto mt-10 mb-5 flex flex-col gap-1 divide-y border border-solid border-gray-200 rounded-lg">
        <AnimatePresence>
          {isOpen && <WriteTodo setOpen={setOpen} createTodo={createTodo} />}
        </AnimatePresence>
        {todoSpreader()}
      </ul>
    </div>
  );
};

export default TodoList;
