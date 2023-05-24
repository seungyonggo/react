import { useState } from "react";
import styled from "styled-components";

function Comment({ author, content, onEdit, onDelete }) {
  const [editMode, setEditMode] = useState(false);
  const [editedContent, setEditedContent] = useState(content);

  const handleEdit = () => {
    if (editMode) {
      onEdit(editedContent);
    }
    setEditMode(!editMode);
  };

  return (
    <CommentItem>
      <p>
        작성자: <span>{author}</span>
      </p>
      {editMode ? (
        <input
          type="text"
          value={editedContent}
          onChange={(e) => setEditedContent(e.target.value)}
        />
      ) : (
        <p>
          댓글 내용: <span>{content}</span>
        </p>
      )}
      <button onClick={handleEdit}>{editMode ? "저장" : "수정"}</button>
      <button onClick={onDelete}>삭제</button>
    </CommentItem>
  );
}
export default Comment;

const CommentItem = styled.li`
  border: 1px solid #000;
  margin: 10px;
`;
