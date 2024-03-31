// Truthy 와 Falsy
// javascript는 true/false값이 아닌 값을 조건문에서 true/false 값으로 판별하는 경우가 있다.
// Truthy 와 Falsy를 사용하면 조건문을 간결하게 작성할 수 있다.

// 1. Falsy 한 값 : false가 아니지만 조건식에서 false 값으로 판별되는 값.
let f1 = undefined;
let f2 = null;
let f3 = NaN;
let f4 = ""; // 빈 문자열
let f5 = -3; // 음수
let f6 = 0; // 0
let f7 = 0n; // BigInt 타입 : 큰 수를 담을 때 사용한다.

// 2. Truthy 한 값 : true가 아니지만 조건식에서 true 값으로 판별되는 값.
// Falsy 값 7개를 제외한 나머지 값은 다 Truthy 값이다.
let t1 = "str"; // 문자열
let t2 = 123; // 양수
let t3 = []; // 빈 배열
let t4 = {}; // 빈 객체
let t5 = function () {}; //  함수

if (t5) {
  console.log("Truthy!");
} else {
  console.log("Falsy!");
}

// 3. 활용 사례 -> 접근하려는 객체의 Falsy 값을 판단하는 경우
// 각각의 boolean Type을 작성하는것 보다 Falsy 값으로 판별하면 간결한 조건문을 작성할 수 있다.
let person = {
    name: '김철수',
    age: 22,
}

function getName (name) {
    console.log('안녕하세요 저는', name, '입니다.');
}


// 3-1. boolean Type 별로 조건식을 작성
function getName1 (name) {
    if(person.names === undefined || person.names === null || person.names === '' ) {
        // undefined, null, 빈 문자열인 경우 체크
        // 다른 falsy 조건이 추가되면 조건문이 길어진다.
        console.log('param Error');
        return;
    }
    console.log('안녕하세요 저는', name, '입니다.');
}

getName1(person.names);  // param Error

// 3-2. Falsy 값으로 조건식 작성
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