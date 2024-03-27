// 콜백 함수
// 다른 함수에 인수로 전달된 함수
function main(value) {
    value();
}

function sub() {
    console.log('sub');
}

main(sub);  // sub

// 먼저 선언된 함수나 인수에서 선언한 함수를 매개변수에 전달할 수 있다.
// 인수에 선언하는 함수는 기본 함수, 함수표현식, 화살표 함수 형식을 사용할 수 있다.

// a. 함수 -> 콜백 함수
function main2(num, func) {
    func(num);
}

function funcDouble(num) {
    console.log(num * 2);
}


function funcTriple(num) {
    console.log(num * 3);
}

main2(5,funcDouble);   // 10
main2(9,funcTriple);   // 27

// b. 함수 표현식 (익명함수) -> 콜백 함수
main2(3, function (num) {
    console.log('anonymous function = ', num);    // anonymous function =  3
});

// c. 화살표 함수 -> 콜백 함수
main2(6, (num) => {
    console.log('arrow function = ', num);    // arrow function =  6
})


// 인수로 받은 count 만큼 반복문으로 console 출력
// 콜백함수에 따라 2배수, 3배수로 출력값 증가

function count (num, func) {
    for(let i=1; i<=num; i++){
        func(i);
    }
}

count(4, (input) => {
    console.log(input * 2);
});

count(8, (input) => {
    console.log(input * 3);
});