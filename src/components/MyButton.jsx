export default function MyButton() {
  const handleClick = () => {
    alert("You clicked me!");
  };

  return (
    <>
      <span>i am a deco span element</span>
      <button onClick={handleClick}>I am a button</button>
    </>
  );
}
