import "./Main.css";
const Main = () => {
  const user = {
    namd: "user1",
    isLogin: true,
  };

  if (user.isLogin) {
    return <div className="logout">로그아웃</div>;
  } else {
    return <div>로그인</div>;
  }

  // return <>{user.isLogin ? "로그아웃" : "로그인"}</>;
};

export default Main;
