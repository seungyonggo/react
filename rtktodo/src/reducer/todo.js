import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  todos: [],
  addTodoState: {
    loading: false,
    done: false,
    err: null,
  },
};
/*
todoSlice를 따로 export하지않으면 export가 되지않는다 따로
밑에다가 export default todoSlice를 써도 사용 할 수가 없다.
*/
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.unshift(action.payload);
    },
    updateTodo: (state, action) => {
      const { id, content } = action.payload;
      const todo = state.todos.find((todo) => todo.id === id);
      if (todo) {
        todo.content = content;
      }
    },
    updateTodoEdit: (state, action) => {
      const { id, state: todoState } = action.payload;
      const todo = state.todos.find((todo) => todo.id === id);
      if (todo) {
        todo.state = todoState;
      }
    },
    deleteTodo: (state, action) => {
      const id = action.payload;
      state.todos = state.todos.filter((todo) => todo.id !== id);
    },
  },
});

export const { addTodo, updateTodo, updateTodoEdit, deleteTodo } =
  todoSlice.actions;
// export default todoSlice.reducer;

// export const { addTodo, updateTodo, updateTodoEdit, deleteTodo } =
//   todoSlice.actions;
/*
ERROR in ./src/reducer/index.js 6:8-25
export 'todoSlice' (imported as 'todoSlice') was not found in './todo'
(possible exports: addTodo, deleteTodo, updateTodo, updateTodoEdit)
뭐가 문제인지 모르겠다.... 왜 export가 err가 나올까 진짜 후...
한번 vscode를 종료후 다시 시작해봐야겠다.
여전히 에러가 나온다...
분명 마지막 부분이 자동적으로 가능하다고 들은것같은데 무슨 오류지....
 */

/*import { createSlice } from "@reduxjs/toolkit";


*********************export*********************** const todoSlice = createSlice({
  name: "todo",
  initialState,
  // initialState:initialState,
  reducers: {
    addTodo(state, action) {
      // [...state, action.payload]
      // immer, 불변성으로 자동으로 지켜주는 라이브러리, 자체 설치
      state.todos.unshift(action.payload);
    },
  },
});

export const { addTodo } = todoSlice.actions; */
// 액션 자동생성 createAction 함수를 만들지 않아도 dispatch의 action명을 함수로 사용하여 매개변수에
// 액션 객체를 전달받을 수 있다
// ex) dispatch(addTodo(newTodo))
