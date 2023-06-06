import { useDispatch, useSelector } from "react-redux";
import OneTodo from "./one-todo";

// todo의 state를 객채로 보냈으므로 todo.todos를 해야 todo state를 선택할 수 있습니다
// const TodoList = () => {
//   const todoList = useSelector((state) => state.todo.todos);

//   return (
//     <>
//       {todoList.map((todo, index) => (
//         <OneTodo key={todo.id} todo={todo} />
//       ))}
//     </>
//   );
// };
const TodoList = () => {
  const todoList = useSelector((state) => state.todo.todos);

  return (
    <div>
      {todoList.map((todo) => (
        <OneTodo key={todo.id} todo={todo} />
      ))}
    </div>
  );
};
export default TodoList;
