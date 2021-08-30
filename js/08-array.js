//  배열 생성: Array 객체로 생성
const v1 = new Array(10);   //  10개짜리 빈배열
const v2 = new Array();     //  빈 배열
const v3 = new Array(2021, "String", true); //  어떤 객체든 담을 수 있음

//  .length 속성: 요소의 개수
console.log("v1:", v1, v1.length);
console.log("v2:", v2, v2.length);
console.log("v3:", v3, v3.length);

//  리터럴로 생성 (추천 방법)
const v4 = [];  //  빈 배열
const v5 = [2021, "String", true];

//  배열 타입 확인 시 typeof를 사용하면 안된다
console.log("v4:", v4, typeof v4);
console.log("v5:", v5, typeof v5);

//  배열의 타입 확인: Array.isArray()로 확인
console.log("v4:", Array.isArray(v4));  //  v4가 Array인지 확인
console.log("v5:", Array.isArray(v5));

//  기본 값으로 채우기: fill 메서드
const v6 = new Array(10).fill(1);   //  1로 10개가 채워진 배열
console.log("v6:", v6);
v6.fill("default"); //  v6을 default로 채움
console.log("v6:", v6)

//  C, Java의 배열보다 다양한 용도로 활용
const person = {
    name : "홍길동",
    age : 28
};
//  객체의 속성 -> 배열처럼 접근이 가능
console.log(person.name, person['name']);
console.log(person.age, person['age']);

//  인덱스를 엄격히 체크하지 않음
const arr = []; //  빈 배열 생성
console.log(arr, arr.length);
//  인덱스를 범위를 벗어난 접근도 가능
arr[10] = 2021;
console.log(arr, arr.length);

console.log("====== 배열의 메서드");
const veges = ["배추", "무", "쪽파"];
const sources = ["소금", "고춧가루", "새우젓"];

console.log(veges, sources);

//  배열 합치기: concat
const items = veges.concat(sources);
console.log("CONCAT:", items);

//  배열 요소 합치기: join
console.log("JOIN:", items.join(", "));  //  요소를 ,로 합치기
