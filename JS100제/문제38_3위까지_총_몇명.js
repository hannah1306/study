/**
 * 문제 38 : 3위까지 총 몇명?
 * 점수를 입력받아 1위~3위의 총 학생수를 구하시오
 * 
 * 입출력
 * 
 * 입력 : 97 86 75 66 55 97 85 97 97 95
 * 출력 : 6
 */

 const input = prompt('점수를 입력해주세요.').split(' ');
 const count = {};
 for(let i in input){
     const num = input[i];
     if(count[num] === undefined){
         count[num] = 1;
     }else{
        count[num] = ++count[num];
     }
 }
 
 const rank = Object.keys(count).sort((a,b) => {
     return b - a;
 });
 console.log(count[rank[0]] + count[rank[1]] + count[rank[2]]);

 /**
  * check
  * 
  * Array.push(a) - 배열의 끝에 요소 추가
  * Array.pop() - 배열의 마지막 요소 제거하고 제거된 요소를 반환
  * Array.shift() - 배열의 첫번째 요소를 제거하고 제거된 요소를 반환
  * Array.unshift(a) - 배열의 처음에 요소를 추가
  * Array.splice(pos, length) - pos번째부터 length만큼 요소 제거
  * Array.slice() - 배열 복제
  */
