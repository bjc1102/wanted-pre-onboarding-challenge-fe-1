import { AnimatePresence } from "framer-motion";
import React from "react";
import { useNavigate } from "react-router-dom";
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
  const [todos, setTodos] = React.useState<TodoDataType[]>([]);

  const setOpen = () => setIsOpen(!isOpen);

  const createTodo = (value: TodoDataType) =>
    setTodos((prev) => [...prev, value]);

  const updateTodo = (todo: TodoType, index: number) =>
    setTodos((todos) => {
      const { prev, next } = todoSlice(todos, index);
      const updatedTodo = Object.assign(todos[index], todo);
      return [...prev, updatedTodo, ...next];
    });

  const deleteTodo = (index: number) =>
    setTodos((todos) => {
      const { prev, next } = todoSlice(todos, index);
      return [...prev, ...next];
    });

  const todoSpreader = () => {
    if (todos.length === 0)
      return <p className="text-center">TODO를 등록해주세요!</p>;
    return todos.map((v, index) => (
      <Todo
        updateTodo={updateTodo}
        deleteTodo={deleteTodo}
        key={v.id}
        index={index}
        {...v}
      />
    ));
  };

  React.useEffect(() => {
    API.getTodos().then((response) => {
      setTodos(response.data.data);
    });
  }, []);

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
