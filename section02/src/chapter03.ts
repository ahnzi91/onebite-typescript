// object
// 객체 리터럴 타입
// 구조적 타입 시스템
// -> property based type system
let user: {
  id?: number;
  name: string;
} = {
  id: 1,
  name: "안지훈",
};

let dog: {
  name: string;
  color: string;
} = {
  name: "돌돌이",
  color: "brown",
};

// 프로퍼티 id가 선택적일 때
// id 타입에 "?" 추가
user = {
  name: "홍길동",
};

// API KEY처럼 절대 수정되어서는 안되는 프로퍼티는 readonly를 붙여줍니다.
let config: {
  readonly apiKey: string;
} = {
  apiKey: "MY API KEY",
};

// config.apiKey = "hacked";
