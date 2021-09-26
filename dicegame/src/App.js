import Dice from "./Dice";
import HandButton from "./HandButton";

//props: 컴포넌트에 적용된 속성
function App() {
  const handleClick = (value) => console.log(value);
  return (
    <div>
      <Dice color="red" num={2} />
      <HandButton value="rock" onClick={handleClick} />
      <HandButton value="scissor" onClick={handleClick} />
      <HandButton value="paper" onClick={handleClick} />
    </div>
  );
}

export default App;
