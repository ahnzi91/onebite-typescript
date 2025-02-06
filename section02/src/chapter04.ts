// 타입 별칭
// -> 타입을 변수처럼 사용할 수 있습니다.

type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};

function func() {
  type User = {}; // func() 함수 안에서는 User로 선언 가능
}

let user: User = {
  id: 1,
  name: "안지훈",
  nickname: "ahnzi",
  birth: "1991.06.21",
  bio: "운동하는 개발자",
  location: "서울시 도봉구",
};

let user2: User = {
  id: 2,
  name: "홍길동",
  nickname: "ahnzi",
  birth: "1991.06.21",
  bio: "운동하는 개발자",
  location: "서울시 도봉구",
};

// 인덱스 시그니처
type CountryCodes = {
  // Korea: string;
  // UnitedState: string;
  // UnitedKingdom: string;
  [key: string]: string;
};

let countryCodes: CountryCodes = {
  Korea: "ko",
  UnitedState: "us",
  UnitedKingdom: "uk",
};

// 인덱스 시그니처를 사용하는 객체 타입에서 추가적인 프로퍼티를 정의하려면, 해당 인덱스 시그니처의 값(value) 타입과 일치하거나 호환되는 타입이어야 합니다.
type CountryNumberCodes = {
  [key: string]: number;
  Korea: number;
};

let countryNumberCodes: CountryNumberCodes = {
  Korea: 410,
  // UnitedState: 840,
  // UnitedKingdom: 826,
};
