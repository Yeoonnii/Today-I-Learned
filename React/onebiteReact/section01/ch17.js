// 배열
// 순차적으로 값을 저장할 수 있는 자료형

// 배열 생성
let arr1 = new Array();
let arr2 = [];

console.log(arr1);
console.log(arr2);

// 배열에 값 넣기
// 기본 원시타입 데이터, 객체, 새로운 배열, 함수 등 원하는 값을 넣을 수 있다.
let arr3 = [
    1,
    3.3,
    {},
    false,
    [],
    (() => {

    }),
    function() {

    },
    'String'
];

// 배열에 접근하기
// `배열명[인덱스]`를 사용하면 인덱스에 해당하는 배열의 요소값을 반환한다.
// 배열의 요소는 index 를 사용하여 접근이 가능한데 index는 배열의 첫번째 요소를 0으로 취급한다.
// 존재하지 않는 배열의 요소에 접근하면 undefined를 반환한다.
console.log(arr3[0]);   // 1 = 배열의 첫번째 요소
console.log(arr3[8]);   //  undefined = 존재하지 않는 요소

// 배열 값 수정하기
arr3[0] = 'hello';
console.log(arr3);      
//  ['hello', 3.3, {…}, false, Array(0), ƒ, ƒ, 'String'] => 배열의 첫번째 요소가 'hello'로 바뀌었다.

// 배열 값 삭제하기
delete arr3[2];
console.log(arr3);     
// ['hello', 3.3, empty, false, Array(0), ƒ, ƒ, 'String'] => 배열의 세번째 요소가 삭제되어 empty로 바뀌었다.