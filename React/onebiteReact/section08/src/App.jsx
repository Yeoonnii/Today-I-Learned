import Editor from "./component/Editor";
import Header from "./component/Header";
import List from "./component/List";
import "./App.css";
import { useRef, useState } from "react";

// 임시데이터
// App 컴포넌트가 리렌더링 될 때마다 다시 생성될 필요가 없고, 상수이기 때문에 값을 변경할수도 없으니 컴포넌트 외부에 선언해주어도 된다.
const mockData = [
  { id: 0, isDone: false, content: "공부하기", date: new Date().getTime() },
  { id: 1, isDone: false, content: "빨래하기", date: new Date().getTime() },
  { id: 2, isDone: false, content: "짐정리하기", date: new Date().getTime() },
];

function App() {
  const [todos, setTodos] = useState(mockData);
  const idRef = useRef(3);

  // todos 에 새로운 todo 추가하기
  const onCreate = (content) => {
    // todos 배열에 추가할 새 todo 객체 생성
    const newTodo = {
      // idRef 를 사용해 다음 id 값을 가져온다.
      id: idRef.current ++,
      isDone:false,
      content: content,
      date: new Date().getTime()
    }

    // setTodos를 사용해 추가할 데이터를 맨 앞으로 오도록 todos를 업데이트 한다.
    setTodos([
      newTodo,
      ...todos,
    ])
  }

  return (
    <div className="App">
      <Header />
      <Editor onCreate={onCreate}/>
      <List />
    </div>
  );
}

export default App;
