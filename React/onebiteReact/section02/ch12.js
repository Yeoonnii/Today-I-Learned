// 콜백함수

// 1. 비동기 함수 사용하기
// function task() {
//     setTimeout(() => {
//         console.log('안녕하세요');
//     }, 2000);
// };

// task();

// 2. 비동기 작업에서 콜백함수 호출하기
// function add(a, b, messageFunc) {
//     setTimeout(() => {
//         const sum = a + b;
//         messageFunc(sum);
//     }, 1500)
// }

// // 비동기 작업을 하는 함수의 결과값을 함수 외부에서 이용하고 싶은 경우
// // 콜백 함수를 전달하여 비동기 함수 내부에서 콜백함수를 호출하도록 하면 된다.
// add(125, 30, (value)=> {
//     console.log(`합계는 ${value}`);
// });

// 3. 비동기 작업 + 콜백함수 예제
// a. 음식을 주문하는 상황
function orderFood(callbackFunc) {
  setTimeout(() => {
    const food = "떡볶이";
    callbackFunc(food);
  }, 2000);
}

// b. 음식을 식히는 상황
function cooldownFood(food, callbackFunc) {
  setTimeout(() => {
    const cooldownedFood = `식은 ${food}`;
    callbackFunc(cooldownedFood);
  }, 1500);
}

// c. 음식을 냉동하는 상황
function freezeFood(food, callbackFunc) {
  setTimeout(() => {
    const freezedFood = `냉동된 ${food}`;
    callbackFunc(freezedFood);
  });
}

orderFood((value) => {
  console.log(`Print Console in orderFood() => ${value}`);  // 떡볶이

  // food 는 orderFood() 내부 비동기 함수에 존재하는 값이기 때문에
  // food를 사용하려면 orderFood() 콜백함수 내부에서 cooldownFood()를 호출해주어야 한다.
  cooldownFood(value, (value2) => {
    console.log(`Print Console in cooldownFood() => ${value2}`);    // 식은 떡볶이
    
    // cooldownedFood는 cooldownFood() 내부 비동기 함수에 존재하는 값이기 때문에
    // cooldownedFood를 사용하려면 freezeFood() 콜백함수 내부에서 freezeFood()를 호출해주어야 한다.
    freezeFood(value2, (value3) => {
        console.log(`Print Console in freezeFood() => ${value3}`);  // 냉동된 식은 떡볶이
    })
  });
});

// 콜백 지옥
// 위와 같이 콜백함수를 이용하여 받아온 비동기 작업의 결과를 또 다른 비동기 작업의 인수로 넣어주는 코드가 반복이 되어 콜백함수 안에서 계속 함수를 호출하게 되는 형태
// indent(= 들여쓰기)가 깊어지는 형태의 코드로 진화하게 된다.

