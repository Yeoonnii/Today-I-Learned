// 1. null 병합 연산자
// 변수1 ?? 변수2 형태로 사용한다.
// 두 변수를 비교하여 null 또는 undefined 이 아닌 값을 반환한다.
// 두 변수 모두 null, undefined 가 아닌 경우 첫번째에 쓰인 변수를 반환한다.
let var1;       // undefined
let var2 = 10;
let result1 = var1 ?? var2; // undefined ?? 10
console.log(result1);       // 10;

let var3 = 20;
let result2 = var3 ?? var2; // 20 ?? 10
console.log(result2);       // 20;

// 2. typeof 연산자
// typeof + 변수 형태로 사용하며 변수의 타입을 문자열로 반환한다.
let num = 10;
console.log(typeof num);    // number

let str = 'Hello';
console.log(typeof str);    // string

// 3. 삼항 연산자
// 조건식 ? 참인경우의 값 : 거짓인경우의 값 형태로 사용한다.
// 조건식의 결과에 따라 각각 반환되는 값이 다르다.
let conditionNum = 7;
let result = (conditionNum % 2) === 0 ? '짝수' : '홀수';
console.log(result);        // 홀수
