/**
 * 문제 16 : 로꾸거
 * 문장이 입력되면 거꾸로 출력하는 프로그램 만들기
 * 
 * 입출력
 * 
 * 입력 : 거꾸로
 * 출력 : 로꾸거
 */

const input = prompt('문장을 입력해주세요.');
let output = '';
for(let i=0; i<input.length; i++){
  output = input[i] + output;
}
console.log(output);

/**
 * check 다른 방법
 * 
 * const reverseString = input.split('').reverse().join('');
 * console.log(reverseString);
 */
