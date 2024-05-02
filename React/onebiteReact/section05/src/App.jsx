import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [light, setLight] = useState("OFF");

  return (
    <>
    <div>
    <h1>{light}</h1>
      <button
        onClick={() => {
          setLight(light === "ON" ? "OFF" : "ON");
        }}
      >
        {light === "ON" ? "전구끄기" : "전구 켜기"}
      </button>
    </div>
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
    </div>
    </>
  );
}

export default App;
