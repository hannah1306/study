/**
 * 문제 50 : 버블정렬 구현하기
 * 아래 코드의 빈칸을 채우시오
 */

function bubble(arr) {
    let result = arr.slice(); 
    let temp;
  
    for (let i = 0; i < result.length - 1; i++) {
      for (let j = 0; j < result.length - 1 - i; j++) {    //빈칸
        if (result[j] > result[j + 1]) {
           //빈칸을 채워주세요.
           temp = result[j];
           result[j] = result[j+1];
           result[j+1] = temp;
        }
      }
    }
    return result;
  }
  
  const items = prompt('입력해주세요.').split(' ').map((n) => {
    return parseInt(n, 10);
  });
  
  console.log(bubble(items));
