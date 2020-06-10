/**
 * 문제 39 : 오타 수정하기
 * 문장이 입력되면 모든 q를 e로 바꾸는 프로그램을 작성해 주세요.
 * 
 * 입출력
 * 
 * 입력 : hqllo my namq is hyqwon
 * 출력 : hello my name is hyewon
 */

const input = prompt('문장을 입력해 주세요');
const result = input.replace(/q/g, 'e');
console.log(result);
