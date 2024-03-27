// 1. 함수 표현식

// 일반적인 함수 선언
function funcA() {
  console.log("funcA");
};

// 함수 표현식으로 함수 선언
// 변수에 함수를 대입한다. 변수에 담긴 함수는 값으로 취급된다.
// 대입하는 함수는 변수 대입시 선언해도 되고, 먼저 선언 후 해당 함수를 대입해도 된다.

// 변수 대입시 함수 선언한 경우
let var1 = function funcB() {
  console.log("funcB");
};

// 이미 선언된 함수를 변수에 대입하는 경우
let var2 = funcA;

var1();     // funcA
var2();     // funcB

// 변수 대입시 함수를 선언하는 경우 해당 함수는 변수명으로 호출해야 한다. (선언한 함수명으로 호출이 불가능 하다.)
let var3 = function funcC() {
  console.log("funcC");
};

// var3();     // funcC
// funcC();    // Uncaught ReferenceError: funcC is not defined

// 익명함수
// 변수 대입시 함수를 선언하는 경우 함수명을 생략할 수도 있다.
// 익명함수는 변수명으로 호출한다.
let var4 = function () {
  console.log("Anonymous function");
};

var4();     // Anonymous function

// 함수 표현식에서의 호이스팅
// 함수가 먼저 선언된 후 변수에 담겨있다면 호이스팅이 적용되지만,
// 변수 대입시 함수를 선언하는 경우 호이스팅이 불가능 하다.

// 선언된 함수를 변수에 대입 = 호이스팅 가능
let var5 = hoistFuncA();    // hoistFuncA

function hoistFuncA() {
  console.log("hoistFuncA");
};

// 변수 대입시 함수를 선언 = 호이스팅 불가능
// hoistFuncB();   // Uncaught ReferenceError: hoistFuncB is not defined

let var6 = function hoistFuncB() {
  console.log("hoistFuncB");
};


// 2. 화살표 함수
// 화살표 함수를 사용하면 기존보다 더 간결하게 함수를 작성할 수 있다.
let arrFunc1 = () => {
    console.log('arrFunc');
};

arrFunc1();     // arrFunc

// 여러줄의 기능을 수행하지 않는 경우 화살표 함수의 중괄호를 생략할 수 있다.
let arrFunc2 = (value) => value * 2;

console.log(arrFunc2(9));   // 18
