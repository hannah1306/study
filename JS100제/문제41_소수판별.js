/**
 * 문제 41 : 소수판별
 * 숫자가 주어지면 소수인지 아닌지 판별하는 프로그램을 작성하시오
 * 소수이면 YES, 소수가 아니면 NO로 출력
 * (소수 : 1과 자기 자신만으로 나누어 떨어지는 1보다 큰 양의 정수)
 */

const input = Number(prompt('숫자를 입력해 주세요'));
let count = 0;
for(let i=1; i<=input; i++){
    if(input % i === 0){
        count++;
    }
}
console.log(count === 2 ? 'YES' : 'NO');
