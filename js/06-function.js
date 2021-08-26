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
console.log("==== arguments");
//  함수의 매개 변수
//  JavaScript는 선언부의 매개 변수 개수와 상관없이
//  모든 매개 변수가 arguments라는 이름의 배열로 전달된다.
function getNumberTotal() {
  //  매개 변수를 선언하지 않음
  //   console.log(arguments, arguments.length);
  //  모든 매개 변수가 arguments로 전달된다
  let result = 0;
  for (let i = 0; i < arguments.length; i++) {
    if (typeof arguments[i] == "number") {
      result += arguments[i];
    }
  }
  return result;
}
console.log(getNumberTotal()); //  매개 변수 없음
console.log(getNumberTotal(1, 2, 3, 4, 5)); //  매개 변수 5개
console.log(getNumberTotal(1, 2, "3", 4, 5));

console.log("==== CallBack");
//  함수는 문법적 기능이 아니라, 독립된 객체이다
function usingCallback(val1, val2, func) {
  //  기능을 미정 상태로 둔다
  //  함수 호출 시 외부로부터 실행 로직을 전달받아 거꾸로 호출해 준다.
  //  이 방식이 Callback 이다.
  if (typeof func == "function") {
    //  매개 변수 func는 함수다
    func(val1, val2);
  }
}

usingCallback(7, 5, function (v1, v2) {
  console.log(v1 + v2); //  실행 로직을 주입
});

usingCallback(7, 5, function (v1, v2) {
  console.log(v1 * v2); //  실행 로직을 호출 시 주입 가능
});

//  화살표 함수: =>
//  매개 변수가 없을 때
console.log("==== Arrow함수");
const f1 = function () {
  return "hello";
};
const f1Arrow = () => "hello";

console.log(f1(), typeof f1);
console.log(f1Arrow(), typeof f1Arrow);

//  매개 변수가 있을 때(1개)
const f2 = function (name) {
  return "Hello " + name;
};
const f2Arrow = (name) => "Hello " + name;

console.log(f2("홍길동"));
console.log(f2Arrow("홍길동"));

//  매개 변수가 있을 때(여러개)
const f3 = function (a, b) {
  return a + b;
};
const f3Arrow = (a, b) => a + b;

console.log(f3(7, 5));
console.log(f3Arrow(7, 5));
//  화살표함수는 콜백함수를 전달할 때 활용이 좋다
usingCallback(10, 20, (v1, v2) => {
  console.log(v1 + v2);
});
