// async 키워드
// 어떤 함수를 비동기 함수로 만들어주는 키워드
// promise를 사용하지 않는 함수를 Promise 반환하도록 변환해준다.

async function getData1() {
    return {
        name: "김영희",
        age: "20"
    }
}

// async 키워드 사용시 함수에서 Promise를 사용하지 않는경우 
// return 값을 PromiseResult로 갖는 Promise 객체가 반환된다.
console.log(getData1());
// [[Prototype]]: Promise
// [[PromiseState]]: "fulfilled"
// [[PromiseResult]]: Object
//     age: "20"
//     name: "김영희"
// [[Prototype]]:Object

// await 키워드
// async 함수 내부에서만 사용 가능
// 비동기 함수가 다 처리되기를 기다리는 역할을 한다.
// await 키워드는 반드시 async 키워드와 함께 사용해야 한다.
// await 키워드를 사용하면 promise의 then 메서드를 사용하여 PromiseResult에 접근하지 않아도 된다.
// await 키워드는 promise 가 종료되길 기다린 후 PromiseResult를 반환한다.
async function printData() {
    const data = await getData1();
    console.log(data);
}

printData();    // {name: '김영희', age: '20'}