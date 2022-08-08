"use strict";
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
let absoluteNothing = undefined;
let literallyAbsoluteNothing = null;
absoluteNothing = 123;
literallyAbsoluteNothing = "hello";
let canBeNullableString;
let myString = canBeNullableString;
canBeNullableString = "hello";
let absoluteEitherNullOrString = null;
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
let justAnObject = { a: "b" };
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
const addition2 = function (num1, num2) {
    return num1 + num2;
};
let aJsonString = '{"a":123,"b":"c"}';
let parsedJSON = JSON.parse(aJsonString);
let parsedJSON1 = JSON.parse(aJsonString);
let parsedJSON2 = JSON.parse(aJsonString);
let parsedJSON3 = JSON.parse(aJsonString);
let addition3 = function (parm1, parm2) {
    return parm1 + parm2;
};
addition3 = function (parm1, parm2) {
    return parm2 + parm1;
};
addition3 = function (parm1, parm2) {
    return parm1 + parm2;
};
addition3 = function (parm1, parm2) {
    parm1 + parm2;
};
let doesItWork1 = function doesItWork1() {
    return undefined;
};
let doesItWork2 = function doesItWork2() {
    return undefined;
};
let doesItWork3 = function doesItWork3() { };
let doesItWork4 = function doesItWork4() {
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
let canBeEitherNullOrNumber = [1, 2, 3];
canBeEitherNullOrNumber.splice(2, 0, null);
let Numbers = [1, 2, 3, 4, 5];
let mappedNumbers = Numbers.map(num => num * 2);
mappedNumbers = Numbers.map(num => num + "1");
let mappedNumbersAndString = Numbers.map(num => num + "123");
let BMWMotor = ["BMW", "motorcycle", "silver", new Date(2019, 2, 17)];
let jaguarOffRoad = ["Jaguar", "off-road", "royal-blue", new Date(2019, 1, 9)];
let ToyotaRV = ["Toyota", "recreational", "ivory-white", new Date(2019, 3, 15)];
let v1 = ["a", "b", 1, new Date(2022, 1, 1)];
let v2 = [new Date(2022, 1, 1), "a", "b", "c"];
let v3 = ["a", "b", "c", new Date(2022, 1, 1), "a"];
let v4 = ["a", "b", "c"];
let WTFVehicle = ["taxi", "yellow", "Toyota", new Date(2019, 2, 17)];
let BMWMotor2 = {
    brand: "BMW",
    type: "motorcycle",
    color: "silver",
    manufactureDate: new Date(2019, 2, 17)
};
// Enumerated Type
var WeekDay;
(function (WeekDay) {
    WeekDay[WeekDay["Sunday"] = 0] = "Sunday";
    WeekDay[WeekDay["Monday"] = 1] = "Monday";
    WeekDay[WeekDay["Tuesday"] = 2] = "Tuesday";
    WeekDay[WeekDay["Wednesday"] = 3] = "Wednesday";
    WeekDay[WeekDay["Thursday"] = 4] = "Thursday";
    WeekDay[WeekDay["Friday"] = 5] = "Friday";
    WeekDay[WeekDay["Saturday"] = 6] = "Saturday";
})(WeekDay || (WeekDay = {}));
;
let weekDayOfBirthday = WeekDay.Monday;
let TGIF = WeekDay.Friday;
console.log(typeof TGIF);
let keyofTGIF = WeekDay[TGIF];
console.log(typeof keyofTGIF);
