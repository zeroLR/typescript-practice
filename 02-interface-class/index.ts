// Origin type union
type Primitives = number | string | boolean | null | undefined;

// Any type array
type PrimitiveArray = Primitives[];

// Alias of function type
type OperatorFunc = (op1: Primitives, op2: Primitives) => unknown;

// Alias of object
type PersonalInfo = {
  name: string;
  age: number;
  hasPet: boolean;
};

// Alias of tuple
type VehicleInfo = [string, string, string, Date];

// Alias of enum
enum WeekDayEnum {
  Sun,
  Mon,
  Tue,
  Wed,
  Thu,
  Fri,
  Sat,
}
type WeekDayString = "Sun" | "Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat";
type WeekDayFormat = WeekDayEnum | WeekDayString;

// Objective
interface UserInfo {
  // Origin type
  id: number;
  name: string;

  // Object type
  birth: Date;
  interests: string[];

  // Enum
  gender: WebGLRenderbuffer;

  // Literal type
  address: {
    country: string;
    city: string;
    postalCode: string;
  };

  // Functional type
  logInfo(message: string): void;
}

// Only functional type
interface UpdateRecord {
  (id: number, newRecord: UserInfo): void;
}

/** Basic Interface usage */
// Define an interface
interface Person {
  name: string;
  age: number;
  hasPet: boolean;
}

// Interface
const joseph: Person = {
  name: "Joseph",
  age: 20,
  hasPet: false,
};

// Lost one key
const jack: Person = {
  name: "jack",
  age: 24,
};

// Extra one key
const leo: Person = {
  name: "Leo",
  age: 28,
  hasPet: false,
  job: "DevOps",
};

// Wrong type assigned
const toby: Person = {
  name: "Toby",
  age: 34,
  hasPet: "hello",
};

/** Detects the status of an object being inferred as a function parameter  */
// Used interface but not type alias
function printPersonInfo(person: Person) {
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
enum Gender { Male, Female, Other };

interface AccountSystem {
  email: string;
  password: string;
  subscribed: boolean;
}

interface AccountPersonalInfo {
  nickname?: string;
  birth?: Date;
  gender?: Gender;
}

interface UserAccount extends AccountSystem, AccountPersonalInfo { }

/** Use extend interface */
// Normal usage
let accountJoseph: UserAccount = {
  email: 'ceyang@example.com',
  password: 'hashed-password',
  subscribed: false,
  nickname: 'Joseph',
  gender: Gender.Male,
  // birth can be skiped because optional property
}

// Lost one key
let accountJack: UserAccount = {
  email: 'jack@example.com',
  password: 'hashed-password',
  nickname: 'jack',
  gender: Gender.Male
}


// Extra one key
let accountLin: UserAccount = {
  email: 'lin@example.com',
  password: 'hashed-password',
  subscribed: true,
  nickname: 'lin',
  gender: Gender.Female,
  hasPet: false
}

/** Union of interface */
interface I1 { a: string; b: number; }
interface I2 { b: number; c: boolean; }
interface I3 { a: string; c: string; }

interface I12 extends I1, I2 { }
interface I23 extends I2, I3 { }
interface I13 extends I1, I3 { }
interface I123 extends I1, I2, I3 { }

/** Function can be overload in interface */
interface AddOperation {
  addition(p1: number, p2: number): number;
  addition(p1: string, p2: string): number;
}

const implementAddition: AddOperation = {
  addition(p1: number | string, p2: number | string) {
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
}

console.log(implementAddition.addition(123, 456))
console.log(implementAddition.addition("123", "456"))
console.log(implementAddition.addition("123", 456))

/** Other case */
// Type of variables and call back are same
interface AddOperation1 {
  add(p1: number, p2: number): number;
  add(p1: number, p2: number): number;
}

// Type of call back are different, but variables are same
interface AddOperation2 {
  add(p1: number, p2: number): number;
  add(p1: number, p2: number): string;
}

// Num of variables are different
interface AddOperation2 {
  app(p1: number): number;
  add(p1: number, p2: number): number;
}

/** Interface Merging */
// Block-Level Elements
interface MyDocument {
  createElement(tag: 'p'): HTMLParagraphElement;
  createElement(tag: 'body'): HTMLBodyElement;
  createElement(tag: 'div'): HTMLDivElement;
}

// Inline-Level Elements
interface MyDocument {
  createElement(tag: 'a'): HTMLAnchorElement;
  createElement(tag: 'span'): HTMLSpanElement;
  createElement(tag: 'input'): HTMLInputElement;
}

// Third party library Definition File
namespace StupidFramework {
  interface StupidRequest {
    headers: Header[];
    body: Body;
    url: string;
    method: 'GET' | 'POST' | 'DELETE';
  }
}

// Our project file
type Dictionary = { [propName: string]: string };

namespace StupidFramework {
  interface StupidRequest {
    query?: Dictionary;
  }
}

// Define type as array, type of variable is string
interface StringTypedList {
  [index: number]: string;
}

// Normal dictionary
let normalDictionary: Dictionary = {
  hello: 'world',
  thisFeature: 'is crazy'
}

// Empty dictionary
let emptyDictionary: Dictionary = {};

// Wrong usage

let wrongDictionary: Dictionary = {
  hello: 123,
  thisFeature: true,
  withFunction() {
    console.log('Wrong type!');
  },
  nestedDictionary: { hello: 123 }
}

let stringTypedArray: StringTypedList = {
  123: 'Hello',
  [456]: 'Hi'
}

let emptyStringTypedArray: StringTypedList = {};

let stringTypedArrayLiteral: StringTypedList = [1, 2, 3];

let emptyStringTypedArray2: StringTypedList = [];

stringTypedArray[0];
stringTypedArray[1];

let wrongStringTypedArray: StringTypedList = {
  message: 'Hello',
  thisFeature: true
}

stringTypedArray['hello'];

stringTypedArray.hello;


type UseBotheKeyType = {
  [key: number]: string,
  [key: string]: number
}

type UserInfo2 = {
  name: string,
  [prop: string]: string;
}

type UserInfo3 = {
  name: string,
  birth: Date,
  [prop: string]: string;
}

/** Read only property*/
type TAccountUserWithReadonlyProperty = {
  readonly email: string,
  readonly password: string,
  name?: string,
  age?: number
}

interface IAccountUserWithReadonlyProperty {
  readonly email: string;
  readonly password: string;
  name?: string;
  age?: number;
}

let sampleAccount: TAccountUserWithReadonlyProperty = {
  email: 'joseph@example.com',
  password: 'hashed-password',
  name: 'Joseph'
}

sampleAccount.email;

sampleAccount.email = 'new@example.com';

/** Hybrid Type Interface */
interface Counter {
  // pure functional
  (start: number): void;

  // narrow objective
  increment(): number;
  reset(): void;
  value: number;
}

function createCounter(): Counter {
  let value: number;
  let initializerNumber: number;

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
const counter: Counter = createCounter();

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

interface IOptionalProp {
  message?: string;
}

type TOptionalProp = {
  message?: string;
}

interface IFunctionOverload {
  createElement(name: 'a'): HTMLAnchorElement;
  createElement(name: 'p'): HTMLParagraphElement;
}

type TFunctionOverload = {
  createElement(name: 'a'): HTMLAnchorElement;
  createElement(name: 'p'): HTMLParagraphElement;
}

interface IStringTypeDict {
  [prop: string]: string;
}

type TStringDict = {
  [prop: string]: string;
}