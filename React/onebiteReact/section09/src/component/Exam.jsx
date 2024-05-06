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
