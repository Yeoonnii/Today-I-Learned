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