import { useEffect, useState } from "react";
import OneTodo from "./one-todo";
import { axiosInstance } from "utils/axios";
import axios from "axios";

const TodoList = ({ todoList, setTodoList }) => {
  const updateTodo = (id, content) => {
    const _todoList = [...todoList];
    const todo = _todoList.find((todo) => todo.id === id);
    /*
          불변성을 지키기 위해, find는 새로운 배열을 반환하지 않기 때문에
          기존에 있는 todolist를 깊은 복사하여 다른 메모리 주소값을 갖게하고 수정한다.
         */
    todo.content = content;
    setTodoList(_todoList);
  };

  const deleteTodo = async (id) => {
    if (window.confirm("정말 삭제하시겠습니까")) {
      try {
        await axiosInstance.delete(`/todo/${id}`);
        const _todoList = todoList.filter((todo) => todo.id !== id);
        setTodoList(_todoList);
      } catch (error) {
        console.error(error);
      }
      // 밑에 방법은 setTodoList를 사용할 수가 없다. 그래서 비동기라서 새로고침을 누르지 않으면 삭제는 가능하지만
      // 랜더링이 되지 않아서 바로 보이지 않는다.
      // try {
      //   await axiosInstance.delete(`/todo/${id}`);
      //   // const res = await axiosInstance.delete(`/todo/${id}`);
      //   // console.log(res);
      //   // setTodoList(...TodoList);
      //   // await deleteTodo(id);
      //   // const updateTodoList = todoList.filter((todo) => todo.id !== id);
      //   // setTodoList(updateTodoList);
      //   // setTodoList = todoList.filter((todo) => todo.id !== id);
      // } catch (error) {
      //   console.error(error);
      // }
    }
    // window.location.reload();
  };

  return (
    <>
      {todoList.map((todo) => (
        <OneTodo
          key={todo.id}
          todo={todo}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </>
  );
};
export default TodoList;

// const deleteTodo = async () => {
//   try {
//     await handleTodoDelete();
//     // Code to run after successful deletion
//   } catch (error) {
//     // Error handling
//     console.error(error);
//   }
// };

// // Usage
// deleteTodo();
// 새로고침..왜...안돼....하....
// 모르겠다... 뭐가 문제야...
// const deleteTodo = (id) => {
//   if (window.confirm("Are you sure you want to delete it?")) {
//     try {
//       deleteTodoSync(id);
//       const updatedTodoList = todoList.filter((todo) => todo.id !== id);
//       setTodoList(updatedTodoList);
//     } catch (error) {
//       console.error(error);
//     }
//   }
// };

// const deleteTodoSync = (id) => {
//     // Perform the synchronous deletion logic here
//     // You can use axiosInstance.delete() or any other synchronous deletion method
//   };

//   // Usage
//   deleteTodo();
