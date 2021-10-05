## Props

컴포넌트에 속성을 지정하면 각 속성이 하나의 객체로 모여서 컴포넌트를 정의한 함수의 첫 번째 파라미터로 전달된다.
```js
import Dice from './Dice';
fucntion App(){
    return(
        <div>
            <Dice color="blue" num={2} />
        </div>
    )
}
export default App;
```

```js
function Dice(props){
    console.log(props);
    const alt = `${props.color} ${props.num}`;
}
export default Dice;
```

위의 코드처럼 `App` 함수에서 사용하는 `Dice` 컴포넌트에 `color`,`num` 속성을 지정해서 전달한다.  

**콘솔 출력 결과**
```
{ color: "blue" }
```

props가 객체 형태를 띠고 있으므로 Destructuring 문법을 활용하여 간결하게 코드를 작성할 수 있다.
```js
function Dice({color='blue',num=1}){
    const alt = `${color} ${num}`;
}
export default Dice;
```

## Children

`props`에는 `children`이라는 특펼한 프로퍼티(prop,프롭)가 있다. JSX 문법으로 컴포넌트를 작성할 때 컴포넌트를 단일 태그가 아니라 여는 태그와 닫는 태그의 형태로 작성하면, 그 안에 작성된 코드가 `children` 값에 담기게 된다. 

```js
    function Button({children}){
        return <button>{children}</button>;
    }
    export default Button;
```

```js
    import Button from './Button';

    function App(){
        return(
            <div>
                <Button>던지기</Button>
                <Button>처음부터</Button>
            </div>
        )
    }
```

JSX 문법으로 컴포넌트를 작성할 때 어떤 정보를 전달할 때는 일반적인 `props`의 속성값을 주로 활용하고, 화면에 보여질 모습을 조금 더 직관적인 코드로 작성하고자 할 때 children 값을 활용할 수 있다. 

## State

State는 리액트에서 화면을 그려내는 데 굉장히 중요한 역할을 한다. `state`는 **상태가 바뀔 때마다 화면을 새롭게 그려내는 방식**으로 동작을 한다. 리액트에서 `state`를 만들고 `state`를 바꾸기 위해서 `useState`라는 함수를 활용해야한다.

```js
import {useState} from 'react';

const [num,setNum] = useState(1);

```
보통 위와 같이 Destructuring 문법으로 작성한다. `useState` 함수가 초깃값을 아규먼트로 받고 그에 따른 실행 결과로 요소 2개를 가진 배열의 형태로 리턴을 하기 때문이다. 이 때 첫 번째 요소가 state이고, 두 번째 요소가 이 state를 바꾸는 setter 함수이다. state는 변수에 새로운 값을 할당하는 방식으로 변경하는 것이 아니라 setter 함수를 활용하여 호출할 때 전달하는 아규먼트 값으로 state 값을 변경한다. 

```js
function App(){
    const [num,setNum] = useState(1);

    const handleRollClick = () =>{
        setNum(3);
    };

    return (
        <div>
            <Button onClick={handleRollClick}>처음부터</Button>
        </div>
    )
}
```

## 참조형 State
```js
// ...
    const [gameHistory, setGameHistory] = useState([]);

    const handleRollClick = () =>{
        const nextNum = random(6);
        gameHistory.push(nextNum);
        setGameHistory(gameHistory); //State가 제대로 변경되지 않음
    };
```
위의 코드와 같이 배열 값을 가진 `gameHistory`에 `push` 메소드를 이용해 배열의 값을 변경한 다음, 변경된 배열을 setter 함수로 state를 변경하려고 하면 코드가 제대로 작동하지 않는다.  
`gameHistory` state는 배열 값 자체를 가지고 있는 게 아니라 그 배열의 주솟값을 참조하고 있어 `push`메소드로 배열 안의 요소를 변경했다고 하더라도 결과적으로는 참조하는 배열의 주솟값은 변경된 것이 아니게 된다. 따라서 리액트는 `gameHistory` state가 참조하는 주솟값은 여전히 똑같기 때문에 상태가 바뀌었다고 판단하지 않아 setter 함수가 작동하지 않는 것이다. 따라서 참조형 state를 활용할 땐 새로운 참조형 값을 만들어 state를 변경해야 한다. => Spread문법(...)을 활용! 
```js
//...
    const [gameHistory, setGameHistory] = useState([]);

    const handleRollClick = () =>{
        const nextNum = random(6);
        setGameHistory([...gameHistory,nextNum]); //State가 제대로 변경됨
```