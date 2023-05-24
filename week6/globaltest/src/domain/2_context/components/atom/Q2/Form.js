import { useContext } from "react";
import ContextQ2Form2 from "./Form2";
import { AppContext, actionTypes } from "../../../../../store/3_context";

const ContextQ2Form = ({ onSubmit }) => {
  const { dispatch } = useContext(AppContext);

  const addUser = (e) => {
    e.preventDefault();
    const id = Math.floor(Math.random() * 1000000);
    const nameInput = e.target.name.value;
    const nicknameInput = e.target.nickname.value;

    dispatch({
      type: actionTypes.ADD_USER,
      payload: { id: Date.now(), name: nameInput, nickname: nicknameInput },
    });
  };

  return (
    <div>
      <h1>Q2Form</h1>
      <form onSubmit={onSubmit}>
        <input placeholder="name" />
        <input placeholder="nick-name" />
        <button>추가</button>
        <ContextQ2Form2 />
      </form>
    </div>
  );
};
export default ContextQ2Form;
