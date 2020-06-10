/**
 * 문제 37 : 반장 선거
 * 학생들이 뽑은 후보들을 입력받으면 뽑힌 학생의 이름과 받은 표 수를 출력하는 프로그램을 작성하시오
 * 
 * 입력
 * 원범 원범 혜원 혜원 혜원 혜원 유진 유진
 * 출력
 * 혜원(이)가 총 4표로 반장이 되었습니다.
 */

const list = prompt('이름을 입력해주세요').split(' ');

let count = {};
for(let i=0; i<list.length; i++){
    const name = list[i];
    if(count[name] === undefined){
        count[name] = 1;
    }else{
        count[name] = ++count[name];
    }
}

let countList = [];
for(let c in count){
    countList.push({
        name : c,
        count : count[c]
    })
}
countList.sort((a,b) => {
    return b.count - a.count
})
const result = countList[0];
console.log(`${result.name}(이)가 ${result.count}표로 반장이 되었습니다.`);

/**
 * check
 * 
 * Object.keys()
 * Object.values()
 * Array.reduce()
 * 
 * - 예제
 * var object = {name : 'apple',  count : 5};
 * Object.keys(object);     //['name', 'count']
 * Object.values(object);   //['apple', 5]
 * 
 * winner = Object.keys(count).reduce(function(a, b){
 *   return count[a] > count[b] ? a : b
 * });
 */
