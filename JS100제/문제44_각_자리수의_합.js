/**
 * 문제 44 : 각 자리수의 합
 * 사용자가 입력한 양의 정수의 각 자리수의 합을 구하는 프로그램을 만들어주세요
 * 예를들어
 * 18234 = 1+8+2+3+4 이고 정답은 18 입니다.
 * 
 * 입출력
 * 
 * 입력 : 18234
 * 출력 : 18
 */

const input = prompt('숫자를 입력해 주세요').split('');
let result = 0;
input.forEach((v,i) => {
    result += Number(v);
    if(i === input.length-1){
        console.log(result);
    }
})
