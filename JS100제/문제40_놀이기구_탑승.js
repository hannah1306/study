/**
 * 문제 40 : 놀이기구 탑승
 * 첫번째 입력으로 제한 무게가 주어지고 두번째 입력으로는 함께한 친구들의 수 n이 주어집니다. 
 * 그 다음 차례대로 탑승할 친구들의 몸무게가 주어집니다. 몸무게는 무작위로 주어집니다. 총 몇 명 탑승할 수 있나요?
 * 
 * 입력
 * 50
 * 5
 * 20
 * 20
 * 20
 * 20
 * 20
 * 
 * 출력
 * 2
 */

const max = Number(prompt('무게 제한은 얼마입니까?'));
const count = Number(prompt('몇 명이 탑승하려고 합니까?'));
let total = 0;

for(let i=0; i<count; i++){
    total += Number(prompt('몸무게를 입력해 주세요'));
}

console.log(Math.floor(total / max));
