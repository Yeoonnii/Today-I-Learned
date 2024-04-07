// Quiz 2. 평균 성적 출력하기
// 목표: 학생들의 평균 성적을 출력합니다.

// 다음 요구사항을 만족하는 함수 printAvgScore의 코드를 완성하세요
// 매개변수 students로 객체 형태의 학생 데이터를 제공받습니다.
// 반복문을 활용하여 모든 학생의 개별 성적 평균을 출력합니다.

// "{이름}: {평균}" 형태로 출력합니다.

// 풀이 1 ---------------------------------------------------------------------------------------------
function printAvgScore(students) {
  let names = Object.keys(students);  // 학생 이름 (key값)을 배열로 추출
  let info = Object.values(students); // 학생 정보 (value값)을 배열로 추출

  for(let i=0; i<names.length; i++){
    let arrScores = info[i].scores;   // 학생별 점수 배열 추출
    let avg = 0;
    let sum = 0;
    for(let j=0; j<arrScores.length; j++){
      sum += arrScores[j];  // 학생별 점수 배열 모두 더하기
    }
    avg = sum / arrScores.length; // 평균 구하기
    console.log(`${names[i]}: ${avg}`);
  }
}

printAvgScore({
  이정환: { hobby: "테니스", scores: [10, 20, 30, 40, 50] },
  김효빈: { hobby: "테니스", scores: [90, 80, 30, 70, 50] },
  홍길동: { hobby: "의적", scores: [100, 100, 20, 20, 50] },
});

// 풀이 2 ---------------------------------------------------------------------------------------------
function printAvgScore1(students) {
 // for in과 for of 연산자를 사용하여 풀이
 for(info in students){ // 매개변수로 받은 students에서 key 값 추출
  let sum = 0;
  let avg = 0;
  let {scores} = students[info];  // students의 key값을 순회하며 각 학생의 scores 추출
  
  for(let score of scores){   // scores 배열을 순회하며 score의 총합 구하기 
    sum += score;
  }
  avg = sum / scores.length;  // 점수 평균 구하기
  console.log(`${info}: ${avg}`);
  }
}

printAvgScore1({
  이정환: { hobby: "테니스", scores: [10, 20, 30, 40, 50] },
  김효빈: { hobby: "테니스", scores: [90, 80, 30, 70, 50] },
  홍길동: { hobby: "의적", scores: [100, 100, 20, 20, 50] },
});

// ---------------------------------------------------------------------------------------------
// 출력 결과 :
// 이정환: 30
// 김효빈: 64
// 홍길동: 58