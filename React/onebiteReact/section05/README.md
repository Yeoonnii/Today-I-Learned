# React.js 입문

### VSCode Extension - ESlint 설치

ESLint는 자바스크립트 코드에서 발견되는 문제시되는 패턴들을 식별하기 위한 정적 코드 분석 도구이다.
[참고 링크 : ESlint 공식 홈페이지](https://eslint.org/)

<br>

## ch02. React Component

### React 컴포넌트란?

- JavaScript 함수에서 return 문에 html 태그들을 반환하는 함수를 말한다.

```jsx
// Header 컴포넌트
const Header = () => {
  return (
    <header>
      <h1>header</h1>
    </header>
  );
};
```

### 컴포넌트 생성방법

- 컴포넌트 이름은 대부분 해당 함수의 이름을 따서 부르며, 대문자로 시작해야 한다.
- 컴포넌트는 함수형 컴포넌트와 클래스형 컴포넌트 두가지 형태로 작성할 수 있다.
    
    → 클래스형 컴포넌트 사용시 작성해야하는 코드의 양이 많아지기 때문에 함수형 컴포넌트를 많이 사용한다.
    
- 함수형 컴포넌트는 function, 화살표 함수로 생성할 수 있다.

```jsx
// function을 사용한 컴포넌트
function Header() {
  return (
    <header>
      <h1>header</h1>
    </header>
  );
}

// 화살표 함수를 사용한 컴포넌트 
const Header = () => {
  return (
    <header>
      <h1>header</h1>
    </header>
  );
};
```

### 부모/자식 컴포넌트

- ROOT (App) 컴포넌트 : 최상위 조상 컴포넌트
- 자식 컴포넌트 : 본인의 컴포넌트가 다른 컴포넌트 return문에 포함된 컴포넌트
- 부모 컴포넌트 : 본인 컴포넌트 return문 내부에 다른 컴포넌트를 포함함
<img src="./img/component.png" title="component">

### 컴포넌트 모듈화

- Es 모듈 시스템에 의해 특정 컴포넌트를 `export` , `import` 하여 사용할 수 있다.
- vite로 생성한 React 프로젝트에서 import 시 확장자를 생략해도 인식이 가능하다. (vite 내부에 자동 설정되어 있음)

<br>

## ch03. JSX로 UI 표현하기

### JSX (JavaScript Extensions)

- 확장된 자바스크립트의 문법이며 React.js에서 JSX 문법을 사용한다.
- JavaScript와 Html을 혼용하여 사용할 수 있다.

### JSX 주의사항

1. JSX return 문의 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있다.
    - 자바스크립트 표현식 : 한줄의 코드가 특정한 값으로 평가 될 수 있는 식
    - `if`, `for` 과 같은 조건문은 자바스크립트 표현식이 아니기 때문에 return 문에서 사용이 불가하다.
2. 숫자, 문자열, 배열 값만 렌더링 된다.
    - `boolean`, `undifined`, `null` 값은 화면에 렌더링이 불가하다.
    - `Objcet`(객체) 값은 렌더링이 불가하다. 점 표기법 `obj.a` 과 같이 객체의 프로퍼티를 꺼낸값이 문자나 숫자인 경우만 렌더링이 가능하다.
3. 모든 태그는 닫혀있어야 한다.
    - 태그를 사용시 `/`를 사용한 닫는 태그가 존재해야 한다.
4. 최상위 태그는 반드시 하나여야만 한다.
    - 최상위 태그에 사용할 만한 태그가 없는 경우 Fragment (= 빈 태그, `<> </>`) 를 사용해준다.
    
    ```jsx
    // 닫는 태그가 하나인 경우
    return (
    	<>
    		<h1>Hello</h1>
    	</>
    )
    
    // ERROR : 닫는 태그가 하나이상인 경우
    return (
    	<div></div>
    	<div>
    		<h1>Hello</h1>
    	</div>
    )
    ```
    

### React Fragment (= 빈 태그, `<> </>`)

- 컴포넌트가 여러 엘리먼트를 return 할때 JSX 규칙상 하나의 태그로 묶어서 return 해줘야 한다. 이때 Fragment 를 사용하면 DOM에 별도의 노드를 추가하지 않고 여러자식을 그룹화 할 수 있다.
- Fragment는 불필요한 DOM의 생성을 막기 때문에 메모리를 적게 사용한다.

[참고 링크 : **React docs**](https://ko.legacy.reactjs.org/docs/fragments.html)

### JSX에서 삼항연산자를 이용한 조건부 렌더링

```jsx
const Main = () => {
  const user = {
    namd: "user1",
    isLogin: true,
  };

// 방법 1
 if (user.isLogin) {
    return <div>로그아웃</div>;
  } else {
    return <div>로그인</div>;
  }
  
// 방법 2
  return <>{user.isLogin ? "로그아웃" : "로그인"}</>;

};

export default Main;
```

### JSX에서 DOM 요소에 style 적용하기

1. 요소에 style 직접 적용하기
    - html element에 style 적용시 케밥 케이스(kebab-case) 표기법 사용 `background-color`
        
        → JSX element에 style 적용시에는 카멜케이스(camelCase) 표기법 사용 `background-color`
        

```jsx
<div style={{ backgroundColor: "pink", border: "5px solid green" }}>
	로그아웃
</div>
```

1. 별도의 css 파일을 import 하여 사용하기
    - import +  css 파일 경로
    - element에 className 속성을 사용하여 css에 정의된 class를 사용
        - JSX는 html과 JavsScript를 같이 사용하기 때문에 , JavaScript의 예약어인 `class` 를 사용할 수 없다. 대신 `className` 을 사용하여 css에 정의된 class를 사용한다.

```jsx
// 컴포넌트
import "./Main.css";
...
<div className="logout">로그아웃</div>

// css 파일
.logout {
    background-color: pink;
    border: 5px solid green;
}
```
