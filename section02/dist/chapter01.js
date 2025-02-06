// number
// -> 자바스크립트에서 숫자를 의미하는 모든 값을 포함하는 타입
let num1 = 123;
let num2 = -123;
let num3 = 0.123;
let num4 = -0.123;
let num5 = Infinity;
let num6 = -Infinity;
let num7 = NaN;
// 사용 불가
// num1 = "hello";
// num1.toUpperCase();
// string
let str1 = "hello";
let str2 = `hello`;
let str3 = `hello ${num1}`;
// 사용 불가
// str1 = 123;
// str1.toFixed();
// boolean
let bool1 = true;
let bool2 = false;
// null
let null1 = null;
// undefined
let undefined1 = undefined;
// 잠시 null 값을 넣고 싶은 경우
// tsconfig에서 설정
// "strictNullChecks": false
let numA = null;
// 리터럴 타입
// -> 특정한 값만을 가질 수 있도록 제한하는 타입
let numB = 10;
let strA = "hello";
let boolA = true;
export {};
