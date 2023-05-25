import React, { useContext } from "react";
import { AppContext } from "../../../../../store/3_context";

const ContextQ2Form2 = () => {
  const { dispatch } = useContext(AppContext);

  const addEditedUser = () => {
    // const updatedUserList = state.userList.map((user) => {
    //   if (user.id === state.userList.length) {
    //     return { ...user, isEdit: true };
    //   }
    //   return user;});

    dispatch({
      type: "ADD_EDITED_USER",
      // payload: updatedUserList,
    });
  };

  return (
    <div>
      <h1>Q2Form2</h1>
      <button type="button" onClick={addEditedUser}>
        Add Status
      </button>
    </div>
  );
};

export default ContextQ2Form2;
