/**
 * 문제 19 : 제곱을 구하자
 * 공백으로 구분된 두 숫자 a와 b가 주어지면, a의 b승을 구하는 프로그램을 작성하세요
 */

const [ a, b ] = prompt('두 숫자를 입력해주세요').split(' ');
let output = a;

for(let i=1; i<b; i++){
  output *= a;
}

console.log(output);

/**
 * check 다른 방법
 * 
 * Math.pow(a,b); //제곱근 함수
 */
