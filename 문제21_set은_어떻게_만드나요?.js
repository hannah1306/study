/**
 * 문제 21 : set은 어떻게 만드나요?
 * 다음 중 set을 만드는 방법으로 올바른 것을 모두 고르시오.
 * 
 * 1)  var x = {1, 2, 3, 5, 6, 7};
 * 2)  var x = {};
 * 3)  var x = new Set('javascript');
 * 4)  var x = new Set(range(5));
 * 5)  var x = new Set();
 * 
 * 정답 : 3, 5번
 */


 /**
  * check - set 메소드
  * 
  * let x = new Set();
  * x.add(1);       //Set {1}
  * x.add({a:1});   /Set {1, {a:1}}
  * x.has(1);       //true
  * x.size;         //2
  * x.delete(1);    //Set {{a:1}}
  * 
  * new Set('test');    //Set {'t','e','s'} << t는 중복이므로 한번만 들어감(size:3)
  */
