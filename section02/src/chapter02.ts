// 배열
// -> number[] : 숫자만 포함하는 배열
// -> string[] : 문자만 포함하는 배열

let numArr: number[] = [1, 2, 3];
let strArr: string[] = ["hello", "ahnzi", "fe"];

// Array<>
// -> 제네릭 문법
let boolArr: Array<boolean> = [true, false, true];

// 배열에 들어가는 요소들의 타입이 다양할 경우
let multiArr: (string | number)[] = [1, "hello"];

// 다차원 배열의 타입을 정의하는 방법
let doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5],
];

// 튜플
// -> 길이와 타입이 고정된 배열
let tuple1: [number, number] = [1, 2];

// 사용 불가
// tuple1 = [1, 2, 3];
// tuple1 = ["hello", "hi"];

let tuple2: [number, string, boolean] = [1, "2", true];

// 배열 메서드를 사용할 땐 튜플의 길이 제한이 소용 없습니다.
// tuple1.push(2);
// tuple1.pop();
// tuple1.pop();
// tuple1.pop();

// 사용 예시
const users: [string, number][] = [
  ["안지훈", 1],
  ["안지훈2", 2],
  ["안지훈3", 3],
  ["안지훈4", 4],
  // [5, "안지훈5"], // 튜플을 사용하면 값을 잘못넣지 않도록 도와주니다.
];
