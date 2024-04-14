// Promise 객체
// 비동기 작업을 효율적으로 처리할 수 있도록 도와주는 자바스크립트의 내장 객체이다.
// 비동기 작업들을 래핑하여(감싸서) 비동기 작업을 하는데 필요한 모든 기능을 다 제공해준다.

// Promise의 3가지 상태
// 비동기 작업의 진행 상태에 따라 3가지 상태로 나눈다.

// Promise 객체 생성하기
const promise1 = new Promise((resolve, reject) => {
    // 비동기 작업을 실제로 실행하는 함수 -> executor
    // executor 함수에는 2가지 매개변수가 존재한다.
    // - resolve : resolve 함수 호출 시 promise의 비동기 작업이 성공 상태로 변경된다. resolve 함수의 매개변수로 PromiseResult에 성공 결과값을 전달할 수 있다.
    // - reject : reject 함수 호출 시 promise의 비동기 작업이 실패 상태로 변경된다. reject 함수의 매개변수로 PromiseResult에 실패 결과값을 전달할 수 있다.

    setTimeout(() => {
        console.log('안녕');
        // resolve('success');
        reject('failed');
    }, 1500)
});

setTimeout(() => {
    console.log(promise1);
}, 3000);

// Promise 객체 활용하기
// 비동기 함수에서 변수타입에 따라 PromiseResult 반환하기
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // const num = 10;
    const num = null;

    if (typeof num === "number") {
      // 변수의 타입이 숫자인 경우
      resolve(num + 10);
    } else {
      reject("num is NaN");
    }
  }, 2000);
});

setTimeout(() => {
    console.log(promise2);
}, 2000)

// PromiseResult 값 사용하기
// 1. promise 객체의 then() 메서드
// then 메서드의 콜백함수는 execute 함수에서 resolve가 호출되는 경우, 즉 성공한 경우에만 실행된다.
// resolve의 결과값(PromiseResult)을 then()의 매개변수로 사용할 수 있다.
promise.then((value) => {
    console.log('promise.then --> ', value);
})

// 2. promise 객체의 catch() 메서드
// catch 메서드의 콜백함수는 execute 함수에서 reject가 호출되는 경우, 즉 실패한 경우에만 실행된다.
// reject의 결과값(PromiseResult)을 catch()의 매개변수로 사용할 수 있다.
promise.catch((error) => {
    console.log('promise.catch --> ', error);
})

// 프라미스 체이닝(promise chaining)
// 프라미스 체이닝은 result가 .then()의 체인(사슬)을 통해 전달된다는 뜻이다.
// promise의 then() 메서드는 원본 promise 객체를 반환하기 때문에 promise.then().catch() 형태로 이어서 사용가능하다.
promise.then((value) => {
    console.log('promise.then --> ', value);
}).catch((error) => {
    console.log('promise.catch --> ', error);
})

// 동적으로 Promise 객체와 매개변수 사용하기
function add10(num) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof num === "number") {
        // 변수의 타입이 숫자인 경우
        resolve(num + 10);
      } else {
        reject("num is NaN");
      }
    }, 2000);
  });
  return promise;
}

// // add10()은 Promise 객체를 반환한다.
// const p = add10(2);
// p.then((result) => {
//     console.log('const p -> ', result);
// })

// promise 작업의 결과를 또 다른 비동기 작업의 인수로 전달하려는 경우
// 콜백 지옥을 피하기 위해 promise 객체에서는 새 promise 객체를 반환할 수 있다.
add10(2)
  .then((promiseResult1) => {
    console.log(promiseResult1); // 12
    return add10(promiseResult1);
  })
  .then((promiseResult2) => {
    // 두번째로 실행되는 then은 원본 promise가 아닌 새롭게 반환된 promise 결과로 실행된다.
    console.log(promiseResult2); // 22
    // return add10(promiseResult2);
    return add10(null); // catch 메서드 테스트용
  })
  .then((promiseResult3) => {
    console.log(promiseResult3); // 32
    return add10(promiseResult3);
  }).catch((error) => {
    // 오류가 발생시 then 메서드의 위치와 관계 없이 모두 catch() 메서드에서 오류에 대한 작업을 수행한다.
    console.log(error);
  });
