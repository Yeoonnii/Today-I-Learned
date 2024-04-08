// 배열 메서드 1. 요소 조작

// 1. push
// 배열 끝부분에 값을 추가한다.
// push 메서드 실행 후 배열의 총 길이를 반환한다.
let arr1 = [0, 1, 2, 3];

let arrPush = arr1.push(4, 5, 7, 8);
// console.log(arrPush);
// console.log(arr1);

// 2. pop
// 배열 끝부분에 값을 제거한다.
// pop 메서드 실행 후 추출한 값을 반환환다. 
let arr2 = [4, 5, 6, 7, 8, 9, 10];
let arr2Pop = arr2.pop();
// console.log(arr2Pop);
// console.log(arr2);

// 3. shift
// 배열 첫번째 자리에 값을 제거한다.
// 값 제거 후 배열을 반환한다.
let arr3 = [4, 5, 6, 7, 8];
let result = arr3.shift();
console.log(result);
console.log(arr3);

// 4. unshift
// 배열 첫번째 자리에 값을 추가한다.
// 값 추가 후 배열의 길이를 반환한다.
let arr4 = [0, 1, 2, 3];
let arr4Unshift = arr4.unshift(9);
console.log(arr4);
console.log(arr4Unshift);


// 5. slice
// 시작인덱스 ~ 종료인덱스 까지의 배열을 자른다.
// 메서드 수행 후 결과 배열을 반환한다.
let arr5 = [1, 2, 3, 4, 5, 6];
let sliceResult1 = arr5.slice(3, 6);   // slice(시작 인덱스, 종료 인덱스 + 1) 
let sliceResult2 = arr5.slice(4);   // 시작 인덱스만 적어준 경우 종료 인덱스 까지 자른다. 
console.log(sliceResult1);
console.log(sliceResult2);


// 6. concat
// 배열을 합쳐준다.
// 메서드를 수행한 배열 다음으로 메서드 수행시 매개변수로 넣어준 배열을 붙여준다.
let arr6 = [3, 4, 5];
let arr7 = [6, 7, 8, 9];
let resultConcat = arr6.concat(arr7);
console.log(resultConcat);