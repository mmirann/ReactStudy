import ReactDOM from "react-dom";
import App from "./App";
const me = "rock";
const other = "scissor";

const WINS = {
  rock: "scissor",
  scissor: "paper",
  paper: "rock",
};

function getResult(left, right) {
  if (WINS[left] === right) return "승리";
  else if (left === WINS[right]) return "패배";
  else return "무승부";
}

function handleClick() {
  console.log("가위바위보");
}

//render 함수 -> 첫번째 argument(하나의 태그로 감싸야함 아니면 Fragment 이용)를 두번째 argument에 넣음
ReactDOM.render(
  <>
    <App></App>
    <h1 id="title">가위바위보</h1>
    <h2>{getResult(me, other)}</h2>
    <button className="hand" onClick={handleClick}>
      가위
    </button>
    <button className="hand" onClick={handleClick}>
      바위
    </button>
    <button className="hand" onClick={handleClick}>
      보
    </button>
  </>,
  document.getElementById("root")
);
