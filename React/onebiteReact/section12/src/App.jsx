import { Route, Routes } from "react-router-dom";
// import "./App.css";
import { useReducer, useRef } from "react";
import {
  DiaryDispatchContext,
  DiaryStateContext,
} from "./context/diaryContext";
import { mockData } from "./data/diaryData";
import "./index.css";
import Diary from "./pages/Diary";
import Edit from "./pages/Edit";
import Home from "./pages/Home";
import New from "./pages/New";
import NotFound from "./pages/NotFound";
import { reducer } from "./reducer/diaryReducer";

function App() {
  const [data, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  //  새로운 일기 추가
  const onCreate = (createDate, emotionId, content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        createDate,
        emotionId,
        content,
      },
    });
  };

  // 기존 일기 수정
  const onUpdate = (id, createDate, emotionId, content) => {
    dispatch({
      type: "UPDATE",
      data: {
        id,
        createDate,
        emotionId,
        content,
      },
    });
  };

  // 기존 일기 삭제
  const onDelete = (id) => {
    dispatch({
      type: "DELETE",
      id,
    });
  };

  return (
    <>
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider
          value={{
            onCreate,
            onUpdate,
            onDelete,
          }}
        >
          <button
            onClick={() => onCreate(new Date().getTime(), 1, "Create Test")}
          >
            일기 추가 test
          </button>
          <button
            onClick={() => onUpdate(1, new Date().getTime(), 3, "Update Diary")}
          >
            일기 수정 test
          </button>
          <button onClick={() => onDelete(2)}>일기 삭제 test</button>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<New />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="/diary/:id" element={<Diary />} />
            {/* 위의 모든 경로와 일치하지 않을 때, *(와일드카드)의 element를 반환한다.  */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    </>
  );
}

export default App;
