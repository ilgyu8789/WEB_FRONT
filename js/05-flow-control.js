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
