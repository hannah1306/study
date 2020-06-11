/**
 * 문제 43 : 10진수를 2진수로
 * 사용자에게 숫자를 입력받고 이를 2진수를 바꾸고 그 값을 출력해주세요.
 */

 const input = prompt('숫자를 입력해 주세요');
 console.log(Number(input).toString(2));

 /**
  * check
  * 
  * - 10진수 => 2진수
  * input.toString(2)
  * 
  * - 10진수 => 16진수
  * input.toString(16)
  * 
  * - 2진수 => 10진수
  * parseInt(input, 2)
  * 
  * - 16진수 => 10진수
  * parseInt(input, 16)
  * 
  * - 16진수 => 2진수
  * parseInt(input, 16).toString(2)
  * 
  * - 2진수 => 16진수
  * parseInt(input, 2).toString(16)
  */
