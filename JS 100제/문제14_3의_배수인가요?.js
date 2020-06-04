/**
 * 문제 14 : 3의 배수인가요?
 * 입력으로 랜덤한 숫자 n이 주어집니다.
 * 만약 그 수가 3의 배수라면 '짝'이라는 글자를, 3의 배수가 아니라면 n을 그대로 출력해 주세요.
 * 
 * 입출력
 * 
 * 입력 : 3
 * 출력 : 짝
 * 
 * 입력 : 2
 * 출력 : 2
 */

const input = prompt('Input');

if(isNaN(Number(input))){
  alert('숫자를 입력해 주세요');
}else{
  
  if(input % 3 === 0){  //3의 배수
    console.log('짝');
  }else{  //3의 배수 아님
    console.log(input);
  }

}
