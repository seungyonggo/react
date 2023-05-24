import { useContext } from "react";
import { ModalContext } from "../../../../../store/2_context";

const ContextQ1Modal = () => {
  const { isModalOpen } = useContext(ModalContext);

  return isModalOpen ? <h1>모달~~~</h1> : null;
};
export default ContextQ1Modal;
