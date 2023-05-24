import { createContext, useState } from "react";

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const ToggleModal = () => {
    setIsModalOpen((prevState) => !prevState);
  };

  return (
    <ModalContext.Provider value={{ isModalOpen, ToggleModal }}>
      {children}
    </ModalContext.Provider>
  );
};
