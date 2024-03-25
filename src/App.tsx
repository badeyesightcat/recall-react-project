import { useState } from "react";
import "./App.css";
import MyButton from "@/components/MyButton";
import AboutPage from "@/components/AboutPage";
import ImageWrapper from "@/components/ImageWrapper";
import CustomList from "@/components/CustomList";

function App() {
  const [count, setCount] = useState(0);
  const list = [
    { title: "Cabbage", isFruit: false, id: 1 },
    { title: "Garlic", isFruit: false, id: 2 },
    { title: "Apple", isFruit: true, id: 3 },
  ];

  return (
    <>
      <MyButton />
      <MyButton />
      <AboutPage />
      <ImageWrapper
        img={{
          width: "960x",
          height: "540px",
          title: "예시 이미지",
          src: "https://static-campaign.naver.com/nfs/logoart/logo/1380/4ed6bed0f5fca7218910be92ce03a390.gif",
        }}
      />
      <CustomList list={list} />

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          {count % 2 === 0
            ? `${count} is an even number.`
            : `${count} is an odd number.`}
        </p>
        {count !== 0 && <p>The number is not zero!</p>}
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </>
  );
}

export default App;
