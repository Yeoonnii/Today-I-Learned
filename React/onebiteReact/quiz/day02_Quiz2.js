// Quiz 2.
// 다음 요구사항을 만족하는 코드를 작성하세요

// 변수 a의 저장된 값의 타입을 문자열로 출력하세요
// 조건문과 typeof 연산자를 이용해 코드를 작성하세요

const a = true;

switch (typeof a) {
  case "string":
    console.log("typeof a : string");
    break;
  case "number":
    console.log("typeof a : number");
    break;
  case "boolean":
    console.log("typeof a : boolean");
    break;
  case "null":
    console.log("typeof a : null");
    break;
  case "undefined":
    console.log("typeof a : undefined");
    break;
  case "Object":
    console.log("typeof a : Object");
    break;
  default:
    console.log("typeof a : ", typeof a);
    break;
}
