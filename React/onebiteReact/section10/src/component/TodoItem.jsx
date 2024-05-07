import { memo } from "react";
import "./TodoItem.css";
const TodoItem = ({ id, isDone, content, date, onUpdateIsDone, onDeleteTodo }) => {
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
export default memo(TodoItem, (prevProps, nextProps) => {
  // 콜백함수의 인자로 prevProps, nextProps 전달하여 콜백함수의 반환값에 따라 props 변경 여부를 판단한다.
  // true 반환시 -> Props 바뀌지 않음 -> 리렌더링 되지 않음
  // false 반환시 -> Props 바뀜 -> 리렌더링 됨
  if(prevProps.id !== nextProps.id) return false;
  if(prevProps.isDone !== nextProps.isDone) return false;
  if(prevProps.content !== nextProps.content) return false;
  if(prevProps.date !== nextProps.date) return false;

  return true;

});
