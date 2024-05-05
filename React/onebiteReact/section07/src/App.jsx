import Controller from "./components/Controller";
import Viewer from "./components/Viewer";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  // useEffect
  useEffect(() => {
    // 의존성 배열의 값이 변경되는 경우 실행되는 함수
    console.log(`count : ${count} / input : ${input}`);
  }, [count, input]); // count 와 input 값이 변경되면 useEffect의 함수가 실행된다.

  const handleCount = (num) => {
    setCount(count + num);
  };

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input
          value={input}
          onChange={(e) => {
            console.log(e.target.value);
            setInput(e.target.value);
          }}
        />
      </section>
      <section>
        <Viewer count={count} />
      </section>
      <section>
        <Controller handleCount={handleCount} />
      </section>
    </div>
  );
}

export default App;
