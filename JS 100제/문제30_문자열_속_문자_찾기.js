/**
 * 문제 30 : 문자열 속 문자 찾기
 * 첫번째 입력에서는 문자열이 입력되고, 두번째에는 찾을 문자가 입력되어야 합니다.
 * 그 문자가 시작하는 index를 반환하는 프로그램을 만들어 주세요
 * 
 * 입력
 * pineapple is yummy
 * apple
 * 
 * 출력
 * 4
 */

const sentence = prompt('문장을 입력해 주세요');
const word = prompt('찾으려는 단어를 입력해 주세요');

console.log(sentence.indexOf(word));

/**
 * check
 * 단어가 존재하지 않으면 -1을 반환
 */
