// Spread 연산자
// 객체나 배열에 저장된 데이터를 개별 값으로 흩뿌려준다.

// 배열1을 배열2의 중간에 포함하기
let arr1 = [0, 1, 2];
let arr2 = [3, ...arr1, 4, 5];
console.log('arr2 ===>');
console.log(arr2);  // [3, 0, 1, 2, 4, 5]

// 객체1의 프로퍼티를 객체2의 프로퍼티 중간에 포함하기
let obj1 = {
    one : '1',
    two : '2',
    three : '3',
};
let obj2 = {
    a : 'a',
    b : 'b',
    ...obj1,
    c : 'c',
};
console.log(obj2);

// 함수 호출시 배열에 저장된 값을 풀어서 전달하기
function func1(first, second, third) {
    console.log(first);     // 0
    console.log(second);    // 1
    console.log(third);     // 2
};

func1(...arr1);

// 함수 호출시 객체에 저장된 값을 풀어서 전달하는건 불가능하다.
function func0(strA, strB, strC) {
    console.log(strA);     // 0
    console.log(strB);    // 1
    console.log(strC);     // 2
};

func0(...obj1); // Uncaught TypeError: Spread syntax requires ...iterable[Symbol.iterator] to be a function

// Rest 매개변수
// rest = 나머지
// 여러개의 개별 데이터를 매개변수로 받을 때 배열에 담아서 받는 것

// 여러개의 데이터를 매개변수로 받아올 때 배열로 받기
function func2(...rest) {
    console.log(rest);  // ['서울', '부산', '제주']
}
func2('서울', '부산', '제주');


// 여러개의 데이터를 매개변수로 받아올 때 
// 첫번째, 두번째 매개변수는 개별데이터로, 나머지 매개변수는 배열에 받기
function func3(firstFavorite, secondFavorite,  ...others) {
    console.log(firstFavorite);     // 딸기
    console.log(secondFavorite);    // 사과
    console.log(others);            // ['토마토', '체리']
}
func3('딸기', '사과', '토마토', '체리');



// 주의점
// Rest 매개변수를 받을 때 rest매개변수를 제일 마지막에 사용해야 한다.
// rest 매개변수 이후 다른 변수명을 개별로 받아올 수 없다.
// function func4(top1, ...others, top2) {     // Rest parameter must be last formal parameter
//      console.log(firstFavorite);
// }
// func4('강아지', '고양이', '햄스터', '금붕어')
