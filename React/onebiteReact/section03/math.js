function add(a, b) {
    return a + b;
};

function sub(a, b) {
    return a - b;
}

// 1. CJS (Common JS) 모듈 시스템 사용하기
// 1-1. module 객체의 export 메서드로 내보낸다.
// 내보낼 key, value 값이 동일한 경우 변수값만 적어도 된다. 
module.exports = {
    add: add,
    sub: sub
}


// 2. ESM (ES 모듈 시스템) 사용하기
// 2-1. package.json 에 “type”:”module” 옵션을 추가해 줘야 한다.
// 2-2. export 키워드 뒤에 객체를 리터럴로 생성해서 내보내고 싶은 값을 담아주면 된다.
// 2-3. export 키워드를 별도로 사용해도 되지만, 함수선언문 앞에 export 키워드를 사용해도 된다.
export {
    add, sub
}

// 2-5. 하나의 모듈을 대표하는 default 값을 내보낼 수도 있다.
// export default 키워드가 붙은 함수는 math 모듈을 대표하는 기본값이 된다.
// 대표 기본값으로 내보내진(export default) 함수는 다른 모듈에서 중괄호 없이 import 하여 사용가능하다.
export default function multiply(a, b) {
    return a * b;
}