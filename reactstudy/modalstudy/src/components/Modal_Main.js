import React, { useRef, useState } from "react";
import html2canvas from "html2canvas";
import Modal from "../components/modal/Modal";

const Modal_Main = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const modalRef = useRef(null);

  const handleAddButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleSaveModal = () => {
    html2canvas(modalRef.current).then((canvas) => {
      const modalImage = canvas.toDataURL();
      const modalData = {
        modalImage,
      };
      setModalContent(modalData);
      setIsModalOpen(false);
    });
  };

  const handleUpload = (data) => {
    const modalData = {
      selectedYear: data.selectedYear,
      selectedMonths: data.selectedMonths,
      uploadedImage: data.uploadedImage,
    };
    handleSaveModal(modalData);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button onClick={handleAddButtonClick}>ADD</button>
      {isModalOpen && (
        <Modal
          onSave={handleSaveModal}
          onUpload={handleUpload}
          onClose={handleCloseModal}
          forwardedRef={modalRef}
        />
      )}
      {modalContent && (
        <div>
          <h3>Modal Content:</h3>
          <img src={modalContent.modalImage} alt="Modal Screenshot" />
        </div>
      )}
    </div>
  );
};

export default Modal_Main;
