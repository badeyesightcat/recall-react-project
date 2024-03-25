import { useState } from "react";
import "./App.css";
import MyButton from "@/components/MyButton";
import AboutPage from "@/components/AboutPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <MyButton />
      <AboutPage />

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </>
  );
}

export default App;
