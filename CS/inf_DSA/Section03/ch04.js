// ch04. 정렬 - 버블정렬(Bubble Sort)
function BubbleSort(arr) {
    console.log(`arr.length ===> [${arr.length}]`);
    // 자리의 교체는 arr.length -1 만큼 진행
    for(let i = 0; i < arr.length - 1; i++) {
        console.log(`1) [${i}]번째 for문`);
        // 정렬이 된 원소의 이전 원소보다 하나 이전의 원소까지 순회
        for(let j = 0; j < (arr.length - i - 1); j ++){
            console.log(`2) [${j}]번째 for문`);
            // 실제로 값을 비교하며 배열 원소의 값을 바꿔준다.
            console.log(`3) arr[j] 값 ===> ${arr[j]}`);
            console.log(`3) arr[j+1] 값 ===> ${arr[j+1]}`);
            if(arr[j] > arr[j + 1]){ // 앞의 원소값이 뒤의 원소값 보다 큰 경우
                console.log(`4) arr[j]값이 arr[j+1] 값 보다 큽니다! ${arr[j]} > ${arr[j+1]}`);
                let temp = arr[j];  // 1) 앞의 원소 값을 임시로 저장
                arr[j] = arr[j + 1] // 2) 뒤의 원소 값을 앞의 원소값으로 변경
                arr[j + 1] = temp;  // 3) 뒤의 원소 값을 임시로 저장했던 값으로 변경
            }
            console.log(`5) ${arr}`);
        }
    }
}

let arr = [5, 3, 6, 2, 9, 1];
console.log("============ 정렬 전 ============");
console.log(arr);

BubbleSort(arr);

console.log("============ 정렬 후 ============");
console.log(arr);