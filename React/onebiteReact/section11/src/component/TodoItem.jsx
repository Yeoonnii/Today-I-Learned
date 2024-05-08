import { memo, useContext } from "react";
import "./TodoItem.css";
import { TodoContext } from "../App";
const TodoItem = ({ id, isDone, content, date}) => {
  const {onUpdateIsDone, onDeleteTodo} = useContext(TodoContext);
  
  // input 태그의 checkbox 클릭시 실행될 함수
  const onChangeCheck = () => {
    // 전달받은 함수 실행
    onUpdateIsDone(id);
  };

  // 삭제버튼 클릭시 실행될 함수
  const handleDeleteButton = () => {
    // 전달받은 함수 실행
    onDeleteTodo(id);
  }

  return (
    <div className="TodoItem">
      <input checked={isDone} onChange={onChangeCheck} type="checkbox" />
      <div className="content">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button onClick={handleDeleteButton}>삭제</button>
    </div>
  );
};

// memo 메서드의 두번째 인자로 콜백함수를 전달하게 되면 수동적으로 props 변경되었는지를 판단할 수 있다.
export default memo(TodoItem);
