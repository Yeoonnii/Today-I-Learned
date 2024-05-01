import Button from "./Button";
import Header from "./Header";
import "./Main.css";
const Main = () => {
  const buttonProps = {
    text: "메일",
    color: "pink",
    a: 1,
    b: 2,
    c: 3
  }

  return (
    <>
    <Button {...buttonProps}/><br />
    <Button text={"카페"} color={"blue"}/><br />
    <Button text={"블로그"} color={"green"}/><br />
    <Button text={"자식요소"}>
      <div>자식 element</div>
      <Header />
    </Button>
    </>
  )
  /**
   * ch04. Props로 데이터 전달하기
   */
  /**
   *  ch02. React Component
   *  ch03. JSX로 UI 표현하기
   *  */  
  // const user = {
  //   namd: "user1",
  //   isLogin: true,
  // };

  // if (user.isLogin) {
  //   return <div className="logout">로그아웃</div>;
  // } else {
  //   return <div>로그인</div>;
  // }

  // return <>{user.isLogin ? "로그아웃" : "로그인"}</>;
};

export default Main;
