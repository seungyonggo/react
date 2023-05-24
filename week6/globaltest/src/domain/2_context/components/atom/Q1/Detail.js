import { useContext } from "react";
import ContextQ1Detail2 from "./Detail2";
import { ModalContext } from "../../../../../store/2_context";

const ContextQ1Detail = () => {
  const { isModalOpen, ToggleModal } = useContext(ModalContext);

  const onShowButtonClick = () => {
    ToggleModal();
  };

  return (
    <>
      <h2>ContextQ1Detail</h2>
      <button onClick={onShowButtonClick}>
        {isModalOpen ? "숨기기" : "보이기"}
      </button>
      <ContextQ1Detail2 />
    </>
  );
};
export default ContextQ1Detail;
