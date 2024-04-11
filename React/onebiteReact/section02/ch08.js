// 배열 메서드 2. 순회와 탐색

// 1. forEach
// 배열의 모든 요소를 순회하면서, 각각의 요소 순회시마다 특정 동작(콜백 함수)을 수행하는 메서드
let arr1 = [1, 2, 3];
arr1.forEach(function(value, index, array) {
    // forEach 내부에 사용하는 함수에는 아래의 매개변수가 온다.
    // * value : index 번째 배열요소
    // * index : 배열을 순회하는 index
    // * array : 메서드를 수행하는 배열

    // console.log('index : ',index, ', value : ',value, ', array : ', array);
    // index :  0 , value :  1 , array :  (3) [1, 2, 3]
    // index :  1 , value :  2 , array :  (3) [1, 2, 3]
    // index :  2 , value :  3 , array :  (3) [1, 2, 3]
})

let doubledArr = [];
let arr2 = [0, 1, 2, 3, 4];
arr2.forEach((item) => {
    doubledArr.push(item * 2);
})
// console.log(doubledArr);

// 2. includes
// 배열에 특정 요소가 있는지 반환하고, 존재하면 true / 존재하지 않으면 false 반환하는 메서드
let arr3 = [1, 2, 3];
let isIncludes = arr3.includes(4);
// console.log(isIncludes);    // false

// 3. indexOf
// 3-1. 배열에 특정요소가 존재하는 경우 해당 요소의 index를 반환하는 메서드
// 3-2. 존재하는 인덱스가 여러개인 경우 0번 인덱스에서 제일 가까운 인덱스를 반환한다.
// 3-3. 존재하지 않는 요소인 경우 -1을 반환한다.

// 3-1.
let arr4 = ['a', 'b', 'c'];
let index1 = arr4.indexOf('b');
// console.log(index1);     // 1

// 3-2. 
let arr5 = ['c', 'a', 'b', 'c'];
let index2 = arr5.indexOf('c');
// console.log(index2);    // 0

// 3-3.
let arr6 = ['A', 3, 'f', 9];
let index3 = arr6.indexOf('i');
// console.log(index3);    // -1


// 4. findIndex
// 배열의 모든 요소를 순회하며, 콜백함수를 실행하고 함수의 결과값을 true로 만들어 주는 요소의 index를 반환한다.
// 함수의 결과값을 true로 만들어주는 요소가 없는 경우 -1을 반환한다.
let arr7 = [1, 2, 3];
let findIndex1 = arr7.findIndex((value) => {
    return value % 2 === 0
})
// 아래와 return 값을 생략하여 간결하게 함수를 작성할 수도 있다.
let findIndex2 = arr7.findIndex((value) => value === 999)
// console.log(findIndex1); // 1
// console.log(findIndex2); // -1


// indexOf 와 findIndex의 차이
// indexOf는 동등연산자(===)를 이용한 얕은 비교만 가능하다. <-> 객체 프로퍼티 비교는 불가
// findIndex를 사용하여 객체의 프로퍼티 값을 비교하는 깊은 비교를 할 수 있다.
let objArr1 = [
    {name: "제니"},
    {name: "로제"},
];

let result1 = objArr1.indexOf({name: "로제"});
// console.log(result1);   // -1
let result2 = objArr1.findIndex((item) => item.name = "로제");
// console.log(result2);   // 0


// 5. find
// 모든 요소를 순회하며 콜백 함수를 만족하는 요소를 그대로 반환한다.
let objArr2 = [
    {name: '보리'},
    {name: '코코'},
    {name: '나비'},
]
let findObj = objArr2.find((item) => item.name === '나비');
console.log(findObj);   // {name: '나비'}