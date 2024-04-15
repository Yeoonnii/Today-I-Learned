// 1-2. require를 이용하여 모듈의 경로를 인수로 전달하여 반환받아 사용이 가능하다.
// const { add, sub } = require('./math.js') ;

// 2-4. import 키워드 + 가져올 값을 명시 + from 키워드 + 모듈을 가져올 경로 + 확장자
// import { add, sub } from './math.js'

// 2-5. 대표 기본값으로 내보내진(export default) 함수는 다른 모듈에서 중괄호 없이 import 하여 사용가능하다.
// import multiply from "./math.js";

// 2-6. 동일한 경로로 부터 값을 불러오는 여러개의 import 문은 합쳐서 사용하는것도 가능하다.
import multiply, { add, sub } from "./math.js";

console.log("안녕 node.js");
console.log(add(3,4));
console.log(sub(9,5));
console.log(multiply(9,5));

// 라이브러리 사용하기

// import , export 사용하기