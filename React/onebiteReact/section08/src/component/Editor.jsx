import "./Editor.css"

const Editor = () => {
  return (
    <div className="Editor">
      <input 
        placeholder="새로운 To-do..."
      />
      <button>추가</button>
    </div>
  );
};

export default Editor;
