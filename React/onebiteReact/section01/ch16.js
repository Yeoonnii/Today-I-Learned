// 객체 (Object) 2
// 상수 객체
const animal = {
    type: "고양이",
    name: "나비",
    color: "black"
}

console.log(animal);
// 기존 객체를 다른 객체로 변경하는것은 불가능 하다.
// animal = {cute: true};
// console.log(animal);    // Uncaught TypeError: Assignment to constant variable.

// 상수객체 자체의 변경은 불가하지만 객체의 속성은 추가, 변경 삭제가 가능하다.
animal.name = "점순이"
animal.color = "mixed";
animal.cute = true;
console.log(animal);    // {type: '고양이', name: '점순이', color: 'mixed', cute: true}



// 메서드
// 객체 프로퍼티 값이 함수인 것
const person = {
    name: '김철수',
    age: 22,
    // 메서드 값에 익명함수 사용하기
    sayHi: function(){
        console.log('안녕하세요!');
    },
    // 메서드 값에 화살표 함수 사용하기
    sayBye: () => {
        console.log('안녕히계세요~');
    },
    // 메서드 선언하기
    askName() {
        console.log('이름이 뭐에요?');
    }
}
// 메서드는 점표기법, 괄호표기법으로 호출이 가능하다.
person.sayHi();         // 안녕하세요!
person['sayHi']();      // 안녕하세요!
person.sayBye();        // 안녕히계세요~
person.askName();       // 이름이 뭐에요?