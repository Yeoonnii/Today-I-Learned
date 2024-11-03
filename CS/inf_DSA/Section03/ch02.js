// ch02. 재귀적으로 생각하기
// 패턴 1. 반복실행

// 1) for문 사용
// for(let i = 1; i < 11; i ++){
//     console.log(i);
// }

// 2) 재귀함수 사용
function myFunction(num) {
    if(num > 10) return;    // 기저 조건
    console.log(num);
    myFunction(num + 1);
}
myFunction(1);  // 재귀함수 호출