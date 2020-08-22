/**
 * 문제 48 : 대소문자 바꿔서 출력하기
 * 문자열이 주어지면 대문자와 소문자를 바꿔서 출력하는 프로그램을 작성하세요.
 * 
 * 입출력
 * 
 * 입력 : AAABBBcccddd
 * 출력 : aaabbbCCCDDD
 */

const input = prompt('영어를 입력해 주세요').split('');
const reg = /[a-z]/;
let result = [];
input.forEach((v,i) => {
    if(reg.test(v)){
        result.push(v.toUpperCase());
    }else{
        result.push(v.toLowerCase());
    }
    if(i === input.length-1){
        console.log(result.join(''));
    }
})
