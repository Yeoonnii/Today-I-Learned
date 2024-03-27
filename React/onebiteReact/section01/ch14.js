// 스코프(Scope)
// - 전역 스코프 : 전체 범위에서 접근, 호출 가능
// - 지역 스코프 : 일정 범위 내에서만 접근, 호출 가능

const a = 1;    // 전역 스코프를 갖는다.

function funcA () {
    const b = 2;    // 지역 스코프를 갖는다.
    console.log(b) ;
    
    // 지역 스코프를 갖는다.
    function funcB() {
        const c = 3;   // 지역 스코프를 갖는다.
        console.log(c) ;
    }
}

if(true) {
    let d = 4;   // 지역 스코프를 갖는다.
}

for(let i=0; i<=4; i++){
    let e = 5;   // 지역 스코프를 갖는다.
}

// 변수가 갖는 스코프의 범위 밖에서 변수를 호출하려는 경우 오류가 발생한다.
console.log(e);     // Uncaught ReferenceError: e is not defined
