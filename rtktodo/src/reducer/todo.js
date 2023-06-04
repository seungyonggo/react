import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// 초기값 설정
const initialState = {
  todos: [], // todos 빈배열 설정
  addTodoState: {
    // todo를 추가할 때의 상태 설정
    loading: false, // 데이터 추가될 때 로딩페이지, 초기 상태는 false(로딩 페이지 보여주면 X)
    done: false, // 성공 or 통신 끝, 초기 상태 요청하지 않았으므로 false
    err: null, // 에러 메세지, 초기값 null 요청하지 않음
  },
};
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  extraReducers: (builder) => {
    // addTodo loading일때 어떻게 할지
    builder.addCase(addTodo.pending, (state) => {
      // loading 일 때?
      state.addTodoState.loading = true;
      state.addTodoState.done = false;
      state.addTodoState.err = null;
    });
    // addTodo fulfilled
    builder.addCase(addTodo.fulfilled, (state, action) => {
      // thunk가 return한 값은 action.payload
      state.addTodoState.loading = false;
      state.addTodoState.done = true;
      state.todos.unshift(action.payload);
      state.addTodoState.err = null;
    });
    // addTodo rejected 실패했을때
    builder.addCase(addTodo.rejected, (state, action) => {
      //
      state.addTodoState.loading = false;
      state.addTodoState.done = true;
      state.addTodoState.err = action.payload;
    });
    builder.addCase(updateTodo.pending, (state) => {
      // Handle updateTodo pending state
    });
    builder.addCase(updateTodo.fulfilled, (state, action) => {
      // Handle updateTodo fulfilled state
    });
    builder.addCase(updateTodo.rejected, (state, action) => {
      // Handle updateTodo rejected state
    });
    builder.addCase(updateTodoEdit.pending, (state) => {
      // Handle updateTodoEdit pending state
    });
    builder.addCase(updateTodoEdit.fulfilled, (state, action) => {
      // Handle updateTodoEdit fulfilled state
    });
    builder.addCase(updateTodoEdit.rejected, (state, action) => {
      // Handle updateTodoEdit rejected state
    });
    builder.addCase(deleteTodo.pending, (state) => {
      // Handle deleteTodo pending state
    });
    builder.addCase(deleteTodo.fulfilled, (state, action) => {
      // Handle deleteTodo fulfilled state
    });
    builder.addCase(deleteTodo.rejected, (state, action) => {
      // Handle deleteTodo rejected state
    });
  },
});

export const addTodo = createAsyncThunk(
  "todo/addTodo",
  async ({ title, content }) => {
    // msw로 만든 가상 백엔드와 데이터 통신
    // 데이터 통신 -> client -> request
    // method (get, post, delete, patch, put, header, options...)명은 -> server가 정해준다. -> rest api에 맡게 정해줘야 한다.
    const res = await axios.post("/api/todo", { title, content });
    // console.log(res);
    // res.data --> 백엔드에서 response한 값은 data 키에 담긴다.
    return res.data;
    // action.payload
  }
);

// export const addTodo = createAsyncThunk(
//   "todo/addTodo",
//   async ({ title, content }) => {
//     const res = await axios.post("/api/todo", { title, content });
//     return res.data;
//   }
// );

export const updateTodo = createAsyncThunk(
  "todo/updateTodo",
  async ({ id, content }) => {
    const res = await axios.put(`/api/todo/${id}`, { content });
    return res.data;
  }
);

export const updateTodoEdit = createAsyncThunk(
  "todo/updateTodoEdit",
  async ({ id, content, state }) => {
    const res = await axios.put(`/api/todo/${id}`, { content, state });
    return res.data;
  }
);

export const deleteTodo = createAsyncThunk("todo/deleteTodo", async (id) => {
  const res = await axios.delete(`/api/todo/${id}`);
  return id;
});

/*
todoSlice를 따로 export하지않으면 export가 되지않는다 따로
밑에다가 export default todoSlice를 써도 사용 할 수가 없다.
*/
// reducer 만들기 : rtk에서 createSlice import한다.
/*export const todoSlice = createSlice({
  name: "todo", // createSlice의 이름 설정
  initialState, // 초기값이 키와 값이 같으면 값 생략 가능
  reducers: {
    // reducer 로직 작성
    addTodo: (state, action) => {
      // [...state, action.payload] 기존 불변성 지키는 로직
      // immer, 불변성으로 자동으로 지켜주는 라이브러리, 불변성을 지킬 필요 없음
      state.todos.unshift(action.payload);
    },
    // 업데이트 로직
    updateTodo: (state, action) => {
      const { id, content } = action.payload;
      const todo = state.todos.find((todo) => todo.id === id);
      if (todo) {
        todo.content = content;
      }
    },
    // 체크 로직
    updateTodoEdit: (state, action) => {
      const { id, state: todoState } = action.payload;
      const todo = state.todos.find((todo) => todo.id === id);
      if (todo) {
        todo.state = todoState;
      }
    },
    // 삭제 로직
    deleteTodo: (state, action) => {
      const id = action.payload;
      state.todos = state.todos.filter((todo) => todo.id !== id);
    },
  },
});

export const { addTodo, updateTodo, updateTodoEdit, deleteTodo } =
  todoSlice.actions;*/
// 액션 자동생성 createAction 함수를 만들지 않아도 dispatch의 action명을 함수로 사용하여 매개변수에
// 액션 객체를 전달받을 수 있다
// ex) dispatch(addTodo(newTodo))
// export default todoSlice.reducer;
// 위에 처럼 export를 받아와도 todoSlice export한게 아니라서 err가 뜬다.

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
