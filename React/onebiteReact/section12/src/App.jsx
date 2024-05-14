import { Route, Routes, useNavigate } from "react-router-dom";
// import "./App.css";
import Button from "./components/Button";
import "./index.css";
import Diary from "./pages/Diary";
import Home from "./pages/Home";
import New from "./pages/New";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";


// 1. "/" : 모든일기를 조회하는 Home 페이지
// 2. "/new" : 새로운 일기를 작성하는 New 페이지
// 3. "/diary" : 일기를 상세히 조회하는 Diary 페이지
  function App() {
  // useNavigate
  // 페이지 이동시 사용하는 React Router의 커스텀 Hook
  // navigation 객체를 반환한다.
  // navigation 객체에 인수로 Route에 명시된 path를 넣어주면 해당 컴포넌트로 이동한다.
  const nav = useNavigate();

  // 버튼 클릭시 New 컴포넌트로 이동하는 함수
  const handleNewPage = () => {
    nav("/new");
  }
  return (
    <>
    <Header 
    title={"Header"}
    leftChild={<Button text={"Left"} />}
    rightChild={<Button text={"Right"} />}
    />
    <div>
      <Button 
      text={"버튼1"}
      type={"DEFAULT"}
      onClick={(() => {
        console.log("버튼 1 클릭");
      })}
      />
      <Button 
      text={"버튼2"}
      type={"GREEN"}
      onClick={(() => {
        console.log("버튼 2 클릭");
      })}
      />
      <Button 
      text={"버튼3"}
      type={"RED"}
      onClick={(() => {
        console.log("버튼 3 클릭");
      })}
      />
    </div>
      {/* // Routes 컴포넌트는 Switch 문 처럼 위에서 부터 아래로 내려오며 path와 */}
      {/* 일치하는 Route를 찾아 element에 명시된 컴포넌트를 반환한다. */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        {/* /:id   --> 사용할 파라미터를 명시 */}
        <Route path="/diary/:id" element={<Diary />} />
        {/* 위의 모든 경로와 일치하지 않았을 때, *(와일드카드)의 element를 반환한다.  */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
