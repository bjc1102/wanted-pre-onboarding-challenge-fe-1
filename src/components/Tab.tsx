import React from "react";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
  num: number;
};

const Tab = (props: Props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  console.log(props.num);

  return (
    <li className="py-4 px-5">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative px-0 py-2 flex items-center w-full text-base text-gray-800 text-left bg-white border-0 rounded-none focus:outline-none"
      >
        title{props.num}
      </button>
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: "auto",
              opacity: 1,
              transition: {
                height: {
                  duration: 0.4,
                },
                opacity: {
                  duration: 0.25,
                  delay: 0.15,
                },
              },
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: {
                height: {
                  duration: 0.4,
                },
                opacity: {
                  duration: 0.25,
                },
              },
            }}
            key="test"
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
