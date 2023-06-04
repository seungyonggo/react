import { useState } from "react";
import OneTodo from "./one-todo";

const TodoList = ({todoList, setTodoList}) => {


    const updatTodo = (id, content) => {
        const _todoList = [...todoList]
        const todo = _todoList.find((todo) => todo.id === id)
        /*
          불변성을 지키기 위해, find는 새로운 배열을 반환하지 않기 때문에
          기존에 있는 todolist를 깊은 복사하여 다른 메모리 주소값을 갖게하고 수정한다.
         */
        todo.content = content
        setTodoList(_todoList)
    }


    const deleteTodo = (id) => {
        if(window.confirm("정말 삭제하시겠습니까")){
            const _todoList = todoList.filter((todo) => todo.id !== id)
            setTodoList(_todoList)
        }
    }


    return (
        <>
            {todoList.map((todo) => (
                <OneTodo todo={todo} updatTodo={updatTodo} deleteTodo={deleteTodo}/>
            ))}
        </>
    );
};
export default TodoList;
