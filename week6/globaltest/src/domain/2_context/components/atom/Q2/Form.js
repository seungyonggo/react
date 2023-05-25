import React, { useContext, useState } from "react";
import ContextQ2Form2 from "./Form2";
import { AppContext } from "../../../../../store/3_context";

const ContextQ2Form = () => {
  const [name, setName] = useState("");
  const [nickname, setNickName] = useState("");
  const { state, dispatch } = useContext(AppContext);

  const addUser = (e) => {
    e.preventDefault();
    const idInput = Math.floor(Math.random() * 1000000);
    const newUser = { id: idInput, name: name, nickname: nickname };

    dispatch({
      type: "ADD_USER",
      payload: newUser,
    });
    setName("");
    setNickName("");
  };

  return (
    <div>
      <h1>Q2Form</h1>
      <form onSubmit={addUser}>
        <input
          name="name"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          name="nickname"
          placeholder="nickname"
          value={nickname}
          onChange={(e) => setNickName(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      {state.userList.map((user) => (
        <div key={user.id}>
          <p>Name: {user.name}</p>
          <p>Nickname: {user.nickname}</p>
          <hr />
        </div>
      ))}
      <ContextQ2Form2 />
    </div>
  );
};
export default ContextQ2Form;
