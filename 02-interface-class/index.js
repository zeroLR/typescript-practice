"use strict";
// Alias of enum
var WeekDayEnum;
(function (WeekDayEnum) {
    WeekDayEnum[WeekDayEnum["Sun"] = 0] = "Sun";
    WeekDayEnum[WeekDayEnum["Mon"] = 1] = "Mon";
    WeekDayEnum[WeekDayEnum["Tue"] = 2] = "Tue";
    WeekDayEnum[WeekDayEnum["Wed"] = 3] = "Wed";
    WeekDayEnum[WeekDayEnum["Thu"] = 4] = "Thu";
    WeekDayEnum[WeekDayEnum["Fri"] = 5] = "Fri";
    WeekDayEnum[WeekDayEnum["Sat"] = 6] = "Sat";
})(WeekDayEnum || (WeekDayEnum = {}));
// Interface
const joseph = {
    name: "Joseph",
    age: 20,
    hasPet: false,
};
// Lost one key
const jack = {
    name: "jack",
    age: 24,
};
// Extra one key
const leo = {
    name: "Leo",
    age: 28,
    hasPet: false,
    job: "DevOps",
};
// Wrong type assigned
const toby = {
    name: "Toby",
    age: 34,
    hasPet: "hello",
};
/** Detects the status of an object being inferred as a function parameter  */
// Used interface but not type alias
function printPersonInfo(person) {
    console.log(`Name: ${person.name}`);
    console.log(`Age is: ${person.age}`);
    console.log(`Owns a pet? ${person.hasPet}`);
}
// Use object with literal
printPersonInfo({
    name: "Joseph",
    age: 25,
    hasPet: false,
    job: "Front-End",
    nothingSpecial: null,
});
// Object assigned to variable
let infoJoseph = {
    name: "Joseph",
    age: 25,
    hasPet: false,
    job: "Front-End",
    nothingSpecial: null,
};
printPersonInfo(infoJoseph);
/** Interface Extension */
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
    Gender[Gender["Other"] = 2] = "Other";
})(Gender || (Gender = {}));
;
/** Use extend interface */
// Normal usage
let accountJoseph = {
    email: 'ceyang@example.com',
    password: 'hashed-password',
    subscribed: false,
    nickname: 'Joseph',
    gender: Gender.Male,
    // birth can be skiped because optional property
};
// Lost one key
let accountJack = {
    email: 'jack@example.com',
    password: 'hashed-password',
    nickname: 'jack',
    gender: Gender.Male
};
// Extra one key
let accountLin = {
    email: 'lin@example.com',
    password: 'hashed-password',
    subscribed: true,
    nickname: 'lin',
    gender: Gender.Female,
    hasPet: false
};
const implementAddition = {
    addition(p1, p2) {
        if (typeof p1 === 'number' && typeof p2 === 'number') {
            return p1 + p2;
        }
        else if (typeof p1 === 'string' && typeof p2 === 'string') {
            return parseInt(p1, 10) + parseInt(p2, 10);
        }
        // throw new Error('Parameter p1 and p2 should only accept both number type or string type.')
        else {
            return 0;
        }
    }
};
console.log(implementAddition.addition(123, 456));
console.log(implementAddition.addition("123", "456"));
console.log(implementAddition.addition("123", 456));
// Normal dictionary
let normalDictionary = {
    hello: 'world',
    thisFeature: 'is crazy'
};
// Empty dictionary
let emptyDictionary = {};
// Wrong usage
let wrongDictionary = {
    hello: 123,
    thisFeature: true,
    withFunction() {
        console.log('Wrong type!');
    },
    nestedDictionary: { hello: 123 }
};
let stringTypedArray = {
    123: 'Hello',
    [456]: 'Hi'
};
let emptyStringTypedArray = {};
let stringTypedArrayLiteral = [1, 2, 3];
let emptyStringTypedArray2 = [];
stringTypedArray[0];
stringTypedArray[1];
let wrongStringTypedArray = {
    message: 'Hello',
    thisFeature: true
};
stringTypedArray['hello'];
stringTypedArray.hello;
let sampleAccount = {
    email: 'joseph@example.com',
    password: 'hashed-password',
    name: 'Joseph'
};
sampleAccount.email;
sampleAccount.email = 'new@example.com';
function createCounter() {
    let value;
    let initializerNumber;
    // implement pure functional
    // const counter = (function (startNumber: number) {
    //   initializerNumber = startNumber;
    //   value = startNumber;
    // }) as Counter;
    // implement narrow objective
    counter.increment = function () {
        value++;
        return value;
    };
    counter.reset = function () {
        value = initializerNumber;
    };
    Object.defineProperty(counter, 'value', {
        get() { return value; }
    });
    return counter;
}
// Create a counter object
const counter = createCounter();
counter(5); // initial value 5
// Call value from Interface Counter
console.log(counter.value); // output must be 5
// Call increment from Interface Counter three times
counter.increment();
counter.increment();
counter.increment();
// Call value from Interface Counter again
console.log(counter.value);
// Call reset from Interface Counter
counter.reset();
// Call value from Interface Counter again
console.log(counter.value);
