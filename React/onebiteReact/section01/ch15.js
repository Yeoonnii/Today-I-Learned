// 객체 (Object)

// 1. 객체 생성
let newObj1 = new Object();
//console.log(newObj1);     // {}

let newObj2 = {};
console.log(newObj2);       // {}


// 2. 객체 프로퍼티 (객체 속성)
let myPuppy = {
    name    : 'bori',
    age     : 11,
    weight  : '2.3kg' ,
    cute    : true,
    'favorite treats' : 'Dental Treats',
}


// 3. 객체 프로퍼티 다루는 방법
// 3-1. 객체 프로퍼티에 접근하는 방법
// a. 점 표기법
console.log(myPuppy.name);      // bori

// b. 괄호 표기법
console.log(myPuppy['cute']);   // true

// 3-2. 객체 프로퍼티 추가, 수정
// 객체 프로퍼티 추가
myPuppy.color = 'white';
myPuppy['microchipped'] = true;
console.log(myPuppy);      // { age:11, color:"white", cute:true, favorite treats:"Dental Treats", microchipped:true, name:"bori", weight:"2.3kg"}

// 객체 프로퍼티 수정
myPuppy.weight = '2.5kg';
myPuppy["favorite treats"] = 'Puppy Biscuits';
console.log(myPuppy);      // { age:11, color:"white", cute:true, favorite treats:"Puppy Biscuits", microchipped:true, name:"bori", weight:"2.5kg"}

// 3-3. 객체 프로퍼티 삭제 (delete 키워드)
delete myPuppy.weight;
console.log(myPuppy);      // { age:11, color:"white", cute:true, favorite treats:"Puppy Biscuits", microchipped:true, name:"bori"}


// 3-4. 객체 프로퍼티 존재 유무 확인 (in 연산자)
let result = 'age' in myPuppy;
console.log(result);        // true

