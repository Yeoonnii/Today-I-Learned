// 배열 메서드 3. 배열 변형

// 1. filter
// 기존 배열의 모든 요소를 순회하며,
// filter 메서드에 사용하는 콜백함수의 조건에 해당하는 요소만 필터링하여 새로운 배열로 반환
let personArr = [
    {name: "Nancy", age: 25, gender: "female",},
    {name: "Bob", age: 30, gender: "male",},
    {name: "Catherine", age: 35, gender: "female",},
];

let newPersonArr = personArr.filter((item) => item.gender === 'female');
// console.log(newPersonArr);


// 2. map
// 기존 배열의 모든 요소를 순회하며,
// map 메서드의 콜백함수를 실행하고 그 결과값들을 모아서 새로운 배열로 반환
// 기존 배열을 변형하여 새로운 배열값을 얻을 수 있다.
// map 메서드는 3개의 매개변수가 존재한다.
//     * value : index 번째 배열요소
//     * index : 배열을 순회하는 index
//     * array : 메서드를 수행하는 배열
let numArr = [0, 1, 2];
let numArrResult = numArr.map((item) => item * 2);
// console.log(numArrResult);  // [0, 2, 4]

// ex. map 메서드를 사용하여 personArr의 name 값만 모아서 새 배열로 반환하기
let personArrResult = personArr.map((item) => item.name);
// console.log(personArrResult);   // ['Nancy', 'Bob', 'Catherine']

// ex. map 메서드를 사용하여 personArr중  gender: "female"인 name 값만 모아서 새 배열로 반환하기
let femaleArr = personArr.filter((item) => item.gender === 'female').map((item) => item.name);
// console.log(femaleArr);     // ['Nancy', 'Catherine']


// 3. sort
// 배열을 사전순으로 정렬해준다.
// 메서드 호출시 기존 배열의 정렬을 변경한다. -> 원본 배열을 변경한다.
let arrChar = ['z', 'r', 'd', 'a'];
arrChar.sort();
// console.log(arrChar);   // ['a', 'd', 'r', 'z']

let arrNum = [10, 3, 5];
// console.log(arrNum);   //  [10, 3, 5] -> 사전 순 정렬이기 때문에 숫자의 대소비교 결과로 정렬되지 않는다.

// 숫자를 대소비교하여 정렬하려는 경우
// sort 메서드의 매개변수를 사용하여 콜백함수를 수행하여 정렬한다.
let arrNum2 = [29, 34, 12, 4, 30, 7];

// 오름차순 정렬하기
arrNum2.sort((a, b) => {
    // sort 메서드의 매개변수 a, b는 i, i+1 번째 인덱스의 요소를 가져온다.
    if(a > b) {
        // a > b 인 경우 
        return 1;   // -> 양수를 리턴하면 b, a 순서로 배치한다. = b 가 a 앞에 와라
    } else if (b > a) {
        // b > a 인 경우 
        return -1;  // -> 음수를 리턴하면 a, b 순서로 배치한다. = a 가 b 앞에 와라
    } else {
        // a = b 인 경우
        return 0;   // -> 0을 리턴하면 자리를 바꾸지 않고 그대로 유지한다. = 자리를 바꾸지 마라
    }
    }
);
// console.log(arrNum2);   //  [4, 7, 12, 29, 30, 34] -> 오름차순으로 숫자를 정렬할 수 있다.

// ex. 내림차순으로 정렬하기
arrNum2.sort((a, b) => {
    if(a > b) {
        return -1;
    } else if (b > a) {
        return 1;
    } else {
        return 0;
    }
})
// console.log(arrNum2);   //  [34, 30, 29, 12, 7, 4]

// 4. toSorted (가장 최근에 추가된 최신 함수)
// sort 와 동일한 기능을 하지만 원본 배열을 변경하지 않고,
// 메서드 수행시에 변경된 배열을 새롭게 반환한다. 
let arr3 = ["tiger", "lion", "rabbit", "cat", "puppy"];

let newArr = arr3.toSorted();
console.log(newArr);   //  ['cat', 'lion', 'puppy', 'rabbit', 'tiger']
console.log(arr3);     // ['tiger', 'lion', 'rabbit', 'cat', 'puppy']


// 5. join
// 배열의 모든 요소를 문자열로 합쳐서 반환하는 메서드
// join 메서드 실행시 매개변수로 구분자를 지정할 수 있다. (매개변수 미지정시 기본 구분자는 ',')
let strArr = ['hello', 'im', 'yeoonnii'];
let newStrArr1 = strArr.join(); // hello,im,yeoonnii
console.log(newStrArr1);
let newStrArr2 = strArr.join('*'); // hello*im*yeoonnii
console.log(newStrArr2);
let newStrArr3 = strArr.join(''); // helloimyeoonnii
console.log(newStrArr3);
let newStrArr4 = strArr.join(' '); // hello im yeoonnii
console.log(newStrArr4);