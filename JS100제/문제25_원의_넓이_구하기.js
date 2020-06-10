/**
 * 문제 25 : 원의 넓이 구하기
 * 원의 넓이는 반지름의 길이 x 반지름의 길이 x 3.14로 구할 수 있습니다.
 * 입력으로 반지름의 길이 정수 n이 주어지면 원의 넓이를 반환하는 함수를 만드세요.
 */

function getCircleArea(num){
  return num * num * 3.14;
}

const input = prompt('원의 반지름을 입력해 주세요');
console.log(getCircleArea(input)); 
