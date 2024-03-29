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

<br /><br />

# ch09. 조건문 (Conditional Statement)

조건문을 사용하여 코드를 작성하는 경우 특정 조건에 해당하는 경우에만 코드를 실행 할 수 있다.

## if 문

다양한 조건을 판별하는 경우 사용한다.

```jsx
if(조건식) {
	// 조건식이 true 인 경우 실행할 코드를 작성한다. 
}
```

- if-else
    
    ```jsx
    if(조건식) {
    	// 조건식이 true 인 경우 실행할 코드를 작성한다. 
    } else {
    	// 조건식이 false 인 경우 실행할 코드를 작성한다.
    }
    ```
    
- if-else if-else
    
    ```jsx
    if(조건식1) {
    	// 조건식1이 true 인 경우 실행할 코드를 작성한다. 
    } else if(조건식2) {
    	// 조건식2가 true 인 경우 실행할 코드를 작성한다.
    } 
    	// ... 추가로 조건식이 필요한 경우 개수 제한없이 작성 가능하다.
    else {
    	// 위 조건식이 모두 false 인 경우 실행할 코드를 작성한다.
    }
    ```
    

## Switch 문

특정 값에 따라 조건을 수행하는 경우 Switch 문을 사용하면 코드를 직관적으로 볼 수 있다.

```jsx
switch(값을 판별할 변수) {
	case 값1 :
		// 변수 = 값1인 경우 실행할 코드
	case 값2 :
		// 변수 = 값2인 경우 실행할 코드
	...
}
```

- break
    
    변수가 특정 값에 해당하는 경우 case문 실행 후 break 문을 사용해주어야 이후 다른 case의 코드가 실행되지 않고 Switch 문을 탈출한다.
    
    ```jsx
    switch(값을 판별할 변수) {
    	case 값1 :
    		// 변수 = 값1인 경우 실행할 코드
    		break;  // 값1의 case문 종료
    	case 값2 :
    		// 변수 = 값2인 경우 실행할 코드
    		break;  // 값2의 case문 종료
    	...
    }
    ```
    
- default
    
    변수가 어떠한 case에 해당되지 않는 경우 실행할 코드를 default 문에 작성한다.
    
    ```jsx
    switch(값을 판별할 변수) {
    	case 값1 :
    		// 변수 = 값1인 경우 실행할 코드
    		break;  // 값1의 case문 종료
    	case 값2 :
    		// 변수 = 값2인 경우 실행할 코드
    		break;  // 값2의 case문 종료
    	...  // 다른 case문
    	default :
    		// 모든 case문에 해당되지 않는 경우 실행할 코드
    }
    ```

<br /><br />

# ch10. 반복문(Loop, Iteration)
반복문을 사용하여 원하는 동작을 반복적으로 수행할 수 있다.

```jsx
for(초기식; 조건식; 증감식) {
	// 반복적으로 수행할 코드를 작성한다.
}
```

### 반복문에서 break 사용

반복문 수행 중 `break` 를 만나는 경우 즉시 반복문이 중단된다.

```jsx
for(i=0; i<=10; i++){
    console.log(i, '번째 반복중..');
    if(i === 5){
        console.log('break!');
        break; // i가 5일때 반복문 중단
    }
}
```

### 반복문에서 continue 사용

반복문 수행 중 `continue`를 만나는 경우 해당 반복문이 중지되고 다음 반복문이 실행된다.

```jsx
for(i=0; i<=5; i++){
    if(i === 3){
        continue;  // i가 3인 경우만 반복문 건너뜀
    }
    console.log(i, '번째 반복중..');
}

```

<br /><br />

# ch11. 함수

특정 기능을 수행하는 코드를 묶어서 이름을 붙여 사용한다.

함수를 사용하면 중복되는 코드를 줄일 수 있으며 유지보수가 편리한 장점이 있다.

함수 선언

```jsx
function 함수이름() {
	// 함수 내부에서 실행할 코드
}
```

- 함수는 `함수이름()` 을 사용하여 호출(사용)이 가능하다.
- 함수의 `()` 내부에 인자를 넣어 호출 할 수 있으며, 함수 선언시 매개변수 위치에 변수명을 명시하면 함수 내부에서 인자값을 사용할 수 있다.

```jsx
function gugudan(firstNum, secondNum) {
    let result = firstNum * secondNum;
    console.log(result);
}

gugudan(9,8);   // 72
```

- 함수는 return 값을 가질 수 있다.
    
    return문 이후 작성된 코드는 수행되지 않는다.
    

```jsx
function gugudan(firstNum, secondNum) {
    let result = firstNum * secondNum;
    return result;
}

let resultNum = gugudan(4,8);   
console.log(resultNum);   // 32
```

- 중첩 함수
    
    함수 내부에 함수를 사용할 수 있다.
    

```jsx
function gugudan(firstNum, secondNum) {
  let result = firstNum * secondNum;

  console.log(isEven(result));

  // 중첩 함수
  function isEven(result) {
    return result % 2 === 0;
  }
}

gugudan(3,7);   // false
```

- 호이스팅(Hoisting)
    
    선언문과 호출문의 위치에 관계 없이 (자바스크립트 인터프리터가) 코드 실행시 함수를 최상단으로 끌어올려 실행해주는 기능이다.

<br /><br />

# ch12. 함수 표현식과 화살표 함수

### 함수 표현식

- 함수 표현식으로 함수 선언
    
    변수에 함수를 대입한다. 변수에 담긴 함수는 값으로 취급된다.
    
    변수에 대입할 함수는 변수 대입시 선언해도 되고, 먼저 선언한 후에 대입해도 된다.
    

```jsx
// a. 변수 대입시 함수 선언한 경우
let var1 = function funcB() {
  console.log("funcB");
};

// b. 이미 선언된 함수를 변수에 대입하는 경우
function funcA() {
  console.log("funcA");
};
let var2 = funcA;

var1();     // funcA
var2();     // funcB
```

- 변수 대입시 함수를 선언하는 경우 해당 함수는 변수명으로만 호출이 가능하다.
    
    (선언한 함수명으로 호출이 불가능 하다.)
    

```jsx
let var3 = function funcC() {
  console.log("funcC");
};

// var3();     // funcC
// funcC();    // Uncaught ReferenceError: funcC is not defined
```

- 익명함수
    
    변수 대입시 함수를 선언하는 경우 함수명을 생략하여 사용하는 함수
    
    익명함수는 변수명으로 호출한다.
    

```jsx
let var4 = function () {
  console.log("Anonymous function");
};

var4();     // Anonymous function
```

- 함수 표현식에서의 호이스팅 기능
    
    함수가 먼저 선언된 후 변수에 담겨있다면 호이스팅이 적용되지만, 변수 대입시에 함수를 선언하는 경우 호이스팅이 불가능 하다.
    

```jsx
// a. 선언된 함수를 변수에 대입 = 호이스팅 가능
let var5 = hoistFuncA();    // hoistFuncA

function hoistFuncA() {
  console.log("hoistFuncA");
};

// b. 변수 대입시 함수를 선언 = 호이스팅 불가능
hoistFuncB();   // Uncaught ReferenceError: hoistFuncB is not defined

let var6 = function hoistFuncB() {
  console.log("hoistFuncB");
};
```

### 화살표 함수

화살표 함수를 사용하면 기존보다 더 간결하게 함수를 작성할 수 있다.

함수가 여러줄의 기능을 수행하지 않는 경우 화살표 함수의 중괄호를 생략할 수 있다.

```jsx
// 화살표 함수
let arrFunc1 = () => {
    console.log('arrFunc');
};

arrFunc1();     // arrFunc

// 중괄호가 생략된 화살표 함수
let arrFunc2 = (value) => value * 2;

console.log(arrFunc2(9));   // 18
```
<br /><br />

# ch13. 콜백 함수(Callback Function)

다른 함수에 인수로 전달된 함수

먼저 선언된 함수나 인수에서 선언한 함수를 매개변수에 전달할 수 있다.

```jsx
// 콜백 함수
// 다른 함수에 인수로 전달된 함수
function main(value) {
    value();
}

function sub() {
    console.log('sub');
}

main(sub);  // sub
```

인수에 선언하는 함수는 기본 함수, 함수표현식, 화살표 함수 형식을 사용할 수 있다.

```jsx
// a. 함수 -> 콜백 함수
function main2(num, func) {
    func(num);
}

// b. 함수 표현식 (익명함수) -> 콜백 함수
main2(3, function (num) {
    console.log('anonymous function = ', num);    // anonymous function =  3
});

// c. 화살표 함수 -> 콜백 함수
main2(6, (num) => {
    console.log('arrow function = ', num);    // arrow function =  6
})
```

<br /><br />

# ch14. 스코프(Scope)
변수나 함수에 접근하거나 호출 할 수 있는 범위

- 전역스코프 : 전체 범위에서 접근, 호출 가능
- 지역스코프 : 일정 범위 내에서만 접근, 호출 가능

중괄호 내부의 변수는 중괄호 안에서만 지역 스코프를 갖는다.

함수 선언식은 함수 안에서만 지역 스코프를 갖는다.

```jsx
const a = 1;    // 전역 스코프를 갖는다.

function funcA () {
    const b = 2;    // 지역 스코프를 갖는다.
    console.log(b) ;
    
    // 지역 스코프를 갖는다.
    function funcB() {
        const c = 3;   // 지역 스코프를 갖는다.
        console.log(c) ;
    }
}

if(true) {
    let d = 4;   // 지역 스코프를 갖는다.
}

for(let i=0; i<=4; i++){
    let e = 5;   // 지역 스코프를 갖는다.
}

// 변수가 갖는 스코프의 범위 밖에서 변수를 호출하려는 경우 오류가 발생한다.
console.log(e);     // Uncaught ReferenceError: e is not defined
```

<br /><br />

# ch15. 객체(Object) 1
- 객체(Object)

원시타입이 아닌 객체 타입

여러 가지 값을 동시에 저장할 수 있다.

- 객체 생성

```jsx
// new 키워드 사용
let newObj1 = new Object();
console.log(newObj1);

// 중괄호 사용 -> 간결한 방식이어서 많이 쓰임
let newObj2 = {};
console.log(newObj2);
```

- 객체 프로퍼티 (객체 속성)
    
    중괄호 내부에 `key : value` 형태의 데이터가 존재한다.
    
    `key` 
    
    - 표기할 때는 따옴표를 사용하지 않고 `key` 값을 적어준다.
    - `key` 값에는 문자, 숫자를 사용할 수 있다.
    - `key` 값에 띄어쓰기가 포함되는 경우 예외적으로 `''` 를 사용하여 `key` 값을 적어준다.
    
    `value`
    
    - 원시타입, 배열, 객체, 함수 등 모든 형태의 값을 넣을 수 있다.

```jsx
let myPuppy = {
    name    : 'bori',
    age     : 11,
    weight  : '2.3kg' ,
    cute    : true,
    'favorite treats' : 'Dental Treats',
}
```

- 1) 객체 프로퍼티 다루는 방법

```jsx
// a. 점 표기법
console.log(myPuppy.name);      // bori

// b. 괄호 표기법
console.log(myPuppy['cute']);   // true
```

- 2) 객체 프로퍼티 추가, 수정
    
    점 표기법과 괄호 표기법을 사용하여 객체 프로퍼티 추가, 수정 가능
    

```jsx
// 객체 프로퍼티 추가
myPuppy.color = 'white';
myPuppy['microchipped'] = true;
console.log(myPuppy);      // { age:11, color:"white", cute:true, favorite treats:"Dental Treats", microchipped:true, name:"bori", weight:"2.3kg"}

// 객체 프로퍼티 수정
myPuppy.weight = '2.5kg';
myPuppy["favorite treats"] = 'Puppy Biscuits';
console.log(myPuppy);      // { age:11, color:"white", cute:true, favorite treats:"Puppy Biscuits", microchipped:true, name:"bori", weight:"2.5kg"}
```

- 3) 객체 프로퍼티 삭제 (delete 키워드)
    
    `delete 객체명.프로퍼티명` 형태로 프로퍼티를 삭제한다.
    

```jsx
delete myPuppy.weight;
console.log(myPuppy);      // { age:11, color:"white", cute:true, favorite treats:"Puppy Biscuits", microchipped:true, name:"bori"}
```

- 4) 객체 프로퍼티 존재 여부 확인 (in 연산자)
    
    `'확인할 프로퍼티명' in 객체명` 형태로 사용하고 `true/false` 값을 반환받는다.
    

```jsx
let result = 'age' in myPuppy;
console.log(result);        // true
```