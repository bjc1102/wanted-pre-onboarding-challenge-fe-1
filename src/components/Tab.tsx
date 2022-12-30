import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { TabVars } from "../utils/animation";

type Props = {
  num: number;
};

const Tab = ({ num }: Props) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <li className="py-4 px-5">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="relative px-0 py-2 flex items-center w-full text-base text-gray-800 text-left bg-white border-0 rounded-none focus:outline-none"
      >
        title{num}
        <div>{/* 수정/삭제버튼 위치 */}</div>
      </div>
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            variants={TabVars}
            initial="start"
            animate="animation"
            exit="end"
            key="num"
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            larised in the 1960s with the release of Letraset sheets containing
            Lorem Ipsum passages, and more recently with desktop publishing
            Lorem Ipsum passages, and more recently with desktop publishing
            Lorem Ipsum passages, and more recently with desktop publishing
            Lorem Ipsum passages, and more recently with desktop publishing
            Lorem Ipsum passages, and more recently with desktop publishing
            Lorem Ipsum passages, and more recently with desktop publishing
            Lorem Ipsum passages, and more recently with desktop publishing
            Lorem Ipsum passages, and more recently with desktop publishing
            Lorem Ipsum passages, and more recently with desktop publishing
            Lorem Ipsum passages, and more recently with desktop publishing
            Lorem Ipsum passages, and more recently with desktop publishing
            software like Aldus PageMaker including versions of Lorem Ipsum.
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
};

export default Tab;
