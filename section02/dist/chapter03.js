// object
// 객체 리터럴 타입
// 구조적 타입 시스템
// -> property based type system
let user = {
    id: 1,
    name: "안지훈",
};
let dog = {
    name: "돌돌이",
    color: "brown",
};
// 프로퍼티 id가 선택적일 때
// id 타입에 "?" 추가
user = {
    name: "홍길동",
};
let config = {
    apiKey: "MY API KEY",
};
config.apiKey = "hacked";
console.log(config);
export {};
