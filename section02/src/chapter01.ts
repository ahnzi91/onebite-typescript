// number
// -> 자바스크립트에서 숫자를 의미하는 모든 값을 포함하는 타입
let num1: number = 123;
let num2: number = -123;
let num3: number = 0.123;
let num4: number = -0.123;
let num5: number = Infinity;
let num6: number = -Infinity;
let num7: number = NaN;

// 사용 불가
// num1 = "hello";
// num1.toUpperCase();

// string
let str1: string = "hello";
let str2: string = `hello`;
let str3: string = `hello ${num1}`;

// 사용 불가
// str1 = 123;
// str1.toFixed();

// boolean
let bool1: boolean = true;
let bool2: boolean = false;

// null
let null1: null = null;

// undefined
let undefined1: undefined = undefined;

// 잠시 null 값을 넣고 싶은 경우
// tsconfig에서 설정
// "strictNullChecks": false
let numA: number = null;

// 리터럴 타입
// -> 특정한 값만을 가질 수 있도록 제한하는 타입
let numB: 10 = 10;
let strA: "hello" = "hello";
let boolA: true = true;
