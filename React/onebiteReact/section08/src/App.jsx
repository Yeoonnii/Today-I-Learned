import Editor from "./component/Editor";
import Header from "./component/Header";
import List from "./component/List";
import "./App.css";
import { useState } from "react";

const mockData = [
  { id: 0, isDone: false, content: "공부하기", date: new Date().getTime() },
  { id: 1, isDone: false, content: "빨래하기", date: new Date().getTime() },
  { id: 2, isDone: false, content: "짐정리하기", date: new Date().getTime() },
];

function App() {
  const [todos, setTodos] = useState(mockData);
  return (
    <div className="App">
      <Header />
      <Editor />
      <List />
    </div>
  );
}

export default App;
