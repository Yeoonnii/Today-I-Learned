# ch01. Truthy 와 Falsy
## 2.1) Truthy와 Falsy

javascript는 true/false값이 아닌 값을 조건문에서 true/false 값으로 판별하는 경우가 있다.

Truthy 와 Falsy를 사용하면 조건문을 간결하게 작성할 수 있다.

### Falsy 한 값

false가 아니지만 조건식에서 false 값으로 판별되는 값.

- undefined
- null
- NaN
- “ ” (빈 문자열)
- 음수
- 0
- 0n (BigInt 타입, 자바스크립트 기본 숫자 타입(Number)의 범위를 넘어서는 큰 정수 값을 표현한다.)

### Truthy 한 값

true가 아니지만 조건식에서 true 값으로 판별되는 값.

Falsy 값 7개를 제외한 나머지 값은 다 Truthy 값이다.

- 원시타입의 값들
- 양수
- &#91;  &#93; (빈 배열)
- {  } (빈 객체)
- 함수

### 조건문에서 Falsy 값 활용하기

조건문에서 boolean Type을 판별할 때 각각의 boolean Type을 작성하는것 보다 Falsy 값으로 판별하면 더 간결한 조건문을 작성 할 수 있다.

```jsx
// a. boolean Type 별로 조건식을 작성
function getName1 (name) {
    if(person.names === undefined || person.names === null || person.names === '' ) {
        // undefined, null, 빈 문자열인 경우만 체크
        // 다른 falsy 조건이 추가되면 조건문이 길어진다.
        console.log('param Error');
        return;
    }
    console.log('안녕하세요 저는', name, '입니다.');
}

getName1(person.names);  // param Error

// b. Falsy 값으로 조건식 작성
function getName2 (name) {
    if(!person.names) {
        // undefined 이거나 null 인 경우만 체크
        // 다른 falsy 조건이 추가되면 조건문이 길어진다.
        console.log('param Error');
        return;
    }
    console.log('안녕하세요 저는', name, '입니다.');
}

getName2(person.names);  // param Error
```

<br /><br />

# ch02. 단락 평가 (Short-circuit Evaluation)
논리 연산자(AND, OR)를 사용한 조건식에서 첫번째 피연산자 값만으로 논리 연산식의 결과를 확정할 수 있는 경우 두번째 피연산자 값은 판별하지 않는 javascript의 기능

### AND 연산에서의 단락 평가

- AND 연산에서 첫번째 피연산자가 true인 경우 두번째 피연산자도 판별해야 하기 때문에 단락 평가가 수행되지 않는다.
- AND 연산에서 첫번째 피연산자가 false인 경우 결과가 false로 확정되기 때문에 단락 평가가 수행된다.

### OR 연산에서의 단락 평가

- OR 연산에서 첫번째 피연산자가 false인 경우 두번째 피연산자도 판별해야 하기 때문에 단락 평가가 수행되지 않는다.
- OR 연산에서 첫번째 피연산자가 true인 경우 결과가 true로 확정되기 때문에 단락 평가가 수행된다.

<br /><br />

# ch03. 구조 분해 할당
배열이나 객체를 분해하여 변수에 값을 할당하는 기능

### 배열의 구조 분해 할당

```jsx
let arr = ["a", "b", "c"];

// 배열의 구조 분해 할당
let [first, second, third] = arr;
console.log(first);  // a
console.log(second); // b
console.log(third);  // c
```

- 배열 구조 분해 할당시 존재하지 않는 값에 접근하는 경우

```jsx
let [first, second, third, fourth] = arr;
// 존재하지 않는 값에 접근시 undefined 반환 
console.log(fourth);   // undefined
```

- 배열 구조 분해 할당시 초기값 할당하기

```jsx
// 배열 구조 분해 할당시 존재하지 않는 변수에 초기 값 할당
let [first = "first Str", second, third, fourth = 'd'] = arr;
console.log(first);     // 이미 해당 인덱스에 값이 존재하면 존재하는 값을 리턴한다.
console.log(fourth);    // 인덱스에 값이 존재하지 않는 경우 할당된 초기값이 출력된다.
```

### 객체의 구조 분해 할당

```jsx
let person = {
    name: '여니',
    age: 99,
    hobby: '사진찍기'
};

// 객체의 구조 분해 할당
let {name, age, hobby} = person;

console.log(name);   // 여니
console.log(age);    // 99
console.log(hobby);  // 사진찍기
```

- 객체 구조 분해 할당시 존재하지 않는 값에 접근하는 경우

```
let {name, age, hobby, favorite} = person;
console.log(favorite);      // undefined
```

- 객체 구조 분해 할당시 존재하지 않는 변수 초기값 할당

```
let {name, age, hobby, favorite = "unKnown"} = person;
console.log(favorite);      // unKnown (구조 분해 할당시 설정한 초기값이 반환된다.)
```

- 객체 구조 분해 할당시 변수명 변경

```jsx
let {name: myName, age, hobby} = person;
console.log(myName);     // 여니

// 값 참조로 인해 빈 문자열 출력 
// 객체 구조 분해 할당 시 변수명 변경을 하면 값 복사를 하지 않고 기존 변수에 대한 참조를 만든다.
console.log(name);       // ''
```

### 객체 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법

```jsx
function getName1(person) {
    console.log(person);
}
getName1(person);   // {name: '여니', age: 99, hobby: '사진찍기'}

function getName2({name, age, hobby, extra}) {
    console.log(name);  // 여니
    console.log(age);   // 99
    console.log(hobby); // 사진찍기
    console.log(extra); // undefined
}
getName2(person);
```

<br /><br />

# ch04. Spread 연산자와 Rest 매개변수
## Spread 연산자

객체나 배열에 저장된 데이터를 개별 값으로 흩뿌려준다.

- 배열1을 배열2의 중간에 포함하거나, 객체1의 프로퍼티 중간에 객체2의 프로퍼티를 포함할 수 있다.
- 함수 호출시 배열에 저장된 값을 풀어서 전달 할 수 있다.
- 함수 호출시 객체에 저장된 값에 Spread 연산자를 사용하는 경우 오류가 발생한다.

`Uncaught TypeError: Spread syntax requires ...iterable[Symbol.iterator] to be a function`

## Rest 매개변수

Rest = 나머지 라는 뜻이다.

즉, 여러개의 개별 데이터를 Rest 매개변수로 받는 경우 배열에 담아서 받을 수 있다.

- 여러개의 개별 데이터를 Rest 매개변수로 받아올 때 Rest 매개변수를 사용하기 전, 원하는 만큼의 여러개 개별데이터를 배열에 담지 않고 받아올 수도 있다.

```jsx
// 여러개의 데이터를 매개변수로 받아올 때 
// 첫번째, 두번째 매개변수는 개별데이터로, 나머지 매개변수는 배열에 받기
function func3(firstFavorite, secondFavorite,  ...others) {
    console.log(firstFavorite);     // 딸기
    console.log(secondFavorite);    // 사과
    console.log(others);            // ['토마토', '체리']
}
func3('딸기', '사과', '토마토', '체리');
```

- Rest 매개변수를 사용 후 다른 변수명을 개별로 받아오려 하는 경우 오류가 발생한다.

`Rest parameter must be last formal parameter` 

⇒ Rest 매개변수 사용 전에만 데이터를 개별로 받아올 수 있다.

 

```jsx
// function func4(top1, ...others, top2) {     // Rest parameter must be last formal parameter
//      console.log(firstFavorite);
// }
// func4('강아지', '고양이', '햄스터', '금붕어');
```

<br /><br />

# ch05. 원시타입 vs 객체타입
원시타입과 객체타입을 구분하는 이유 = 값을 저장하는 방식이 다르다.
<img src="img/01.png" title="원시타입 VS 객체타입">

### 원시타입의 값 저장 방식

값 자체로써 변수에 저장되고 복사된다 = 불변값

변수에 새로운 값을 저장하려는 경우 메모리에 존재하는 기존 값을 수정하는것이 아니라 새로운 값을 새 메모리에 할당하여 변수에 새로운 참조값을 저장한다.
<img src="img/02.png" title="원시타입의 값 저장 방식">

### 객체타입의 값 저장 방식

참조값을 통해 변수에 저장되고 복사된다 = 가변값

기존 객체에 저장된 값을 수정하는 경우 해당 참조값에 존재하는 객체의 값을 수정한다.
<img src="img/03.png" title="객체타입의 값 저장 방식">

## 객체 타입 주의사항

### 1.객체타입의 값 변경시 의도치 않게 값이 변경될 수 있다.

기존에 존재하는 객체값을 새로운 변수에 할당하려는 경우 기존의 변수와 새 변수 모두 참조값 주소를 동일하게 갖는다.

참조값에 저장된 객체 프로퍼티를 수정하는 경우 동일한 참조값을 공유하는 변수들은 수정된 객체값을 동일하게 공유하게 되는 문제가 생길 수 있다.

⇒ 이처럼 **하나의 변화가 다른 변수에 영향을 주는거나 받는것**을 Side effect라고 한다.
<img src="img/04.png" title="1.객체타입의 값 변경시 의도치 않게 값이 변경될 수 있다.">


### 얕은복사 / 깊은복사
<img src="img/05.png" title="얕은복사 / 깊은복사">

**얕은 복사**
→ 객체의 참조값을 복사한다. 원본 객체가 수정되는 경우 수정된 객체를 동일하게 공유한다.
**원본 객체가 수정될 수 있는 위험성이 존재한다.**

**깊은 복사**
→ 기존에 존재하는 프로퍼티만 복사하여 새로운 객체를 생성한다. 원본 객체와는 다른 새로운 참조값을 갖는다.


### 2. 객체간의 비교는 참조값을 기준으로 이루어진다.
<img src="img/06.png" title="2. 객체간의 비교는 참조값을 기준으로 이루어진다.">

### 얕은비교 / 깊은비교
<img src="img/07.png" title="2. 객체간의 비교는 참조값을 기준으로 이루어진다.">

**얕은 비교**
→ `===` 연산자를 사용하여 객체의 참조값을 비교한다.

**깊은 비교**
→ 자바스크립트 내장 함수 `JSON.stringify()`를 사용하여 객체를 문자열로 변환하여 객체 내부의 프로퍼티가 동일한지 비교할 수 있다.

### 3. 배열과 함수도 사실 객체이다.
배열과 함수도 사실 객체이며 추가적인 프로퍼티나 메서드를 가질 수 있다.
<img src="img/08.png" title="2. 객체간의 비교는 참조값을 기준으로 이루어진다.">

<br /><br />

# ch06. 반복문으로 배열과 객체 순회하기
## 순회(Iteration)이란?

배열, 객체에 저장된 여러개의 값에 순차적으로 접근하는것을 말한다.

## 반복문을 이용한 배열, 객체 순회

### 1. 배열 순회

1-1. 배열 인덱스 출력하기

`for문` 내부에서 `i`를 사용하여 추가적인 작업을 할 수 있다.

1-2. `for of` 반복문
배열을 순회하며 배열의 값을 순차적으로 가져온다.

### 2. 객체 순회

2-1. `Object.keys` 사용

객체에서 key 값들만 뽑아서 새로운 배열로 반환한다.

2-2. `Object.values` 사용

객체에서 value 값들만 뽑아서 새로운 배열로 반환한다.

2-3. `for in` 사용

객체를 순회하며 객체의 key값을 순차적으로 가져온다.
객체의 프로퍼티 존재여부를 확인하는 `in 연산자`를 떠올려 `for of` 와 헷갈리지 않도록 주의한다.