// 단락 평가

let functionTrue = () => {
    console.log('is True');
    return true;
}

let functionFalse = () => {
    console.log('is False');
    return false;
}

// AND 연산에서의 단락 평가

// 단락 평가가 수행되지 않아 첫번째 함수와 두번째 함수 모두 실행된다.
// AND 연산에서 첫번째 피연산자가 true인 경우 두번째 피연산자도 판별해야 하기 때문
// console.log(functionTrue() && functionFalse());

// 단락 평가가 수행되어 두번째 함수는 실행되지 않는다.
// AND 연산에서 첫번째 피연산자가 false인 경우 결과가 false로 확정되기 때문
// console.log(functionFalse() && functionTrue());     

// OR 연산에서의 단락 평가
// 단락 평가가 수행되어 첫번째 함수만 실행된다.
// OR 연산에서 첫번째 피연산자가 true인 경우 결과가 true로 확정되기 때문
// console.log(functionTrue() || functionFalse());

// 단락 평가가 수행되지 않아 두번째 함수도 실행된다. 
// OR 연산에서 첫번째 피연산자가 false인 경우 두번째 피연산자도 판별해야 하기 때문
// console.log(functionFalse() || functionTrue()); 

// 단락 평가의 활용
// 함수의 인수 값을 판별하여 값이 존재하는 경우 이름을, 값이 존재하지 않는 경우 값이 없음 문구를 출력해보자

// 이름 출력 함수
function printName1(person) {
    if(!person) {
        console.log('값이 없음');
        return;
    }
    console.log(person.name);
}

// printName1();
// printName1({name: '민지'});

// 단락 평가를 활용하여 함수 리팩토링
function printName2(person){
    const isName = person && person.name;   // person 객체와 person.name 프로퍼티까지 체크
    console.log(isName || '값이 없습니다');    // 연산 결과값에 따라 값 출력
}

// printName2();
// printName2({name: '민지'});