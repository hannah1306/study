/**
 * 문제02 : 배열의 내장함수
 * <pass>부분에 배열 내장함수를 이용하여 코드를 입력하고 다음과 같이 출력되게 하세요.
 * 
 * 데이터
 * var arr = [200, 100, 300];
 * //pass
 * console.log(arr);
 * 
 * 출력
 * [200, 100, 10000, 300]
 */

var arr = [200, 100, 300];
arr.splice(2, 0, 10000);

console.log(arr); //[ 200, 100, 10000, 300 ]

/**
 * check
 * 
 * array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
 * 
 * - start : 배열 변경을 시작할 인덱스
 * - deleteCount : 0 이하면 어떤 요소도 제거하지 않음
 * - item1, item2... : 배열에 추가할 요소
 */
