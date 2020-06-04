/**
 * 문제 29 : 대문자 체크하기
 * 알파벳 하나만을 입력하고 그 알파벳이 대문자이면 YES를 아니면 NO를 출력하는 프로그램**을 만들어 주세요.
 */

const reg = /[A-Z]/;
const input = prompt('알파벳 하나만 입력해 주세요');

if(reg.test(input)){
  console.log('YES');
}else{
  console.log('NO');
}
