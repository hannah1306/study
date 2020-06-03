/**
 * 문제 08 : 객체의 키 이름 중복
 * 다음 자바스크립트의 출력값은?
 * 
 * var d = {
 *     'height':180,
 *     'weight':78,
 *     'weight':84,
 *     'temperature':36,
 *     'eyesight':1
 * };
 * 
 * console.log(d['weight']);
 */

var d = {
  'height':180,
  'weight':78,
  'weight':84,
  'temperature':36,
  'eyesight':1
};

console.log(d['weight']); //84(제일 마지막에 선언된 값)
