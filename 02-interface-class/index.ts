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
