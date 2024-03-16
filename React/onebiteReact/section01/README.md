# ch05. javascript의 자료형(DataType)

- 원시타입 : Number, String, boolean, null, undefined
- 객체타입 : Object (Array, Function, RegexExp)

## 원시타입

### Number Type

기본적인 숫자 타입(정수, 소수, 음수, 무한대 등)과 사칙연산을 지원한다.

- NaN (Not a Number)
  : 사칙연산이 실패한 경우 출력된다.

### String Type

- 문자열 간 덧셈연산을 지원한다.
- 템플릿 리터럴 문법
  : 백틱과 중괄호를 사용하여 동적으로 변수를 사용할 수 있다.

```javascript
let myName = "yeoonnii";
let today = "3월17일";

let sentence = `안녕하세요 ${myName}님! 오늘은 ${today}입니다.`;
console.log(sentence);
// 안녕하세요 yeoonnii님! 오늘은 3월17일입니다.
```

### boolean Type

true/false 값을 갖는다.

### null

직접 할당해줘야 하는 값이며 변수에 아무 값도 담겨있지 않다는 뜻이다.

```
let empty = null;
```

### undefined

변수를 선언하고 초기값을 할당하지 않은경우, 혹은 존재하지 않는 변수를 사용하려는 경우 undefined 값을 가진다.

```
let none;
console.log(none);
// undefined
```

### null 과 undefined 의 차이

둘다 값이 없는것을 나타내지만 의미적으로는 다르다.

- null : 명시적으로 값이 없다.
  - 변수 초기화
  - 객체 속성 비우기
  - 함수의 반환값으로 사용됨
- undefined : 값이 할당되지 않았다.
  - 변수 선언 후 값을 할당하지 않은 경우
  - 객체 속성이 존재하지 않는 경우
  - 함수의 인수가 없는 경우
