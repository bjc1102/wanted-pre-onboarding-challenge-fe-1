import React from "react";
import useForm from "../hooks/useForm";
import { motion } from "framer-motion";
import { TabVars } from "../utils/animation";
import { initialTodo } from "./TodoList";

type Props = {};

const WriteTab = (props: Props) => {
  // const onSubmit = () => {};
  // const {} = useForm({ initialValue: initialTodo, onSubmit });

  return (
    <motion.li
      className="px-3"
      variants={TabVars}
      initial="start"
      animate="animation"
      exit="end"
    >
      <input
        required
        type="text"
        name="title"
        placeholder="TODO 제목을 입력해주세요"
        className="my-2 bg-gray-50 placeholder:text-gray-400 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      />
      <span
        className="w-full before:content-[attr(placeholder)] rounded-sm bg-gray-50 min-h-[40px] block text-base border border-solid border-gray-400"
        placeholder="TODO 내용을 입력해주세요"
        role="textbox"
        contentEditable
      ></span>
    </motion.li>
  );
};

export default WriteTab;
