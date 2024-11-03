// ch05. 정렬 - 선택 정렬(Selection Sort)
function SelectionSort(arr) {
    // 배열의 길이만큼 원소를 순회
    for(let i=0; i<arr.length-1; i++){  // 배열의 마지막 원소는 자동 정렬 되기 때문에 마지막 원소를 제외하여 n-1번 반복한다.
        let minIdx = i; // 정렬되지 않은 영역의 원소 중 최소값을 가진 인덱스를 저장하는 변수
        // 정렬되지 않은 영역의 가장 작은 값을 찾기 위한 for 문
        for(let j = i + 1; j < arr.length; j++){    // i의 값은 minIdx에 저장 했기 때문에 j의 값을 i보다 1 크게 해준다.
            // 정렬되지 않은 영역을 순회하며 minIdx에 가장 작은 값의 위치를 저장
            if(arr[j] < arr[minIdx]){
                // 현재 인덱스 값이 minIdx에 저장된 값보다 작은 경우 현재 인덱스를 minIdx에 저장
                minIdx = j;
            }
        }

        // 정렬되지 않은 영역을 순회한 for문이 종료되었을 때 minIdx에 제일 작은 값의 인덱스가 저장됨
        // 이 값을 정렬되지 않은 첫번째 원소와 교체
        let temp = arr[i];
        arr[i] = arr[minIdx];
        arr[minIdx] = temp;
    }
}

let arr = [6,4,9,2];

console.log("============ 정렬 전 ============");
console.log(arr);

SelectionSort(arr);

console.log("============ 정렬 후 ============");
console.log(arr);