import Board from "./Board";
import { useState } from "react";
import Button from "./Button";
import "./App.css";

function random(n) {
  return Math.ceil(Math.random() * n);
}
function App() {
  const [myHistory, setMyHistory] = useState([]); //배열
  const [otherHistory, setOtherHistory] = useState([]); //배열

  const handleClearClick = () => {
    setMyHistory([]);
    setOtherHistory([]);
  };
  const handleRollClick = () => {
    const nextOtherNum = random(6);
    const nextMyNum = random(6);
    setMyHistory([...myHistory, nextMyNum]);
    setOtherHistory([...otherHistory, nextOtherNum]);
  };

  return (
    <div className="App">
      <div>
        <Button className="App-button" onClick={handleClearClick} color="blue">
          처음부터
        </Button>
        <Button className="App-button" onClick={handleRollClick} color="red">
          던지기
        </Button>
      </div>
      <div>
        <Board name="나" color="blue" gameHistory={myHistory} />
        <Board name="상대" color="red" gameHistory={otherHistory} />
      </div>
    </div>
  );
}

export default App;
