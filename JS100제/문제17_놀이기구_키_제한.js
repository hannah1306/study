/**
 * 문제 17 : 놀이기구 키 제한
 * 놀이기구마다 키 제한이 있는데 입력으로 키가 주어지면 150 이상이면 YES, 미만이면 NO를 출력하세요
 */

const height = prompt('키를 입력하세요');
if(Number(height) >= 150){
  console.log('YES');
}else{
  console.log('NO');
}
