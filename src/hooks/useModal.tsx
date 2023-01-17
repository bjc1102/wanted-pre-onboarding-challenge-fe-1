import React from "react";

const useModal = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleModalOpen = function () {
    setIsModalOpen(true);
  };
  const handleModalClose = function () {
    setIsModalOpen(false);
  };

  return { isModalOpen, handleModalOpen, handleModalClose };
};

export default useModal;
