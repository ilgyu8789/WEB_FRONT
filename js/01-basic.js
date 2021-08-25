//  한줄 주석
/*
    여러줄 주석
    : JavaScript 주석은 C. Java와 동일
*/
//  내장 객체 console
console.info("정보 메시지");
console.debug("디버그 메시지");
console.warn("경고 메시지");
console.error("에러 메시지");

console.log("Hello, JavaScript!");

//  연속으로 데이터를 출력 -> ','로 구분
console.log("String", 2021, true);

//  현재 플랫폼 정보 출력
console.log("Process Version:", process.version);
console.log("Process Platform:", process.Platform);

//  객체의 속성 접근: '.'으로 접근
console.log(Math.PI);   //  Math 객체의 속성인 PI
console.log(Math.max(1, 3, 2, 4, 9, 5));

console.log("-----------");

//  var, let, const
var testVar = 10;   //  전통적 할당 방법: 가급적 사용 지양

//  let, const -> 변수의 스코프는 block 단위

let testLet = "let";    //  let: 변경 가능 변수
const TEST_CONST = "const"; //  const: 변경 불가 변수
//  상수처럼 활용 가능, 선언과 동시에 할당해야 한다.
console.log("testVar:", testVar);
console.log("testLet", testLet);
console.log("TEST_CONST", TEST_CONST);

//  값의 변경
testVar = "changed";
testLet = "changed";
//  TEST_CONST = "changed"; //  -> error: 변경 불가, 상수이기때문

console.log("testVar:", testVar);
console.log("testLet", testLet);
console.log("TEST_CONST", TEST_CONST);

console.log("-----------");
//  JacaScript는 동적 타입의 언어
//  데이터 타입이 고정되지 않고
//  데이터가 할당 되었을 때 그 타입이 결정된다
let v = "This is String";
//  데이터 타입 체크
console.log(v, "=>", typeof v);
//  다른 데이터 타입 할당
v = 2021;
console.log(v, "=>", typeof v);