# ch04. 변수와 상수

- 변수 : 선언시 초기값을 할당하고 이후 값을 재할당(변경) 할 수 있다.
- 상수 : 선언시 초기값을 할당하며 값 변경이 불가하다.

### 변수의 네이밍 룰

1. `$` 와 `_` 를 제외한 기호는 변수에 사용할 수 없다.
2. 변수명 첫 글자로 숫자가 올 수 없다.
3. 예약어(let, if, ..)를 사용할 수 없다.

```javascript
let %per = 'D';  // 사용불가한 변수명
const 2Ee = 'E'; // 사용불가한 변수명
let let = 'F';   // 사용불가한 변수명
```

<br /><br />

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

<br /><br />

# ch06. 형 변환(Type casting)

어떤 값의 타입을 다른 타입으로 변경하는 것

- 묵시적 형변환
- 명시적 형변환

### 묵시적 형변환 (암묵적 형변환)

개발자가 명시하지 않아도 javascript 엔진이 알아서 형 변환을 하는 것

```
let num1 = 12; // number type
let str1 = "입니다."; // string type
let result = num1 + str1;
```

### 명시적 형변환

개발자가 내장함수등을 이용하여 직접 형 변환을 일으키는 것

```
let str = "99";
let strToNum = Number(str);
// console.log(strToNum);  // 99  --> number type

let num = 23425;
let numToStr = String(num);
// console.log(numToStr + "입니다."); // 23425입니다. --> string type
```

<br /><br />

# ch07. 연산자(Operator) 1

### 연산자(Operator)

프로그래밍에서 연산을 수행하기 위해 사용하는 기호

`+` : 덧셈 연산자 `-` : 뺄셈 연산자 `*` : 곱셈 연산자 `/` : 나눗셈 연산자 등이 있다.

### 대입 연산자

`=` 기호를 기준으로 왼쪽 항에는 선언한 변수 종류와 변수 명, 오른쪽에는 변수에 대입할 값을 적어준다.

### 산술 연산자

- `+` , `-` , `*` , `/` , `%` → 덧셈, 뺄셈, 곱셈, 나누기(몫), 모듈러(나머지) 가 있다.
- 연산자의 우선순위 : 곱셈, 나누기, 모듈러 > 덧셈, 뺄셈
- 연산자의 우선순위보다 먼저 연산하고 싶은 경우 괄호를 사용하여 연산을 먼저 처리한다.

### 복합 대입 연산자

산술 연산자와 대입 연산자를 같이 사용하여 연산한다.
모든 산술 연산자를 사용할 수 있다.

```jsx
let num = 30;
num += 20; // num 에 20을 더한다.

console.log(num); // 50;
```

### 증감 연산자

전위 연산 : 변수앞에 연산자를 붙이며 해당라인에서 즉시 적용된다.
후위 연산 : 변수뒤에 연산자를 붙이며 다음라인부터 적용된다.

```jsx
let num = 10;

// 전위 연산 -> 1을 더한 값이 즉시 적용됨.
console.log(++num); // 11;

// 후위 연산 -> 1을 더한 값이 다음라인부터 적용됨.
console.log(num++); // 11;
console.log(num); // 12;
```

### 논리 연산자

or, and, not

- or 연산자 : `||` 기호를 사용하며 두 값중 하나만 참이면 참, 거짓이면 거짓이다.
- and 연산자 : `&&` 기호를 사용하며 두 값 모두 참이면 참, 거짓이면 거짓이다.
- not 연산자 : `!` 기호를 붙여 사용하며 어떤 값을 부정(반대되는)한 값을 갖는다.

```jsx
let or = true || false;
let and = true && false;
let not = !true;

console.log(or, and, not); // true, false, false
```

### 비교 연산자

초과, 미만, 이상, 이하, 동등 값을 비교한다.
동등의 값을 비교할때 `===` 기호를 사용한다.

- `==` 와 `===` 의 차이
  `===` 을 사용한 경우 해당 값과 자료형까지 비교한다.
  `==` 를 사용한 경우 값만 비교하고 자료형까지 비교하지 않는다.
  ```jsx
  console.log(1 == 1); // true
  console.log(1 == "1"); // true
  console.log(1 === "1"); // false
  console.log(1 === 1); // true
  ```

<br /><br />

# ch08. 연산자(Operator) 2

### null 병합 연산자

- `변수1 ?? 변수2` 형태로 사용한다.
- 두 변수를 비교하여 null 또는 undefined 이 아닌 값을 반환한다.
- 두 변수 모두 null, undefined 가 아닌 경우 첫번째 쓰인 변수를 반환한다.

### typeof 연산자

- `typeof + 변수` 형태로 사용하며 변수의 타입을 문자열로 반환한다.

### 삼항 연산자

- `조건식 ? 참인 경우의 값 : 거짓인 경우의 값` 형태로 사용된다.
- 조건식 판별 결과에 따라 반환되는 값이 다르다.