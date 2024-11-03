// Q2. 0부터 입력 n까지 홀수의 합을 더하는 재귀 함수를 만들어보세요.


function sumOdd(num){
    if(num <= 0) return 0;  // 기저조건

    if(num % 2 === 1){  // 홀수인 경우
        return num + sumOdd(num - 2);   // 다음 홀수를 인자로 재귀함수 호출
    } else {    // 짝수인 경우
        return sumOdd(num - 1); // 다음 홀수를 인자로 재귀함수 호출
    }
}

console.log(sumOdd(10)) // 25
// console.log(sumOdd(5)) // 9

// ------------------------------------------------
// if(num < 0) return 0;
// console.log('num ==> ',num);

// let returnNum = 0;
// if(num % 2 === 1){
//     console.log('홀수임');
//     returnNum = num + sumOdd(num - 2);
// } else {
//     console.log('짝수임');
//     returnNum = sumOdd(num - 1);
// }
// console.log('returnNum ==> ',returnNum);
// return returnNum;