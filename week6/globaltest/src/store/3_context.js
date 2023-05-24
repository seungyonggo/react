import { createContext, useReducer } from "react";

export const AppContext = createContext();

export const initialState = {
  userList: [{ id: 1, name: "홍길동", nickname: "히히" }],
  editedUserList: [],
};

export const actionTypes = {
  ADD_USER: "ADD_USER",
  ADD_EDITED_USER: "ADD_EDITED_USER",
  RESET_USER_LIST: "REST_USER_LIST",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.ADD_USER:
      return {
        ...state,
        userList: [...state.userList, action.payload],
      };
    case actionTypes.ADD_EDITED_USER:
      return {
        ...state,
        userList: [...state.userList, action.payload],
      };
    case actionTypes.RESET_USER_LIST:
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
