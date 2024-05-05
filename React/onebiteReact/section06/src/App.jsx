import Controller from "./components/Controller";
import Viewer from "./components/Viewer";
import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const handleCount = (num) => {
    setCount(count + num);
  }

  return (
    <div className="App">
      <h1>Simple Counter</h1>
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
