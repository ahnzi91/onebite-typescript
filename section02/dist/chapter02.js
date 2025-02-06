// 배열
// -> number[] : 숫자만 포함하는 배열
// -> string[] : 문자만 포함하는 배열
let numArr = [1, 2, 3];
let strArr = ["hello", "ahnzi", "fe"];
// Array<>
// -> 제네릭 문법
let boolArr = [true, false, true];
// 배열에 들어가는 요소들의 타입이 다양할 경우
let multiArr = [1, "hello"];
// 다차원 배열의 타입을 정의하는 방법
let doubleArr = [
    [1, 2, 3],
    [4, 5],
];
// 튜플
// -> 길이와 타입이 고정된 배열
let tuple1 = [1, 2];
// 사용 불가
// tuple1 = [1, 2, 3];
// tuple1 = ["hello", "hi"];
let tuple2 = [1, "2", true];
tuple1.push(2);
export {};
