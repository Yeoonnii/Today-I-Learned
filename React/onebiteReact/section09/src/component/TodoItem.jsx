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

export default TodoItem;
