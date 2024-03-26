// 함수

// function gugudan(firstNum, secondNum) {
//     let result = firstNum * secondNum;
//     console.log(result);
// }

// gugudan(9,8);

// function gugudan(firstNum, secondNum) {
//     let result = firstNum * secondNum;
//     return result;
// }

// let resultNum = gugudan(4,8);
// console.log(resultNum);   // 72

// 중첩 함수
function gugudan(firstNum, secondNum) {
  let result = firstNum * secondNum;

  console.log(isEven(result));

  // 중첩 함수 사용
  function isEven(result) {
    return result % 2 === 0;
  }
}

gugudan(3,7);
