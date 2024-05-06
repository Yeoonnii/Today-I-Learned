import { useRef } from "react";
import "./App.css";
import ContactEditor from "./components/ContactEditor";
import ContactList from "./components/ContactList";
import { useReducer } from "react";

// 샘플 데이터
const mockData = [
  { id: 0, name: "이정환", contact: "king199777@gmail.com" },
  { id: 1, name: "여니", contact: "010-1234-5678" },
  { id: 2, name: "친구1", contact: "010-5678-9009" },
];

// useReducer에서 사용할 reducer 함수
function reducer(state, action) {
  switch (action.type) {
    // 연락처 추가인 경우
    case "ADD":
      return [action.data, ...state];
    // 연락처 삭제인 경우
    case "DELETE":
      return state.filter((item) => {
        return item.id !== action.targetId 
      })
    default:
      return state;
  }
}

function App() {
  // 연락처 list를 저장할 useReducer
  const [contactList, dispatch] = useReducer(reducer, mockData);
  // id값을 저장할 useRef
  const idRef = useRef(3);

  // 연락처 추가 함수
  const onAdd = (contact) => {
    // dispatch를 통해 reducer에 전달할 객체를 넣어준다. 
    dispatch({
      type: "ADD",
      // 추가할 객체
      data: {
        id: idRef.current++,
        ...contact
      }
    })
  };
  
  // 연락처 삭제 함수
  const onDelete = (targetId) => {
    // dispatch를 통해 reducer에 전달할 객체를 넣어준다. 
    dispatch({
      type:"DELETE",
      // 삭제할 Id
      targetId: targetId
    })
  }

  return (
    <div className="App">
      <h2>Contact List</h2>
      <section>
        <ContactEditor onAdd={onAdd}/>
      </section>
      <section>
        <ContactList contactList={contactList} onDelete={onDelete}/>
      </section>
    </div>
  );
}

export default App;
