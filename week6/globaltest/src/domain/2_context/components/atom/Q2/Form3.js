import React, { useContext } from "react";
import { AppContext, actionTypes } from "../../../../../store/3_context";

const ContextQ2Form3 = () => {
  const { dispatch } = useContext(AppContext);

  const resetUserList = () => {
    dispatch({ type: "RESET_USER_LIST" });
  };

  return (
    <div>
      <h1>Q2Form3</h1>
      <button onClick={resetUserList}>Reset</button>
    </div>
  );
};

export default ContextQ2Form3;
