// 구조 분해 할당

// 1. 배열의 구조 분해 할당
let arr = ["a", "b", "c"];
// let [first, second, third] = arr;
// console.log(first);  // a
// console.log(second); // b
// console.log(third);  // c

// 배열 구조 분해 할당시 존재하지 않는 값에 접근 하는 경우
// let [first, second, third, fourth] = arr;
// console.log(fourth);   // undefined

// 배열 구조 분해 할당시 존재하지 않는 변수 초기 값 할당
let [first = "first Str", second, third, fourth = 'd'] = arr;
console.log(first);     // 이미 해당 인덱스에 값이 존재하면 존재하는 값을 리턴한다.
console.log(fourth);    // 인덱스에 값이 존재하지 않는 경우 할당된 초기값이 출력된다.

// 2. 객체의 구조 분해 할당
let person = {
    name: '여니',
    age: 99,
    hobby: '사진찍기'
};

// let {name, age, hobby} = person;

// console.log(name);   // 여니
// console.log(age);    // 99
// console.log(hobby);  // 사진찍기

// 객체 구조 분해 할당시 존재하지 않는 변수에 접근하는 경우
// let {name, age, hobby, favorite} = person;
// console.log(favorite);      // undefined

// 객체 구조 분해 할당시 변수 초기값 할당
// let {name, age, hobby, favorite = "unKnown"} = person;
// console.log(favorite);      // unKnown (구조 분해 할당시 설정한 초기값이 반환된다.)


// 객체 구조 분해 할당시 변수명 변경
let {name: myName, age, hobby} = person;
console.log(myName);     // 여니

// 값 참조로 인해 빈 문자열 출력 
// 객체 구조 분해 할당 시 변수명 변경을 하면 값 복사를 하지 않고 기존 변수에 대한 참조를 만든다.
console.log(name);       // ''


// 3. 객체 구조 분해 할당을 이용하여 함수의 매개변수를 받는 방법
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