# section10. 최적화

## ch01. 최적화(Optimization)

웹 서비스의 성능을 개선하는 모든 행위

단순한것부터 아주 어려운 방법까지 매우 다양함

### 일반적인 웹 서비스 최적화 방법

- 서버의 응답속도 개선
- 이미지, 폰트, 코드 파일 등의 정적 파일 로딩 개선
- 불필요한 네트워크 요청 줄임

### React App 내부의 최적화 방법

- 컴포넌트 내부의 불 필요한 연산 방지
- 컴포넌트 내부의 불 필요한 함수 재생성 방지
- 컴포넌트의 불 필요한 리렌더링 방지

<br><br>

## ch02. useMemo와 연산 최적화

### useMemo

**메모이제이션(Memoization : 기억해두기, 메모해두기) 기법**을 기반으로 불 필요한 연산을 최적화 하는 React Hook

(자매품 : useCallback)<br>

### useMemo 사용법

```jsx
const value = useMemo(() => {},[])
```

- useMemo는 첫번째 인자로 실행할 콜백함수, 두번째 인자로 의존성 배열을 받는다.
- useEffect와 같이 의존성 배열의 값이 변경되는 경우에만 첫번째 인자의 콜백함수가 수행된다.

<br>

[ useMemo 사용 전 ]
<img src="./img/before_useMemo.png" title="before_useMemo" />

```jsx
// List.jsx
// todos 변경시마다 todos의 총 개수, 완료 개수, 미완료 개수를 계산하는 함수 
const getAnalyzedData = () => {
  console.log('getAnalyzedData 함수 호출!');
    const totalCount = todos.length;
    const doneCount = todos.filter((todo) => todo.isDone).length;
    const notDoneCount = totalCount - doneCount;
  
    return {
      totalCount,
        doneCount,
        notDoneCount,
      };
    };
    
 const { totalCount, doneCount, notDoneCount } = getAnalyzedData();
...
return (
  <div className="Analyze">⏩ total : {totalCount} / ✅ done: {doneCount} / 🚫 notDone: {notDoneCount}</div>
```

<br>

[ useMemo 사용하여 컴포넌트 연산 최적화 ]
<img src="./img/after_useMemo.png" title="after_useMemo" />

```jsx
// useMemo의 콜백함수에 getAnalyzedData에서 수행하던 작업을 옮겨줌
const { totalCount, doneCount, notDoneCount } = useMemo(() => {
    console.log("useMemo 실행!");
    const totalCount = todos.length;
    const doneCount = todos.filter((todo) => todo.isDone).length;
    const notDoneCount = totalCount - doneCount;

    return {
      totalCount,
      doneCount,
      notDoneCount,
    };
  }, [todos]);
// 의존성 배열(deps)에 todos를 넣어줌으로써,
// todos가 변경되는 경우만 useMemo가 수행된다.
```
<br><br>

## ch03. React.memo와 컴포넌트 렌더링 최적화
### React.memo란?

컴포넌트를 인수로 받아, 최적화된 컴포넌트로 만들어 반환

```jsx
const MemoizedComponent = memo(Component);
```

React.memo로 컴포넌트를 최적화된 컴포넌트는 

- 부모가 리렌더링 되는 경우에도 리렌더링 되지 않는다.
- 자신이 받는 props가 변경되는 경우에만 리렌더링 된다.

<br>

### React.memo()를 사용하여 불필요한 리렌더링 줄이기 - 1

`React.memo()`를 사용하여 부모 컴포넌트(App.jsx) 렌더링시 자식 컴포넌트(Header.jsx)의 불필요한 렌더링을 최적화할 수 있다.

```jsx
import { memo } from "react"
import "./Header.css"

const Header = () => {
  return (
    <div className="Header">
        <h3>Daily To-Do 📆</h3>
        <h1>{new Date().toDateString()}</h1>
    </div>
  )
}

// React.memo 사용하여 export
const memoizedComponent = memo(Header);
export default memoizedComponent;
```

```jsx
// 위 export 구문을 좀 더 간결하게 작성할 수 있다.
export default memo(Header);
```

<br>

### React.memo()를 사용하여 불필요한 리렌더링 줄이기 - 2

<br>

[ React.memo() 사용 전 ]
<img src="./img/before_ReactMemo2.png" title="before_ReactMemo">

<br>

[ React.memo() 사용 후 ]
<img src="./img/before_ReactMemo2.png" title="before_ReactMemo">
javaScript에서 함수는 객체로 분류되며, 메모리 주소에 의한 참조 비교가 일어난다.

리렌더링시 새로 생성되는 함수는 매번 새로운 메모리 주소를 할당받는다.

TodoItem 컴포넌트에서 props로 받아오는 `onUpdateIsDone`, `onDeleteTodo` 함수는 App 컴포넌트에 존재하며,
App 컴포넌트가 리렌더링 될 때 마다 새로운 메모리 주소를 할당받는다.

TodoItem 컴포넌트 리렌더링 될때마다 얕은 비교를 통해 `onUpdateIsDone`, `onDeleteTodo` 함수가 변경된것으로 인식하게 되고 결과적으로 props가 변경되었다고 판단한다.

위와같이 불필요한 렌더링이 일어나는 문제를 해결하기 위해 `React.memo`메서드를 커스텀하여 컴포넌트 최적화를 수행할 수 있다.

```jsx
import { memo } from "react";
import "./TodoItem.css";
const TodoItem = ({ id, isDone, content, date, onUpdateIsDone, onDeleteTodo }) => {
  // input 태그의 checkbox 클릭시 실행될 함수
  const onChangeCheck = () => {
    // 전달받은 함수 실행
    onUpdateIsDone(id);
  };

  // 삭제버튼 클릭시 실행될 함수
  const handleDeleteButton = () => {
    // 전달받은 함수 실행
    onDeleteTodo(id);
  }

  return (
    <div className="TodoItem">
      <input checked={isDone} onChange={onChangeCheck} type="checkbox" />
      <div className="content">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button onClick={handleDeleteButton}>삭제</button>
    </div>
  );
};

// memo 메서드의 두번째 인자로 콜백함수를 전달하여
// 수동적으로 props 변경되었는지 판단
export default memo(TodoItem, (prevProps, nextProps) => {
  // 콜백함수의 인자로 prevProps, nextProps 전달
  // --> 콜백함수의 반환값에 따라 props 변경 여부를 판단
  
  // 콜백함수가 true 반환시 -> Props 바뀌지 않음 -> 리렌더링 되지 않음
  // 콜백함수가 false 반환시 -> Props 바뀜 -> 리렌더링 됨
  if(prevProps.id !== nextProps.id) return false;
  if(prevProps.isDone !== nextProps.isDone) return false;
  if(prevProps.content !== nextProps.content) return false;
  if(prevProps.date !== nextProps.date) return false;

  return true;
});
```

<br>

### 고차 컴포넌트(HOC, Higher Order Component)

고차 컴포넌트(HOC, Higher Order Component)는 컴포넌트를 가져와 새 컴포넌트를 반환하는 함수이며, 컴포넌트 로직을 재사용하기 위한 React의 고급 기술이다.

이를 통해 컴포넌트를 래핑하여 추가 기능을 제공하거나 성능을 최적화할 수 있다.

`React.memo()` 또한 함수 컴포넌트를 받아서 새로운 메모이즈된 함수 컴포넌트를 반환한다. 이 메모이즈된 컴포넌트는 입력으로 받은 props가 변경되지 않으면 이전에 렌더링된 결과를 재사용한다. 이는 컴포넌트의 렌더링을 최적화하는 데 사용된다.

따라서 `React.memo()`는 고차 컴포넌트와 유사한 역할을 하며, 컴포넌트의 성능을 최적화하는 데 활용된다.

<br><br>

## ch04. useCallback과 함수 재생성 방지
### useCallback

```jsx
const memoizedCallback = useCallback(() => {}, []);
```

- `useCallback()`은 함수를 메모이제이션(memoization)하기 위해서 사용되는 React hook 이다.
- 첫번째 인자로 콜백 함수를, 두번째 인자로는 의존성배열을 명시하여 배열 내의 값이 변경될 때까지 저장해놓고 재사용할 수 있게 해줍니다.
- `useCallback()`을 사용하면, 해당 컴포넌트가 랜더링되더라도 그 함수가 의존하는 값들이 바뀌지 않는 한 기존 함수를 계속해서 반환한다.

<br>

### 최적화를 하는 시점

기능구현이 완료된 후 최적화가 진행되어야 한다.

기능 구현 전 최적화를 진행하는 경우 원하지 않는 시점에 정상적인 작동을 하지 않을수 있으며, 오히려 성능이 저하될 수도 있다.

<br>

### 최적화의 대상

모든것에 최적화에 적용되면 안된다.

- 사용자의 행동에 따라서 개수가 많아질 수 있는 컴포넌트
- 함수들을 많이 가지고 있어서 코드가 무거운 컴포넌트

위와 같이 최적화가 적용이 되어야 할것 같은 연산들, 함수들, 컴포넌트에만 최적화를 적용하는것이 좋다.

### **useMemo/useCallback** 최적화 관련 아티클

[🌍 When to useMemo and useCallback](https://goongoguma.github.io/2021/04/26/When-to-useMemo-and-useCallback/)