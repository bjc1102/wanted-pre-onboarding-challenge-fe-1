import React from "react";
import useForm from "../hooks/useForm";
import { initialTodo } from "./TodoList";

type Props = {};

const WriteTab = (props: Props) => {
  const onSubmit = () => {};
  // const {} = useForm({ initialValue: initialTodo, onSubmit });

  return (
    <li className="py-4 px-5">
      <button className="relative px-0 py-2 flex items-center w-full text-base text-gray-800 text-left bg-white border-0 rounded-none focus:outline-none"></button>
      <div>
        Lorem Ipsum is simply dummy text of the printing and typesetting larised
        in the 1960s with the release of Letraset sheets containing Lorem Ipsum
        passages, and more recently with desktop publishing Lorem Ipsum
        passages, and more recently with desktop publishing Lorem Ipsum
        passages, and more recently with desktop publishing Lorem Ipsum
        passages, and more recently with desktop publishing Lorem Ipsum
        passages, and more recently with desktop publishing Lorem Ipsum
        passages, and more recently with desktop publishing Lorem Ipsum
        passages, and more recently with desktop publishing Lorem Ipsum
        passages, and more recently with desktop publishing Lorem Ipsum
        passages, and more recently with desktop publishing Lorem Ipsum
        passages, and more recently with desktop publishing Lorem Ipsum
        passages, and more recently with desktop publishing software like Aldus
        PageMaker including versions of Lorem Ipsum.
      </div>
    </li>
  );
};

export default WriteTab;
