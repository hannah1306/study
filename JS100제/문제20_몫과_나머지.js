/**
 * 문제 20 : 몫과 나머지
 * 공백으로 구분된 두 숫자 a와 b가 주어지면, b로 a를 나누어 그 몫과 나머지를 구하시오
 */

const [ a, b ] = prompt('두 숫자를 입력해주세요').split(' ');
console.log(`${Math.floor(Number(a) / Number(b))} ${Number(a) % Number(b)}`);
