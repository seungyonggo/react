import React, { useState } from "react";
import Modal from "../components/modal/Modal";

const Modal_Main = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleAddToDo = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <button onClick={handleAddButtonClick}>ADD</button>
      {isModalOpen && (
        <Modal onAddToDo={handleAddToDo} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default Modal_Main;
