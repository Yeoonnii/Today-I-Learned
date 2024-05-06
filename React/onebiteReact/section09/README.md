# section09. useReducer

## useReducer란?

- 컴포넌트 내부에 새로운 State를 생성하는 React Hook
- 모든 useState는 useReducer로 대체 가능하다.
- useState를 사용하면 컴포넌트 내부에 상태 관리 코드를 작성해야 하지만 ,
useReducer를 사용하면 컴포넌트 외부에 상태 관리 코드를 분리할 수 있다.

```jsx
const [state, dispatch] = useReducer(reducer, initialState);
```

`state` 

- 컴포넌트에서 사용 할 수 있는 상태

`dispatch` 

- 상태변화가 일어나야 한다는것을 알리는 함수
- dispatch 함수 호출시 reducer 함수에 전달할 객체를 넣어준다.

파라미터 값

- reducer 함수, state의 초기값

### useReducer로 카운터 만들기

```jsx
import { useReducer } from "react";

// reducer : 변환기
// -> state(상태)를 실제로 변화시키는 변환기의 역할을 하는 함수
function reducer(state, action) {
  switch (action.type) {
    case "INCREASE":
      return state + action.data;
    case "DECREASE":
      return state - action.data;

    default:
      break;
  }
}

const Exam = () => {
  // dispatch : 상태변화 일어나야 한다는것을 알리는 함수
  // useReducer 사용시 첫번째 인자는 reducer 함수, 두번째 인자는 state의 초기값을 넣어줄 수 있다.
  const [state, dispatch] = useReducer(reducer, 0);

  const onClickPlus = () => {
    dispatch({
      type: "INCREASE",
      data: 1,
    });
  };

  const onClickMinus = () => {
    dispatch({
      type: "DECREASE",
      data: 1,
    });
  };

  return (
    <div>
      <h1>{state}</h1>
      <button onClick={onClickPlus}>+</button>
      <button onClick={onClickMinus}>-</button>
    </div>
  );
};

export default Exam;

```

## useReducer로 투두리스트 업데이트하기

```jsx
import { useReducer, useRef } from "react";
import "./App.css";
import Editor from "./component/Editor";
import Header from "./component/Header";
import List from "./component/List";

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
  const [todos, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  // todos에 새로운 todo 추가
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

  // todos 의 checkbox 수정
  // todos State 값들 중 targetId와 일치하는 id를 갖는 todo 아이템의 isDone 프로퍼티 변경
  const onUpdateIsDone = (targetId) => {
    dispatch({
      type: "UPDATE",
      targetId: targetId,
    });
  };

  // todo 삭제
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
```