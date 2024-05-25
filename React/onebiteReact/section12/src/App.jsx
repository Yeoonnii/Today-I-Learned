import { Route, Routes } from "react-router-dom";
// import "./App.css";
import { useReducer } from "react";
import "./index.css";
import Diary from "./pages/Diary";
import Edit from "./pages/Edit";
import Home from "./pages/Home";
import New from "./pages/New";
import NotFound from "./pages/NotFound";
import { reducer } from "./reducer/diaryReducer";
import { mockData } from "./data/diaryData";

function App() {
  const [data, dispatch] = useReducer(reducer, mockData);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/diary/:id" element={<Diary />} />
        {/* 위의 모든 경로와 일치하지 않을 때, *(와일드카드)의 element를 반환한다.  */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
