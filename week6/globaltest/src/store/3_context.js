import { createContext, useReducer } from "react";

export const AppContext = createContext();

export const initialState = {
  userList: [{ id: 1, name: "홍길동", nickname: "히히" }],
};

// export const ADD_USER = createAction("ADD_USER");
// export const ADD_EDITED_USER = createAction("ADD_EDITED_USER");
// export const RESET_USER_LIST = createAction("RESET_USER_LIST");

// export const actionTypes = {
//   ADD_USER: "ADD_USER",
//   ADD_EDITED_USER: "ADD_EDITED_USER",
//   RESET_USER_LIST: "RESET_USER_LIST",
// };

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_USER":
      return {
        ...state,
        userList: [...state.userList, action.payload],
      };
    case "ADD_EDITED_USER":
      // ...state,
      // editedUserList: action.payload,
      const updatedUserList = state.userList.map((user) => {
        return { ...user, isEdit: true };
      });
      return {
        ...state,
        userList: updatedUserList,
      };
    case "RESET_USER_LIST":
      return {
        ...state,
        userList: [],
        editedUserList: [],
      };
    default:
      return state;
  }
};

export const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
