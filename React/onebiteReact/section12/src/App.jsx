import { Link, Route, Routes, useNavigate } from "react-router-dom";
// import "./App.css";
import "./index.css";
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import NotFound from "./pages/NotFound";
import {getEmotionImage} from "./util/get-emotion-image";


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
    <div>
      이미지 적용하기 : /src/assets
        <br />
        <img src={getEmotionImage(1)} />
        <img src={getEmotionImage(2)} />
        <img src={getEmotionImage(3)} />
        <img src={getEmotionImage(4)} />
        <img src={getEmotionImage(5)} />
        <hr />
    </div>
      <div>
        Link 컴포넌트를 사용
        <Link to={"/"}>Home</Link><br/>
        <Link to={"/new"}>new</Link><br/>
        <Link to={"/diary"}>diary</Link><br/>
        <hr />
        a 태그를 사용
        <a href="/">Home</a><br/>
        <a href="/new">new</a><br/>
        <a href="/diary">diary</a><br/>
        <hr />
        <button onClick={handleNewPage}>new 페이지로 이동</button>
        <hr />

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
