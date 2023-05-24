import { useContext } from "react";
import { ModalContext } from "../../../../../store/2_context";

const ContextQ1Detail2 = () => {
  const { ToggleModal, isModalOpen } = useContext(ModalContext);

  const onShowButtonClick = () => {
    ToggleModal();
  };

  return (
    <div>
      <h2>ContextQ1Detail2</h2>
      <button onClick={onShowButtonClick}>
        {isModalOpen ? "숨기기" : "보이기"}
      </button>
    </div>
  );
};
export default ContextQ1Detail2;
