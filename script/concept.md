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