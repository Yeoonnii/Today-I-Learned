// 묵시적 형 변환 (암묵적 형 변환)
let num1 = 12; // number type
let str1 = "입니다."; // string type
let result = num1 + str1;
// console.log(result);    // 12입니다. --> string type

// 명시적 형 변환
// ex1) 문자열 -> 숫자
let str2 = "99";
let str2ToNum = Number(str2);
// console.log(str2ToNum);  // 99  --> number type

// ex2) 문자열 -> 숫자
let str3 = "10입니다.";
let str3ToParseInt = parseInt(str3);
// console.log(str3ToParseInt); // 10 --> number type

let str4 = "이 숫자는 10입니다.";
let str4ToParseInt = parseInt(str4);
// console.log(str4ToParseInt); // NaN --> 형 변환 실패

// 숫자 -> 문자열
let num2 = 23425;
let num2ToStr = String(num2);
// console.log(num2ToStr + "입니다."); // 23425입니다. --> string type
