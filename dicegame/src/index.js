import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

//render 함수 -> 첫번째 argument(하나의 태그로 감싸야함 아니면 Fragment 이용)를 두번째 argument에 넣음
ReactDOM.render(<App />, document.getElementById("root"));
