// String Type (템플릿 리터럴 문법)
let myName = "yeoonnii";
let today = "3월17일";

let sentence = `안녕하세요 ${myName}님! 오늘은 ${today}입니다.`;
console.log(sentence); // 안녕하세요 yeoonnii님! 오늘은 3월17일입니다.

// undefined
let none;
console.log(none); // undefined
console.log(notExistConst); // Uncaught ReferenceError: notExistConst is not defined
