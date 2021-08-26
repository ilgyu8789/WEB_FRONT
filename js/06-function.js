//  함수 선언식
function sum(a, b) {
  //  매개변수 a, b를 입력 받음
  return a + b; //  함수 종료, 출력 데이터를 반환할 수 있다
}

console.log("SUM:", sum(10, 20)); //  함수 호출

//  함수 표현식: 일반적으로 이름이 없는 함수 -> "익명 함수"
//  그 자체로 독립된 객체 = 변수에 할당될 수 있다
//  또한 다른 함수의 매개 변수로 전달될 수도 있다
const asum = function (a, b) {
  //  다른 변수로 할당된 상태
  return a + b;
};
console.log(typeof asum, asum(10, 20));

//  익명 함수의 활용
//  1. 즉시 실행 함수
let initText;
(function (number) {
  let textList = ["홀수", "짝수"];
  //    textList는 초기화에만 사용될 임시 변수이다.
  if (number % 2 == 0) {
    initText = textList[1];
  } else {
    initText = textList[0];
  }
  console.log(`인수 ${number}를 이용하여 즉시 실행`);
})(5); //  -> 즉시 실행
console.log(initText);
// console.log(textList); -> 스코프가 종료되므로 에러가 발생
