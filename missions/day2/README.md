# Day 2 Quiz

배운 내용을 머리속에 잘 정리하실 수 있도록  
이번엔 총 5개의 **주관식/단답형** 퀴즈를 준비 해 봤어요

답을 틀려도 괜찮아요 자신있게 본인의 답을 제출해주세요!  
자 그럼 퀴즈 나갑니다!

## Quiz 1

> 관련 수업 : (1섹션) JS의 단점과 TS의 장점

정적 타입시스템과 동적 타입 시스템의 단점들은 보완하고 장점들은 그대로 가져온  
TypeScript의 타입 시스템을 뭐라고 부를까요? 나중에 서칭하기 편하게 영문으로도 적어보아요!

## Answer 1

점진적 타입 시스템 (Gradual Typing)

1. 정적 타입 시스템(Static Typing)과 동적 타입 시스템(Dynamic Typing)의 장점을 조화롭게 결합한 방식
2. 개발자가 원하는 만큼 타입을 적용할 수 있어서 유연성과 안정성을 동시에 제공
3. TypeScript에서는 any 타입을 활용하여 동적 타입처럼 사용할 수도 있고, 엄격한 정적 타입을 적용할 수도 있음

## Quiz 2

> 관련 수업 : (1섹션) JS의 단점과 TS의 장점

TypeScript의 타입 시스템이 갖는 특징에는 어떤 점이 있을까요?  
바로 딱 떠오르는 한가지 특징만 적어주세요!  
강의 내용에 없었더라도 다른 블로그, 아티클에서 찾은 정보를 적어주셔도 좋아요!

## Answer 2

**정적 타입 시스템 (Static Typing)**

- 컴파일 타임에 타입 오류를 잡을 수 있음
- JavaScript와 달리 실행 전에 타입을 검사하여 안정성을 높임

```typescript
let message: string = "Hello";
// message = 123; // ❌ 오류
// -> "number" 형식은 "string" 형식에 할당할 수 없음
```

**점진적 타입 시스템 (Gradual Typing)**

- JS 코드와 자연스럽게 결합 가능
- 필요한 곳만 타입을 추가할 수 있고, any 같은 동적 타입도 허용

```typescript
let data: any = "Hello";
data = 123; // ⭕️
```

## Quiz 3

> 관련 수업 : (1섹션) 타입스크립트의 동작 원리

TypeScript를 컴파일 하면 그 결과로 무엇이 생성되나요?  
(힌트! TypeScript는 다른 언어들과는 달리 컴파일 결과 ByteCode가 생성되지 않아요)

## Answer 3

순수 자바스크립트 코드가 생성됩니다.

## Quiz 4

> 관련 수업 : (1섹션) 타입스크립트 컴파일러 옵션 설정하기

타입스크립트는 사용자(프로그래머)가 직접 컴파일러 옵션을 설정할 수 있는 자유로움을 제공해요  
따라서 우리가 tsconfig.json 파일의 내용을 수정하면서 이런 저런 옵션을 설정할 수 있는데요  
이 파일에서 타입 검사를 매우 엄격하게 하려면 어떤 옵션을 어떤 값으로 설정해야 할까요?

ex) 옵션이름 : 설정 값

## Answer 4

> strict : 모든 엄격한 타입 검사 옵션을 활성화

```json
{
  "compilerOptions": {
    "strict": true
  }
}
```

## Quiz 5

아래 코드처럼 number 타입의 변수에 null 값을 할당하려고 해요

```typescript
let numA: number = null; // ❌ 오류 발생!
```

이 코드는 엄격한 타입 검사가 활성화 되어 있을 때에는 오류로 판단되는데요  
만약 위 코드를 오류가 아닌 것으로 판단하게 하려면 어떤 옵션을 어떤 값으로 설정해야 할까요?

ex) 옵션이름 : 설정 값

## Answer 5

> strictNullChecks : null 및 undefined를 모든 타입에 허용

```json
{
  "compilerOptions": {
    "strictNullChecks": false
  }
}
```
