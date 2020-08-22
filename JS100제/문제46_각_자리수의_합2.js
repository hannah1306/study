/**
 * 문제 46 : 각 자리수의 합2
 * 1부터 20까지의(20을 포함) 모든 숫자를 일렬로 놓고 모든 자릿수의 총 합을 구하세요. 
 */
let string = '';
for(let i=1; i<=20; i++){
    string += i;
}
const list = string.split('');
console.log(list);
let result = 0;
list.forEach((v,i) => {
    result += Number(v);
    if(i === list.length-1){
        console.log(result);
    }
})
