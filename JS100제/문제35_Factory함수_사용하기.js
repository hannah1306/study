/**
 * 문제 35 : Factory함수 사용하기
 * 2제곱, 3제곱, 4제곱을 할 수 있는 Factory 함수를 만들려고 합니다. 
 * <pass>에 코드를 작성하여 two함수를 완성하세요.
 */

function one(n){
    function two(num){
        //pass
        let result = num;
        for(let i=1; i<n; i++){
            result *= num;
        }
        return result;
    }
    return two;
}

const a = one(2);
const b = one(3);
const c = one(4);

console.log(a(10));
console.log(b(10));
console.log(c(10));

/**
 * check
 * 
 * - 팩토리 함수란? 객체를 반환하는 함수
 * 
 * 다른 답안
 * - Math.pow(num, n) : 제곱근 함수 
 */
