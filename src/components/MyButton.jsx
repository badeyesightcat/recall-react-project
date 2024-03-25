import { useState } from "react";

export default function MyButton() {
  const [clicked, setClicked] = useState(0);

  const handleClick = () => {
    setClicked((prev) => prev + 1);
  };

  return (
    <>
      <button onClick={handleClick}>I am a button</button>
      <p>{`${clicked} times clicked`}</p>
    </>
  );
}
