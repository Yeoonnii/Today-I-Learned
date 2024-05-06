import { useReducer, useRef } from "react";
import "./App.css";
import Editor from "./component/Editor";
import Header from "./component/Header";
import List from "./component/List";

// 임시데이터
// App 컴포넌트가 리렌더링 될 때마다 다시 생성될 필요가 없고, 상수이기 때문에 값을 변경할수도 없으니 컴포넌트 외부에 선언해주어도 된다.
const mockData = [
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    date: new Date().getTime(),
  },
  { id: 1, isDone: false, content: "빨래하기", date: new Date().getTime() },
  { id: 2, isDone: false, content: "짐정리하기", date: new Date().getTime() },
];

// reducer : 변환기
// -> state(상태)를 실제로 변화시키는 변환기의 역할을 하는 함수
function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "UPDATE":
      return state.map((todo) => todo.id === action.targetId ? {...todo, isDone: !todo.isDone} : todo);
    case "DELETE":
      return state.filter((todo) => todo.id !== action.targetId);
    default:
      break;
  }
}

function App() {
  // useReducer로 투두리스트 업데이트하기
  const [todos, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  // todos 에 새로운 todo 추가하기
  const onCreate = (content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        isDone: false,
        content: content,
        date: new Date().getTime(),
      },
    });
  };

  // todos State 값들 중 targetId와 일치하는 id를 갖는 todo 아이템의 isDone 프로퍼티 변경
  const onUpdateIsDone = (targetId) => {
    dispatch({
      type: "UPDATE",
      targetId: targetId,
    });
  };

  // todos State 값들 중 targetId와 일치하는 id를 갖는 todo 아이템을 제외한 배열 객체 반환
  const onDeleteTodo = (targetId) => {
    // // 인수 : todos의 배열중 id 와 일치하는 targetId
    dispatch({
      type: "DELETE",
      targetId: targetId
    })
  };

  return (
    <div className="App">
      <Header />
      <Editor onCreate={onCreate} />
      <List
        todos={todos}
        onUpdateIsDone={onUpdateIsDone}
        onDeleteTodo={onDeleteTodo}
      />
    </div>
  );
}

export default App;
