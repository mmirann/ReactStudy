import { useState } from "react";
import Dice from "./Dice";
import HandButton from "./HandButton";
import HandIcon from "./HandIcon";
import Button from "./Button";
import { compareHand, generateRandomHand, random } from "./utils";

const INITIAL_VALUE = "rock";

function getResult(me, other) {
  const comparsion = compareHand(me, other);
  if (comparsion > 0) return "승리";
  if (comparsion < 0) return "패배";
  return "무승부";
}

//props: 컴포넌트에 적용된 속성
function App() {
  const [num, setNum] = useState(1);
  const [sum, setSum] = useState(0);
  const [hand, setHand] = useState(INITIAL_VALUE);
  const [otherHand, setOtherHand] = useState(INITIAL_VALUE);
  const [gameHistory, setGameHistory] = useState([]); //배열
  const [score, setScore] = useState(0);
  const [otherScore, setOtherScore] = useState(0);
  const [bet, setBet] = useState(1);

  const handleButtonClick = (nextHand) => {
    const nextOtherHand = generateRandomHand();
    const result = getResult(hand, otherHand);
    const comparsion = compareHand(hand, otherHand);

    setHand(nextHand);
    setOtherHand(nextOtherHand);
    setGameHistory([...gameHistory, result]); //배열은 참조형 변수이기때문에 새로운 변수를 만들어서 할당해주어야함, 그래야 state가 바뀌었다고 판단!

    if (comparsion > 0) setScore(score + bet);
    if (comparsion < 0) setOtherScore(otherScore + bet);
  };
  const handleClearClick = () => {
    setHand(INITIAL_VALUE);
    setOtherHand(INITIAL_VALUE);
    setNum(1);
    setSum(0);
    setGameHistory([]);
    setBet(1);
  };
  const handleRollClick = () => {
    const nextNum = random(6);
    setNum(nextNum);
    setSum(sum + nextNum);
  };
  const handleBetChange = (e) => {
    const num = Number(e.target.value);
    setBet(num);
  };

  return (
    <div>
      <div>
        <Button onClick={handleClearClick}>처음부터</Button>
        <div>
          {score}:{otherScore}
        </div>
        <p>{getResult(hand, otherHand)}</p>
        <Button onClick={handleRollClick}>던지기</Button>
      </div>
      <div>
        <HandIcon value={hand} />
        VS
        <HandIcon value={otherHand} />
      </div>
      <div>
        <input
          type="number"
          onChange={handleBetChange}
          value={bet}
          min={1}
          max={9}
        />
      </div>
      <div>
        <h2>나</h2>
        <Dice color="blue" num={num} />
        <h2>총점</h2>
        <p>{sum}</p>
        <h2>기록</h2>
        <p>{gameHistory.join(", ")}</p>
      </div>
      <HandButton value="rock" onClick={handleButtonClick} />
      <HandButton value="scissor" onClick={handleButtonClick} />
      <HandButton value="paper" onClick={handleButtonClick} />
    </div>
  );
}

export default App;
