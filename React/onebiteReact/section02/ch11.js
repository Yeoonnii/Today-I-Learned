console.log(1);

// 자바스크립트의 비동기 함수 setTimeout
setTimeout(()=>{
    // 1 출력 후 setTimeout 함수가 실행되고 2가 출력된다.
    // setTimeout 함수 실행 후 5초 뒤 setTimeout의 콜백함수가 실행되어 'setTimeout execute!' 이 출력된다.
    console.log('setTimeout execute!');
}, 5000);

console.log(2);