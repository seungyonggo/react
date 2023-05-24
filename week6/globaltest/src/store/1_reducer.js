import { createContext, useContext, useReducer } from "react";
import { createAction } from "../utils/createAction";

const initialState = [
  { id: 1, name: "피자 도우", price: 1000 },
  { id: 2, name: "토마토 소스", price: 500 },
  { id: 3, name: "치즈", price: 1000 },
  { id: 4, name: "피망", price: 500 },
  { id: 5, name: "양파", price: 500 },
];

export const useMenuStore = () => useContext(MenuStore);

const MenuStore = createContext();

export const ADD_MENU = createAction("ADD_MENU");
export const DELETE_MENU = createAction("DELETE_MENU");

const MenuReducer = (state, action) => {
  switch (action.type) {
    case "ADD_MENU":
      return [...state, action.payload];
    case "DELETE_MENU":
      return state.filter((ingredients) => ingredients.id !== action.payload);
    default:
      return state;
  }
};

const MenuStoreProvider = ({ children }) => {
  const [ingredients, dispatch] = useReducer(MenuReducer, initialState);

  return (
    <MenuStore.Provider value={[ingredients, dispatch]}>
      {children}
    </MenuStore.Provider>
  );
};

export default MenuStoreProvider;

// export const createAction = (state, action) => {
//   switch (action.type) {
//     case "ADD_MENU":
//       return [...state, action.payload];
//     case "DELETE_MENU":
//       return state.filter((ingredients) => ingredients.id !== action.payload);
//     default:
//   }
// };
