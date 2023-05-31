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

// 최대한 모달 img랑 비슷하게 css 수정
// css수정이 너무 오래 걸림.
// 모달이 메인 나오게 만들어한다.
// 모달이 메인에 나오게 만들었다.
// 모달이 메인에는 나오지만 이미지가 보이지않고 파일명으로보인다 이 부분을 수정해야한다.
// 어떻게 해야하는지 모르겠다...
