import Controller from "./components/Controller";
import Viewer from "./components/Viewer";
import "./App.css";
import { useEffect, useRef, useState } from "react";
import Even from "./components/Even";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  // 컴포넌트 마운트 여부를 ref 객체에 저장
  const isMount = useRef(false);

  // useEffect
  // 1. mount : 컴포넌트가 렌더링 되는 시점
  useEffect(() => { 
    console.log('mount!');
  }, [])

  // 2. update : 컴포넌트가 변경되는 시점
  useEffect(() => {
    // 컴포넌트 mount시에 useEffect를 수행하고 싶지 않은 경우 ref 객체를 플래그로 사용하여 함수를 수행하지 않도록 한다.
    if(!isMount.current){
      // 컴포넌트가 mount 되지 않은 상황
      isMount.current = true;
      console.log('isMount.current --> set true!');
      return;
    }
    // 컴포넌트가 mount 된 이후 update 된 상황
    console.log('updated!');
  })

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
        {/* count 가 짝수인 경우만 Even 컴포넌트 출력 */}
        {(count % 2 === 0) ? <Even /> : null}
      </section>
      <section>
        <Controller handleCount={handleCount} />
      </section>
    </div>
  );
}

export default App;
