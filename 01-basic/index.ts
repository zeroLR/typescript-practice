// index.ts
let myName = "Maxwell";
let age = 20;
let hasPet = false;
let nothing = undefined;
let nothingLiterally = null;

myName = 123;
age = "123";
nothing = 123;
nothingLiterally = undefined;

let messageToSend;

messageToSend = "Hello";
messageToSend = 101010101;

let absoluteNothing: undefined = undefined;
let literallyAbsoluteNothing: null = null;

absoluteNothing = 123;
literallyAbsoluteNothing = "hello";

let canBeNullableString: string;

let myString = canBeNullableString;

canBeNullableString = "hello";

let absoluteEitherNullOrString: string | null = null;

absoluteEitherNullOrString = "Assigned with string...";
absoluteEitherNullOrString = null;
absoluteEitherNullOrString = "Assigned with string, again...";

let info = {
  name: "Maxwell",
  age: 20,
  hasPet: false,
};

let someone = {
  knows: undefined,
  identity: null,
};

info.name = "jack";
info.age = 24;
info.hasPet = true;

someone.knows = undefined;
someone.identity = null;

info.name = false;
info.age = null;
info.hasPet = "false";

someone.knows = "Nothing";
someone.identity = "John Snow";

info = {
  name: "jack",
  age: 24,
  hasPet: false,
};

info = {
  name: "jack",
  age: 24,
};

someone = {
  knows: undefined,
  identity: null,
  loves: "Ygritte",
};

info.job = "engineer";

let justAnObject: object = { a: "b" };

justAnObject.a = "c";
justAnObject.a = null;
justAnObject.c = undefined;
justAnObject = { a: "c" };

justAnObject = 123;

justAnObject = [1, "2", 3, "4", 5, true, undefined, null, { a: "b" }];

justAnObject = function () {
  console.log("hello?");
};

justAnObject = new Object();

justAnObject = new String("Hello?");

justAnObject = new Number(123);

justAnObject = Object;
justAnObject = Array;
justAnObject = Function;

let aSimpleFunction = function () {
  console.log("hello!");
};

const addition = function (num1, num2) {
  return num1 + num2;
};

const addition2 = function (num1: number, num2: number) {
  return num1 + num2;
};

let aJsonString: string = '{"a":123,"b":"c"}';

let parsedJSON = JSON.parse(aJsonString);

let parsedJSON1 = JSON.parse(aJsonString) as { a: number; b: string };
let parsedJSON2 = <{ a: number; b: string }>JSON.parse(aJsonString);
let parsedJSON3: { a: number; b: string } = JSON.parse(aJsonString);

let addition3 = function (parm1: number, parm2: number) {
  return parm1 + parm2;
};

addition3 = function (parm1: number, parm2: number) {
  return parm2 + parm1;
};

addition3 = function (parm1: string, parm2: number) {
  return parm1 + parm2;
};

addition3 = function (parm1: number, parm2: number) {
  parm1 + parm2;
};

let doesItWork1 = function doesItWork1() {
  return undefined;
};

let doesItWork2 = function doesItWork2(): undefined {
  return undefined;
};

let doesItWork3 = function doesItWork3(): undefined { };

let doesItWork4 = function doesItWork4(): void {
  return undefined;
};

let numbers = [1, 2, 3, 4, 5];
let strings = ["a", "b", "c"];
let numbersAndStrings = [1, "a", 2, "b"];
let everythings = [
  1,
  "a",
  true,
  undefined,
  null,
  { a: 1, b: "2" },
  function () {
    console.log(123);
  },
];

numbers[0] = 123;
numbers[1] = "a";
numbers.push(1);
numbers.push("a");
numbers.concat([1, 2]);
numbers.concat(["1", "2"]);
numbers = [7, 8, 9];
numbers = ["a", "b", "c"];

let ObjectsArray1 = [
  { message: "hello" },
  { message: "hi" },
  { message: "nice" },
];

let objectArray2 = [
  { message: "hello" },
  { message: "hi", id: 123 },
  { message: "nice" },
];

let objectArray3 = [{ message: "hello" }, { message: "hi" }, { message: 123 }];

let miscellaneousArraysArray = [
  [1, 2, 3],
  ["a", "b", "c"],
  [true, false, 123, null],
  ["string", undefined],
];

let emptyArray = [];

emptyArray.push(1);
emptyArray.push("1");
emptyArray = [1, 2, 3];

let canBeEitherNullOrNumber: (number | null)[] = [1, 2, 3];

canBeEitherNullOrNumber.splice(2, 0, null);

let Numbers = [1, 2, 3, 4, 5];
let mappedNumbers = Numbers.map(num => num * 2);
mappedNumbers = Numbers.map(num => num + "1");
let mappedNumbersAndString = Numbers.map(num => num + "123");

// let BMWMotor: [string, string, string, Date] = ["BMW", "motorcycle", "silver", new Date(2019, 2, 17)];
// let jaguarOffRoad: [string, string, string, Date] = ["Jaguar", "off-road", "royal-blue", new Date(2019, 1, 9)];
// let ToyotaRV: [string, string, string, Date] = ["Toyota", "recreational", "ivory-white", new Date(2019, 3, 15)];

// Type Alias

type Vehicle = [string, string, string, Date];

let BMWMotor: Vehicle = ["BMW", "motorcycle", "silver", new Date(2019, 2, 17)];
let jaguarOffRoad = <Vehicle>["Jaguar", "off-road", "royal-blue", new Date(2019, 1, 9)];
let ToyotaRV = ["Toyota", "recreational", "ivory-white", new Date(2019, 3, 15)] as Vehicle;

type arrayTypeRepresentation = (string | Date)[];
type tupleTypeRepresentation = [string, string, string, Date];

let v1: Vehicle = ["a", "b", 1, new Date(2022, 1, 1)];
let v2: Vehicle = [new Date(2022, 1, 1), "a", "b", "c"];
let v3: Vehicle = ["a", "b", "c", new Date(2022, 1, 1), "a"];
let v4: Vehicle = ["a", "b", "c"];

let WTFVehicle: Vehicle = ["taxi", "yellow", "Toyota", new Date(2019, 2, 17)];

let BMWMotor2 = {
  brand: "BMW",
  type: "motorcycle",
  color: "silver",
  manufactureDate: new Date(2019, 2, 17)
};

// Enumerated Type

enum WeekDay {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday
};

let weekDayOfBirthday = WeekDay.Monday;
let TGIF: WeekDay = WeekDay.Friday;
console.log(TGIF);
let keyofTGIF = WeekDay[TGIF];
console.log(keyofTGIF);

type MathOperator = (n1: number, n2: number) => number;

let powerOp: MathOperator = function (n1: number, n2: number): number {
  return n1 ** n2;
}

let wrongPowerOp1: MathOperator = function (n1: string, n2: string) {
  return n1 ** n2;
}

let wrongPowerOp2: MathOperator = function (n1: number, n2: number) {
  return (n1 ** n2).toString();
}

let powerOpWithNoParamsAnnotation: MathOperator = function (n1, n2) {
  return n1 ** n2;
}

powerOpWithNoParamsAnnotation(123, 456);
powerOpWithNoParamsAnnotation("123", 456);

type PersonInfo = {
  name: string,
  age: number,
  hasPet: boolean
}

let infoAboutMaxwell: PersonInfo = {
  name: "Maxwell",
  age: 20,
  hasPet: false
}

infoAboutMaxwell.newinfo = "Hello";

infoAboutMaxwell.hasPet = true;

infoAboutMaxwell.hasPet = "false";

infoAboutMaxwell = {
  name: "Jack",
  age: 24,
  hasPet: true
}

infoAboutMaxwell = {
  firstName: "John",
  name: "Jack",
  age: 24,
  hasPet: true
}

// Optional Properties

enum Gender {
  Male, Female, Other
}

// type AccountInfo = {
//   account: string,
//   password: string,
//   nickname: string | undefined,
//   birth: Date | undefined,
//   gender: Gender | undefined,
//   subscribed: Boolean
// }

// let accountMaxwell: AccountInfo = {
//   account: "abc",
//   password: "hashed-password",
//   subscribed: false
// }

type SomeoneUnknown = {
  knows: undefined,
  identity: null
}

let anotherSomeone: SomeoneUnknown = {};

type AccountInfo = {
  account: string,
  password: string,
  nickname?: string,
  birth?: Date,
  gender?: Gender,
  subscribed: Boolean
}

let accountMaxwell: AccountInfo = {
  account: "abc",
  password: "hashed-password",
  subscribed: false
}

type AccountSystem = {
  account: string,
  password: string,
  subscribed: Boolean
}

type AccountPersonalInfo = {
  nickname?: string,
  birth?: Date,
  gender?: Gender
}

// Intersection
type PersonalAccount = AccountSystem & AccountPersonalInfo;

let accountMaxwell2: PersonalAccount = {
  account: "abc",
  password: "hashed-password",
  subscribed: false,
  birth: new Date(2017, 2, 10)
}

// Never type

let excutesForever = function forver() {
  while (true) {
  }
}

const randomNumber = Math.random() * 10;

let probablyExcutesForever = function (num: number) {
  while (num > 5) {

  }
}

probablyExcutesForever(randomNumber);
probablyExcutesForever(6);
probablyExcutesForever(4);

// any & unknown type

let anyType: any;
let unknownType: unknown;

anyType = 123;
anyType = "123";
anyType = false;
anyType = [1, 2, "a"];
anyType = function () { console.log(123) };
anyType = new Object();

unknownType = 123;
unknownType = "123";
unknownType = true;
unknownType = [1, 2, "a"];
unknownType = function () { console.log(123) };
unknownType = new Object();

let beAssignedString: string = "123";

beAssignedString = anyType;
beAssignedString = unknownType;

let isAny: any;
let isUnknown: unknown;

let isString: string;
let isNumber: number;
let isBoolean: boolean;
let isNull: null;
let isUndefined: undefined;
let isAKindOfObjectLiteral: { name: string, age: number };
let isAKindOfArray: number[];
let isAKindOfFuntion: () => void;
let isAKindOfObject: Object;

isString = isAny;
isNumber = isAny;
isBoolean = isAny;
isNull = isAny;
isUndefined = isAny;
isAKindOfObjectLiteral = isAny;
isAKindOfArray = isAny;
isAKindOfFuntion = isAny;
isAKindOfObject = isAny;

isString = isUnknown;
isNumber = isUnknown;
isBoolean = isUnknown;
isNull = isUnknown;
isUndefined = isUnknown;
isAKindOfObjectLiteral = isUnknown;
isAKindOfArray = isUnknown;
isAKindOfFuntion = isUnknown;
isAKindOfObject = isUnknown;

if (typeof isUnknown === "number") {
  isNumber = isUnknown;
}

isString = <string>isUnknown;

isAKindOfArray = isUnknown as number[];

isAny.KnockKnock;
isUnknown.Hello;

isAny.saysomething("hello");
isUnknown.raiseHand("yes");

let unknownObject: unknown = {
  hello: "hello",
  response: function (content: string) {
    console.log(content)
  }
}

type Unicorn = {
  hello: string,
  response: (content: string) => void;
}

unknownObject.hello;
unknownObject.response("hello");

(<Unicorn>unknownObject).hello;
(unknownObject as Unicorn).response("hello");

let unknownPrimitive: unknown = "12345";

parseInt(unknownPrimitive, 10);

if (typeof unknownPrimitive === "string") {
  parseInt(unknownPrimitive, 10);
}

function safelyParseJSON(jsonString: string): unknown {
  return JSON.parse(jsonString);
}

let randomJSONString = `{
  "a":"123",
  "b":123,
  "c":false
}`;

let parsedFromNormalJSONParse = JSON.parse(randomJSONString);
parsedFromNormalJSONParse.a;

let parsedFromSafelyJSONParse = safelyParseJSON(randomJSONString);
parsedFromSafelyJSONParse.a;

(parsedFromSafelyJSONParse as string).a;

type T00 = unknown & null; // null
type T01 = unknown & undefined; // undefined
type T02 = unknown & number; // number
type T03 = unknown & string; // string
type T04 = unknown & boolean; // boolean
type T05 = unknown & null & undefined; // never
type T06 = unknown & string[]; // string[]
type T07 = unknown & any; // any
type T08 = unknown & unknown; // unknown

type T09 = unknown | null;// unknown
type T10 = unknown | undefined;// unknown
type T11 = unknown | number;// unknown
type T12 = unknown | string;// unknown
type T13 = unknown | boolean;// unknown
type T14 = unknown | null | undefined;// unknown
type T15 = unknown | string[];// unknown
type T16 = unknown | any;// any
type T17 = unknown | unknown;// unknown