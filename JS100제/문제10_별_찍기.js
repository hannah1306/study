/**
 * 문제 10 : 별 찍기
 * 
 * 입력
 * 5
 * 
 * 출력
 *     *
 *    ***
 *   *****
 *  *******
 * *********
 */

const input = prompt('Input');
let number;

if(isNaN(Number(input))){

  alert('숫자를 입력해주세요.');

}else{

  number = Number(input);
  let output = '';

  for(let i=1; i<number+1; i++){
  
    for(let j=0; j<number-i; j++){
      output += ' ';
    }
    for(let k=0; k<i+(i-1); k++){
      output += '*';
    }
    output += '\n';    
  }
  console.log(output);
}
