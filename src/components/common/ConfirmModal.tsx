import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import AlertIcon from "../../assets/AlertIcon";
import Xmark from "../../assets/Xmark";
import Button from "./Button";

interface ConfirmModalProps {
  isModalOpen: boolean;
  content: string;
  handleSubmit: VoidFunction;
  handleClose: VoidFunction;
}

const ConfirmModal = ({
  isModalOpen,
  content,
  handleSubmit,
  handleClose,
}: ConfirmModalProps) => {
  const ref = React.useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (ref.current && !ref.current.contains(target)) {
        handleClose();
      }
    };

    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  if (!isModalOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed bg-black bg-opacity-60 z-50 p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
      <div
        ref={ref}
        className="relative mx-auto border border-solid border-gray-200 rounded-lg w-full h-full max-w-md md:h-auto"
      >
        <div className="relative bg-white rounded-lg shadows">
          <button
            type="button"
            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
          >
            <div onClick={handleClose} className="w-6 h-6">
              <Xmark />
            </div>
            <span className="sr-only">Close modal</span>
          </button>
          <div className="p-6 text-center">
            <AlertIcon />
            <h3 className="mb-5 text-lg font-normal text-gray-500">
              {content}
            </h3>
            <div className="flex gap-2 justify-center">
              <Button onClick={handleSubmit} style_type="alert" type="button">
                확인
              </Button>
              <Button
                onClick={handleClose}
                style_type="secondary"
                type="button"
              >
                취소
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default ConfirmModal;
