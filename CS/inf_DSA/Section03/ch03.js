// ch03. 재귀 - 하노이 탑
// ex. 기둥 A 에 있는 원반 3개를 기둥 C 로 이동하려는 경우
//  1) 원반 3이 기둥 C로 옮겨 져야 함 -> [하위 문제] : 원반 1, 2가 기둥 B에 옮겨져야 한다.
//      1-1) 원반 1, 2가 기둥 B에 옮겨져야 한다. -> [하위 문제] : 원반 2가 기둥 B에 옮겨져야 한다.
//      1-1-1) 원반 2가 기둥 B에 옮겨져야 한다. -> [하위 문제] : 원반 1이 기둥 C에 옮겨져야 한다.
function hanoi(count, from, to, temp) { // 3, A, C, c
    if(count === 0) return;
    hanoi(count - 1, from, temp, to);   // 2, A, B, C
    console.log(`원반 [ ${count} ]를 [ ${from} ]에서 [ ${to} ]로 이동`);
    hanoi(count - 1, temp, to, from);   // 2, B(temp), C(to), A(from)
}


// 첫번째 매개변수 : 원반의 개수(count)
// 두번째 매개변수 : 원반들이 처음 꽂혀있는 기둥(from)
// 세번째 매개변수 : 원반들이 최종적으로 꽂힐 기둥(to)
// 네번째 매개변수 : 원반들이 이동을 위해 임시로 사용할 기둥(temp)
hanoi(3, "A", "C", "B");

