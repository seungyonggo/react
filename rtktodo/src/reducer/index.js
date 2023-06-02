import { combineReducers } from "redux";
import { todoSlice } from "./todo"; // todoSlice를 import

export const rootReducer = combineReducers({
  todo: todoSlice.reducer,
});
// todo에 todoSlice.reducer를 넣어준다.

/*
모르겠다.... 왜 export가 오류가 나는지 정말 모르겠다... 이게 내가 틀린건가...
왜 때문에 import도 재대로 받아왔고 export도 했는데 왜!!!!!!!!!!
error가 뜨는지 정말 모르겠다... 지금 30분동안 export를 새로 만드는데 왜 계속 export오류라고 뜰까?
컴퓨터를 2번끄고 새로고침을 50번정도한 것 같다 vscode는 5번정도 다시 실행해도 안된다 vscode가 이상하다.
*/
