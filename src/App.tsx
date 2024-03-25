import { useState } from "react";
import "./App.css";
import MyButton from "@/components/MyButton";
import AboutPage from "@/components/AboutPage";
import ImageWrapper from "@/components/ImageWrapper";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <MyButton />
      <AboutPage />
      <ImageWrapper
        img={{
          width: "960x",
          height: "540px",
          src: "https://static-campaign.naver.com/nfs/logoart/logo/1380/4ed6bed0f5fca7218910be92ce03a390.gif",
        }}
      />

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
