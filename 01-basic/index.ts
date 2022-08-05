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

let doesItWork3 = function doesItWork3(): undefined {};

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
