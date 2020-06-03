/**
 * 문제 06 : False
 * 자바스크립트 문법에서 False로 취급하지 않고 True로 취급하는 것은?
 * 
 * 1) NaN
 * 2) 1
 * 3) ""
 * 4) 0
 * 5) undefined
 */

 console.log(Boolean(NaN));       //false
 console.log(Boolean(1));         //true
 console.log(Boolean(""));        //false
 console.log(Boolean(0));         //false
 console.log(Boolean(undefined)); //false
 console.log(Boolean(null));      //false
 console.log(Boolean(-0));        //false
