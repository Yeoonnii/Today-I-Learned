import "./TodoItem.css"
const TodoItem = ({ isDone, content, date }) => {
  return (
    <div className="TodoItem">
        <input checked={isDone} readOnly type="checkbox"/>
        <div className="content">{content}</div>
        <div className="date">{new Date(date).toLocaleDateString()}</div>
        <button>삭제</button>
    </div>
  )
}

export default TodoItem