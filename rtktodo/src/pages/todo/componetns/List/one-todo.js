import styled from "styled-components";
import { flexAlignCenter, flexCenter } from "../../../../styles/common";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faBan, faPen } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import useInput from "../../../../hooks/use-input";
import { useDispatch, useSelector } from "react-redux";
// import { addTodo, updateTodo, updateTodoEdit, deleteTodo } from "reducer/todo";

import {
  addTodo,
  updateTodoState,
  updateTodoEdit,
  deleteTodo,
} from "reducer/todo";

const OneTodo = ({ todo }) => {
  const { id, state, title, content } = todo;
  const [isEditMode, setIsEditMode] = useState(false);
  const [editContent, onChangeEditContent] = useInput(content);

  const todoList = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  // const handleTodoUpdate = (id, editContent) => {
  //   if (!isEditMode) return setIsEditMode(true);
  //   dispatch(
  //     updateTodo({
  //       id,
  //       content: editContent,
  //     })
  //   );
  //   setIsEditMode(false);
  // };

  const handleTodoUpdate = (id, editContent) => {
    if (!isEditMode) {
      setIsEditMode(true);
    } else {
      dispatch(
        updateTodoState({
          id,
          content: editContent,
        })
      );
      setIsEditMode(false);
    }
  };
  // 왜 수정은 안되고 수정에 작성한게 todo로 새로 만들어질까 정말 모르겠다... 하... 힘들다..
  const handleTodoEdit = (id) => {
    dispatch(
      updateTodoEdit({
        id,
        content,
        state: !state,
      })
    );
  };

  const handleTodoDelete = () => {
    dispatch(deleteTodo(id));
  };

  return (
    <S.Wrapper state={state}>
      <S.Header>
        <S.StateBox state={state}>
          <FontAwesomeIcon icon={faCheck} onClick={() => handleTodoEdit(id)} />
        </S.StateBox>
        <S.Title state={state}>
          {title}
          <div>
            <FontAwesomeIcon
              icon={faPen}
              onClick={() => handleTodoUpdate(id, editContent)}
            />
            <FontAwesomeIcon icon={faBan} onClick={handleTodoDelete} />
          </div>
        </S.Title>
      </S.Header>
      <S.Content state={state}>
        {isEditMode ? (
          <textarea
            value={editContent}
            onChange={onChangeEditContent}
          ></textarea>
        ) : (
          content
        )}
      </S.Content>
    </S.Wrapper>
  );
};
export default OneTodo;

const Wrapper = styled.li`
  width: 100%;
  background-color: ${({ theme }) => theme.PALETTE.white};
  border: 1px solid #999;
  margin: 16px 0;
  list-style: none;
  border-radius: 8px;
  background-color: ${({ state, theme }) =>
    state ? theme.PALETTE.gray[100] : theme.PALETTE.white};
`;

const Header = styled.div`
  border-bottom: 1px dotted #999;
  ${flexAlignCenter};
  padding: 8px 16px;
  height: 48px;
`;

const Title = styled.h1`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  text-decoration: ${({ state }) => (state ? "line-through" : "none")};
  & svg {
    cursor: pointer;
    margin-left: 16px;
    :hover {
      transform: scale(1.2);
    }
  }
`;

const StateBox = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 8px;
  ${flexCenter};
  color: ${({ state }) => (state ? "#3CB371" : "#999")};
  cursor: pointer;
  :hover {
    transform: scale(1.2);
  }
`;

const Content = styled.div`
  padding: 16px;
  text-decoration: ${({ state }) => (state ? "line-through" : "none")};
  & textarea {
    width: 100%;
    height: 100%;
    border: 1px dotted #999;
    outline: none;
    resize: none;
  }
`;

const S = {
  Wrapper,
  Header,
  StateBox,
  Title,
  Content,
};
/**
 * @params : todo {
 *  content: string
 * }
 *
 * @TODO : refactor
 */

// const updatTodo = (id, content) => {
// 	// const _todoList = [...todoList]
// 	// const todo = _todoList.find(todo => todo.id === id)
// 	// /*
// 	//   불변성을 지키기 위해, find는 새로운 배열을 반환하지 않기 때문에
// 	//   기존에 있는 todolist를 깊은 복사하여 다른 메모리 주소값을 갖게하고 수정한다.
// 	//  */
// 	// todo.content = content
// 	// setTodoList(_todoList)
// 	dispatch({
// 		type: 'UPDATE_TODO',
// 		payload: {
// 			id,
// 			content,
// 		},
// 	})
// }
// const deleteTodo = id => {
// 	// if (window.confirm('정말 삭제하시겠습니까')) {
// 	// 	const _todoList = todoList.filter(todo => todo.id !== id)
// 	// 	setTodoList(_todoList)
// 	// }
// 	dispatch({
// 		type: 'DELETE_TODO',
// 		payload: id,
// 	})
// }
/*
과제
수정을 form 이벤트로 바꾸기
+
체크 수정 구현하기
## add 숙제
*/
// const { id, state, title, content } = todo;
// const [isEditMode, setIsEditMode] = useState(false);
// const [editContent, onChangeEditContent] = useInput(content);

// const todoList = useSelector((state) => state.todo);
// const dispatch = useDispatch();

// const handleTodoUpdate = (id, editContent) => {
//   if (!isEditMode) return setIsEditMode(true);
//   dispatch({
//     type: "UPDATE_TODO",
//     payload: {
//       id,
//       content: editContent,
//       state,
//     },
//   });
//   setIsEditMode(false);
// };

// const handleTodoEdit = (id) => {
//   dispatch({
//     type: "UPDATE_TODO_EDIT",
//     payload: {
//       id,
//       content,
//       state: !state,
//     },
//   });
// };

// const handleTodoDelete = () => {
//   dispatch({
//     type: "DELETE_TODO",
//     payload: id,
//   });
// };
