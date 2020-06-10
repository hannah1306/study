/**
 * 문제 34 : sort 구현하기
 * 숫자가 주어지면 작은 숫자부터 큰 숫자까지 순서대로 나열되어 있는지 확인하는 프로그램 작성하기
 * 
 * 입출력
 * 
 * 입력 : 176 156 155 165 166 169
 * 출력 : NO
 * 
 * 입력 : 155 156 165 166 169 176
 * 출력 : YES
 */

const input = prompt('숫자를 입력해 주세요');
const sort = input.split(' ').sort((a, b) => a - b);

if(input === sort.join(' ')){
  console.log('YES');
}else{
  console.log('NO');
}
