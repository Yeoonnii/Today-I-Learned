// 1. Date 객체를 생성하는 방법

// 생성자 사용하기
let date = new Date();
// console.log(date);

// 날짜와 시간 지정하여 Date 객체 생성하기
// 년, 월, 일 설정하기
let myDate = new Date("2024-01-23");
// console.log(myDate);

// 시간 설정하기
let myDate2 = new Date("2024-01-23 01:01:23");
// console.log(myDate2);   // Tue Jan 23 2024 01:01:23 GMT+0900 (한국 표준시)


// 2. 타임 스탬프
// 복잡한 시간 정보를 숫자로 나타내기 때문에 자주 사용이 된다.
// 특정 시간이 "1970.01.01 00시 00분 00초"(UTC) 로부터 몇 ms가 지났는지를 의미하는 숫자값
// Date 객체에 .getTime() 메소드를 사용하면 타임스탬프 값을 반환한다.
let tsVal = myDate2.getTime();
// console.log(tsVal); // 1705939283000

// 생성자를 사용하여 Date 객체 생성시 타임스탬프 값을 넣으면 Date 객체를 생성할 수 있다.
let convertDate = new Date(tsVal);
// console.log(convertDate);   // Tue Jan 23 2024 01:01:23 GMT+0900 (한국 표준시)


// 3. 시간요소(날짜,시간)들을 추출하는 방법
// getMonth() 메서드로 month 값 추출시 반환하는 month 값은 index 값과 같기 때문에 1을 추가해주어야 한다.

// 3-1. 날짜 추출
let year = myDate2.getFullYear();
let month = myDate2.getMonth() + 1;
let day = myDate2.getDate();

// console.log(year);
// console.log(month);
// console.log(day);

// 3-2. 시간 추출
let hours = myDate2.getHours();
let minutes = myDate2.getMinutes();
let seconds = myDate2.getSeconds();

// console.log(hours);
// console.log(minutes);
// console.log(seconds);


// 4. 시간 수정하기
// setMonth() 메서드로 month 값 수정시 month 값은 index 값과 같기 때문에 1을 빼주어야 한다.
let myDate3 = new Date('2020-12-20 13:45:59');
// console.log(myDate3);   // Sun Dec 20 2020 13:45:59 GMT+0900 (한국 표준시)

// 2020-12-31 13:45:59 --> 2024-04-05 09:35:21
myDate3.setFullYear(2024);
myDate3.setMonth(3);
myDate3.setDate(5);
myDate3.setHours(9);
myDate3.setMinutes(35);
myDate3.setSeconds(21);
// console.log(myDate3);   // Fri Apr 05 2024 09:35:21 GMT+0900 (한국 표준시)


// 5. 시간을 여러 포맷으로 출력하기
// (toDateString, localeString)
let myDate4 = new Date('1999-03-01 20:39:17');

let formattedDate1 = myDate4.toDateString();        // Mon Mar 01 1999
let formattedTime1 = myDate4.toTimeString();        // 20:39:17 GMT+0900 (한국 표준시)
let formattedDate2 = myDate4.toLocaleDateString();  // 1999. 3. 1.
let formattedTime2 = myDate4.toLocaleTimeString();  // 오후 8:39:17
