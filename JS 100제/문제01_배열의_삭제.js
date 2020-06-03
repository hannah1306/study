/**
 * 문제01 : 배열의 삭제
 * 다음 배열에서 400, 500를 삭제하는 code를 입력하세요.
 * 
 * var nums = [100, 200, 300, 400, 500];
 */

let nums = [100, 200, 300, 400, 500];

nums = nums.filter(n => {
  return n !== 400 && n !== 500
});

console.log(nums);
