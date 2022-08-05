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
someone.knows = "123";
