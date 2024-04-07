// 1. 배열 순회

// 1-1. 배열 인덱스 출력하기
// for 문 내부에서 i를 사용하여 추가적인 작업을 할 수 있다.
let arr = [0, 1, 2, 3];
// console.log('안녕');
// console.log('arr length -> ', arr.length);
for(let i=0; i<arr.length; i++){
    // console.log(arr[i]);
}

// 1-2. for of 반복문
// 배열을 순회하며 배열의 값을 순차적으로 가져온다.
for(let item of arr){
    // console.log('item is ',item);
}


// 2. 객체 순회
let obj1 = {
    one : 'A',
    two : 'B',
    three : 'C',
};

// 2-1. Object.keys 사용
// 객체에서 key 값들만 뽑아서 새로운 배열로 반환
let keys = Object.keys(obj1);
// console.log(keys);  //  ['one', 'two', 'three']
for(let item of keys){
    const value = obj1[item];
    // console.log(item, value);
}

// 2-2. Object.values
// 객체에서 value 값들만 뽑아서 새로운 배열로 반환
let values = Object.values(obj1);
for(let item of values){
    // console.log(item);
}

// 2-3. for in
// 객체를 순회하며 객체의 key값을 순차적으로 가져온다.
// 객체의 프로퍼티 존재여부를 확인하는 in 연산자를 떠올려 'for of' 와 헷갈리지 않도록 주의한다.
for(let item in obj1){
    let value = obj1[item];
    console.log(item, value);
}
