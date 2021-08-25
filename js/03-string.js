//  JavaScript 문자열
const s1 = "Modern JavaScript and Java";    //  Literal
const s2 = String("Modern JavaScript"); //  String 객체 이용
console.log(typeof s1, typeof s2);

//  Property: .length - 문자열의 길이
//  모든 문자열 내부 데이터는 인덱스로 접근 가능
console.log(s1, ", length=", s1.length);

//  문자열 추출 메서드
console.log(s1.charAt(7));  //  인덱스 7의 문자 확인
console.log(s1[7]); //  배열처럼 사용할 수 있으나 불변 자료형으로 내용 수정은 x
//  구분 문자열 메서드
console.log(s1.substr(7));  // 범위: 7번 인덱스 ~ 끝
console.log(s1.substr(7, 10));  //  범위: 7번 인덱스 ~ 10글자
console.log(s1.substring(7));   //  범위: 7번 인덱스 ~ 끝
console.log(s1.substring(7, 17));   //  범위: 7번 인덱스 ~ 17번 인덱스 앞까지

console.log("------ Search ")
console.log(s1, ", length=", s1.length);
//  중요: 문자열 검색 메서드
