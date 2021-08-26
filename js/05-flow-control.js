//  연습문제 1
//  구구단 출력: 2단~9단
//  for문, while문 2가지 버전
console.log("for 구구단");
for (let dan = 2; dan < 10; dan++) {
  console.log(dan + "단");
  for (let i = 1; i < 10; i++) {
    console.log(`${dan} * ${i} = ${dan * i}`);
  }
  console.log();
}

console.log("while 구구단");
let dan = 2;
while (dan < 10) {
  //  단루프
  let i = 1;
  console.log(dan + "단");
  //  숫자루프
  while (i < 10) {
    console.log(`${dan} * ${i} = ${dan * i}`);
    i++;
  }
  console.log();
  dan++;
}

//  연습문제 2
//  *****
//  ****
//  ***
//  **
//  *
//  for문, while문 2가지 버전
console.log("for 별");

for (let count = 5; count > 0; count--) {
  let stars = "";
  for (let i = 1; i <= count; i++) {
    stars += "*";
  }
  console.log(stars);
}

console.log("while 별");
let count = 5;
while (count > 0) {
  let stars = "";
  let i = 1;
  while (i <= count) {
    stars += "*";
    i++;
  }
  console.log(stars);
  count--;
}

//  ES6: for ... in
//  객체의 속성(프로퍼티)을 순회한다
//  ES6: for ... of
//  객체의 값을 순회한다
let obj = {
  name: "홍길동",
  age: 28,
  job: "도적",
  gender: "남성",
};
console.log("===== for ... in");
for (let key in obj) {
  //  for ... in: 객체의 속성을 순회
  console.log(key, "->", obj[key]);
}

const arr = [5, 1, 4, 3, 2, 9, 8, 0];
for (let key in arr) {
  //   for ... in: 인덱스를 표기
  console.log(key);
}

console.log("===== for ... of");
for (let value of arr) {
  //   for ... of: 프로퍼티를 표기
  console.log(value);
}

//  for of는 순회 객체(배열)에서만 사용가능
//  나머지에서 사용시 에러가 난다
// for (let value of obj) {
//   //   for ... of: 프로퍼티를 표기
//   console.log(value);
// } -> obj는 순회객체가 아니라서 에러가 난다

//  주의: for...in과 for...of 구분해서 사용하기
