interface PersonInfo {
  name: string;
  age: number;
  hasPet: boolean;
  printInfo(): void;
}

let joseph: PersonInfo = {
  name: "joseph",
  age: 25,
  hasPet: false,
  printInfo() {
    console.log(`
    Name: ${this.name}
    Age: ${this.age}
    Owns a pet? ${this.hasPet}
    `);
  },
};

let jack: PersonInfo = {
  name: "jack",
  age: 23,
  hasPet: true,
  printInfo() {
    console.log(`
      Name: ${this.name}
      Age: ${this.age}
      Owns a pet? ${this.hasPet}
      `);
  },
};

// Turn PersonInfo into class
class CPersonInfo {
  name: string = "joseph";
  age: number = 25;
  hasPet: boolean = false;

  printInfo() {
    console.log(`
      Name: ${this.name}
      Age: ${this.age}
      Owns a pet? ${this.hasPet}
      `);
  }
}

let josephInfoFromClass = new CPersonInfo();
console.log(josephInfoFromClass);

josephInfoFromClass.printInfo();

class CustomPersonInfo {
  name: string;
  age: number;
  hasPet: boolean;

  // constructor function
  constructor(
    name: string = "joseph",
    age: number = 25,
    hasPet: boolean = false
  ) {
    this.name = name;
    this.age = age;
    this.hasPet = hasPet;
  }

  printInfo() {
    console.log(`
      Name: ${this.name}
      Age: ${this.age}
      Owns a pet? ${this.hasPet}
      `);
  }
}

let jackInfoFromClass = new CustomPersonInfo("Jack", 23, true);

console.log(jackInfoFromClass);
jackInfoFromClass.printInfo();

let defaultInfoFromClass = new CustomPersonInfo();

console.log(defaultInfoFromClass);
defaultInfoFromClass.printInfo();

let wrongCustomInfo = new CustomPersonInfo("hello", "123", false);

let correctCustomInfo = new CustomPersonInfo("Lin", 30, true);

// call not exist props
// correctCustomInfo.inexistedProps;

// call not exist method
// correctCustomInfo.inexistedMethod();

/** Access Modifiers */

// ATM example
// define type of user info
type TUserAccount = {
  account: string;
  password: string;
  money: number;
};

// define interface of ATM
interface ICashMachine {
  deposit(amount: number): void;

  withdraw(amount: number): void;

  //   users: TUserAccount[];

  //   currentUser: TUserAccount | undefined;

  signIn(account: string, password: string): void;

  signOut(): void;
}

// define interface of account system
interface AccountSystem {
  //   users: TUserAccount[];

  //   currentUser: TUserAccount | undefined;

  signIn(account: string, password: string): void;

  signOut(): void;
}

// define interface of transaction system
interface TransactionSystem {
  deposit(amount: number): void;

  withdraw(amount: number): void;
}

// define interface of ATM complete system
interface ICashMachine extends TransactionSystem, AccountSystem { }

// implement ICashMachine interface
class CashMachine implements ICashMachine {
  // fake users
  // private users: TUserAccount[] = [
  //   { account: "Joseph", password: "123", money: 12345 },
  //   { account: "Jack", password: "456", money: 77777 },
  //   { account: "Lin", password: "789", money: 6666666 },
  // ];

  //   private users: TUserAccount[];

  //   constructor(
  //     users: TUserAccount[] = [
  //       { account: "Joseph", password: "123", money: 12345 },
  //       { account: "Jack", password: "456", money: 77777 },
  //       { account: "Lin", password: "789", money: 6666666 },
  //     ]
  //   ) {
  //     this.users = users;
  //   }

  constructor(
    private users: TUserAccount[] = [
      { account: "Joseph", password: "123", money: 12345 },
      { account: "Jack", password: "456", money: 77777 },
      { account: "Lin", password: "789", money: 6666666 },
    ]
  ) { }

  private currentUser: TUserAccount | undefined;

  public signIn(account: string, password: string) {
    // here can replace code as Array.prototype.find(ES6 syntax)
    for (let i = 0; i < this.users.length; i += 1) {
      const user = this.users[i];
      if (user.account === account && user.password === password) {
        this.currentUser = user;
        break;
      }
    }

    if (this.currentUser === undefined) {
      throw new Error("User not found");
    }
  }

  public signOut(): void {
    // clear current user
    this.currentUser = undefined;
  }

  public deposit(amount: number): void {
    if (this.currentUser !== undefined) {
      this.currentUser.money += amount;
    } else {
      throw new Error("No user signed in!");
    }
  }

  public withdraw(amount: number): void {
    if (this.currentUser !== undefined) {
      this.currentUser.money -= amount;
    } else {
      throw new Error("No user signed in!");
    }
  }
}

let myCashMachine = new CashMachine();
console.log(myCashMachine);

function printAccountInfo(input: TUserAccount | undefined) {
  if (input === undefined) {
    console.log("No user found!");
  } else {
    console.log(`
        Current User: ${input.account}
        Money: ${input.money}
        `);
  }
}

// initial a new ATM
const machine = new CashMachine();
console.log("Initialized: ");
printAccountInfo(machine.currentUser);

// Login
machine.signIn("Joseph", "123");
console.log("Signed In: ");
printAccountInfo(machine.currentUser);

// Afrter withdrawal
machine.withdraw(5000);
console.log("After wthdrawal: ");
printAccountInfo(machine.currentUser);

// Logout
machine.signOut();
console.log("Signed Out: ");
printAccountInfo(machine.currentUser);

/** TrafficTicketSystem Example*/
// Use enum to enumerate type of ticket
enum TransportTicketType {
  Train,
  MRT,
  Aviation,
}

// Use tuple,each indicate hours, minutes,seconds
type TimeFormat = [number, number, number];

// Define class of ticket system
class TicketSystem {
  constructor(
    private type: TransportTicketType,
    protected startingPoint: string,
    protected destination: string,
    private departureTime: Date
  ) { }

  // Caculate derive time
  protected deriveDuration(): TimeFormat {
    return [1, 0, 0];
  }

  // Caculate arrival time
  private deriveArrivalTime(): Date {
    // const departureTime = this.departureTime;
    const { departureTime } = this;

    // Derive total milliseconds from duration
    const [hours, minutes, seconds] = this.deriveDuration();
    const durationSeconds = hours * 60 * 60 + minutes * 60 + seconds;
    const durationMilliseconds = durationSeconds * 1000;

    // Derive arrival time
    const arrivalMilliseconds = departureTime.getTime() + durationMilliseconds;
    return new Date(arrivalMilliseconds);
  }

  public getTicketInfo() {
    // get key name from value
    const ticketName = TransportTicketType[this.type];
    const arrivalTime = this.deriveArrivalTime();

    console.log(`
    Ticket Type: ${ticketName}
    Station:     ${this.startingPoint} - ${this.destination}
    Departure:   ${this.departureTime}
    Arrival:     ${arrivalTime}
    `);
  }
}

// Make a train ticket
const randomTicket = new TicketSystem(
  // Train
  TransportTicketType.Train,

  // Start
  "Tainan",

  // Arrival
  "Kaohsiung",

  // Start time
  new Date(2019, 8, 1, 9, 0, 0)
);

randomTicket.getTicketInfo();

/** Create train ticket classes using class inheritance */
type TrainStation = {
  name: string;
  nextStop: string;
  duration: TimeFormat;
};

class TrainTicket extends TicketSystem {
  // Constructor of child class
  constructor(startingPoint: string, destination: string, departureTime: Date) {
    // Use super assigned initial value to parent constructor
    super(TransportTicketType.Train, startingPoint, destination, departureTime);
  }
  private static stops: string[] = [
    "Pingtung",
    "Kaohsiung",
    "Tainan",
    "Taichung",
    "Hsinchu",
    "Taipei",
  ];

  private static trainStationDetail: TrainStation[] = [
    { name: "Pingtung", nextStop: "Kaohsiung", duration: [2, 30, 0] },
    { name: "Kaohsiung", nextStop: "Tainan", duration: [1, 45, 30] },
    { name: "Tainan", nextStop: "Taichung", duration: [3, 20, 0] },
    { name: "Taichung", nextStop: "Hsinchu", duration: [2, 30, 30] },
    { name: "Hsinchu", nextStop: "Taipei", duration: [1, 30, 30] },
  ];

  private isStopExixt(stop: string): boolean {
    for (let i = 0; i < TrainTicket.stops.length; i += 1) {
      const existedStop = TrainTicket.stops[i];
      if (existedStop === stop) return true;
    }

    return false;
  }

  protected deriveDuration(): TimeFormat {
    // Must get start and destination
    const { startingPoint, destination } = this;

    // Make sure station is reasonable
    if (this.isStopExixt(startingPoint) && this.isStopExixt(destination)) {
      let time: TimeFormat = [0, 0, 0];
      let stopFound = false;

      /**1. Caculate time between station */
      for (let i = 0; i < TrainTicket.trainStationDetail.length; i += 1) {
        const detail = TrainTicket.trainStationDetail[i];

        // Not found start point yet, but find name, grand total time
        if (!stopFound && detail.name === startingPoint) {
          stopFound = true;
          time[0] += detail.duration[0];
          time[1] += detail.duration[1];
          time[2] += detail.duration[2];
        }

        // Find start point
        else if (stopFound) {
          // keep grand total time
          time[0] += detail.duration[0];
          time[1] += detail.duration[1];
          time[2] += detail.duration[2];

          // But if next station is goal, break the loop
          if (detail.nextStop === destination) break;
        }
      }

      /**2. Format time */
      // 1 minute every 60 seconds
      let minutes = Math.floor(time[2] / 60);
      time[1] += minutes;
      time[2] -= minutes * 60;

      // 1 hour every 60 minutes
      let hours = Math.floor(time[1] / 60);
      time[0] += hours;
      time[1] -= hours * 60;

      // Return time as TimeFormat type
      return time;
    }

    // Edge case of `never`
    throw new Error("Wrong stop name! Please check again!");
  }
}

const trainTicket = new TrainTicket(
  "Tainan",
  "Taipei",
  new Date(2019, 8, 1, 9, 0, 0)
);

trainTicket.getTicketInfo();

/** How super works */
// parent class
class TestParentClass {
  constructor(public p1: number, public p2: string, public p3: boolean) { }
}

// correct case
class TestChildClass1 extends TestParentClass {
  constructor(p1Child: number, p2Child: string, p3Child: boolean) {
    super(p1Child, p2Child, p3Child);
  }
}

const objFromChildClass1 = new TestChildClass1(123, "hello", true);
console.log(objFromChildClass1);

// wrong case
class TestChildClass2 extends TestParentClass { }

const objFromChildClass2 = new TestChildClass2();
console.log(objFromChildClass2);

/** Static Properties & Methods */

/** Geometric circle class */
class CircleGeometry {
  private PI: number = 3.14;

  // initial value: radius
  constructor(public radius: number) { }

  // calculate area of circle
  public area(): number {
    return this.PI * this.radius ** 2;
  }

  // calculate circumference
  public circumference(): number {
    return 2 * this.PI * this.radius;
  }
}

const myCircle = new CircleGeometry(2);

console.log(myCircle.area());

console.log(myCircle.circumference());

/** Geometric circle class of static properties */
class StaticCircleGeometry {
  static readonly PI: number = 3.14;

  // no need initial value
  // constructor(public radius: number){}

  // calculate area of circle
  static area(radius: number): number {
    return StaticCircleGeometry.PI * radius ** 2;
  }

  // calculate circumference
  static circumference(radius: number): number {
    return 2 * StaticCircleGeometry.PI * radius;
  }
}

console.log(StaticCircleGeometry.PI);
console.log(StaticCircleGeometry.area(5));
console.log(StaticCircleGeometry.circumference(10));

StaticCircleGeometry.PI = 123;

// static method can be override
StaticCircleGeometry.area = function (): number {
  return 0;
};
console.log(StaticCircleGeometry.area(123));

Math.abs = function (): number {
  return 0;
};
console.log(Math.abs(-123));

/** Class Accessors */
class CircleGeometryV2 {
  public readonly PI: number = 3.14;

  static readonly staticPI: number = 3.14;

  // initial value: radius
  constructor(public radius: number) { }

  // use Getter Method
  get area() {
    return this.PI * this.radius ** 2;
  }

  // use Setter Method
  set area(value: number) {
    this.radius = (value / this.PI) ** 0.5;
  }

  // Caculate circumference
  //   public circumference(): number {
  //     return 2 * this.PI * this.radius;
  //   }
  get circumference() {
    return 2 * this.PI * this.radius;
  }
}

const randomCircle = new CircleGeometryV2(2);

console.log(randomCircle.area);

// getter accessor is read-only
// randomCircle.area = 12345;

randomCircle.radius = 3;

console.log(randomCircle.area);

console.log(randomCircle.circumference);

const anotherRandomCircle = new CircleGeometryV2(2);

console.log(anotherRandomCircle.radius);

console.log(anotherRandomCircle.area);

anotherRandomCircle.area = 3.14 * 5 ** 2;

console.log(anotherRandomCircle.radius);

anotherRandomCircle.area = "12345";

anotherRandomCircle.PI;
anotherRandomCircle.PI = 123;

CircleGeometryV2.staticPI;
CircleGeometryV2.staticPI = 123;

/** Private Constructor & Singleton Pattern */
class ConstructIsForbidden {
  private constructor() { }
}

let forbiddenObject = new ConstructIsForbidden();

/** Singleton Pattern */
class SingletonPerson {
  // this private constructor has someone's data
  // data is public but readonly
  private constructor(
    public readonly name: string,
    public readonly age: number,
    public readonly hasPet: boolean
  ) { }

  private static Instance: SingletonPerson = new SingletonPerson(
    "Joseph",
    20,
    false
  );

  static getInstance(): SingletonPerson {
    return this.Instance;
  }
}

// get the only object from singleton
const uniquePerson = SingletonPerson.getInstance();

console.log(uniquePerson);
console.log(uniquePerson.name);
console.log(uniquePerson.age);
console.log(uniquePerson.hasPet);

/** Lazy Initialization in Singleton Pattern */
class LazySingletonPerson {
  private constructor(
    public readonly name: string,
    public readonly age: number,
    public readonly hasPet: boolean
  ) { }

  private static Instance: LazySingletonPerson | null = null;

  static getInstance(): LazySingletonPerson {
    if (this.Instance === null) {
      this.Instance = new LazySingletonPerson("Joseph", 20, false);
    }

    return this.Instance;
  }
}

/** Type Inference in Class */
enum Color {
  White,
  Black,
  Brown,
  Grey,
  Rainbow,
}

class Horse {
  constructor(
    public name: string,
    public color: Color,
    public readonly type: string,
    private noise: string = "MeeeeeeeeeeeeeeEeeee~"
  ) { }

  public makeNoise() {
    console.log(this.noise);
  }

  public info() {
    console.log(this.infoText);
  }

  protected infoText(): string {
    return `It is ${this.name} the ${Color[this.color]} ${this.type}`;
  }
}

let myHorse = new Horse("Martin", Color.Black, "Pony");

myHorse.color = "Red";

myHorse.isNature = false;

myHorse = null;

myHorse = new Horse("Toby", Color.Brown, "Stallion");

/** Type Annotation of Class */
let certainlyAHorsie: Horse = new Horse("Leo", Color.Black, "Bronco");

let certainlyAnotherHorsie = <Horse>new Horse("Wendy", Color.White, "Mustang");

let certainlyTheOtherHorsie = new Horse("Alexius", Color.Grey, "Foal") as Horse;

/** Inheriance Class Example*/
class Unicorn extends Horse {
  constructor(name: string) {
    super(name, Color.Rainbow, "Mystical Unicorn", "Nheeeeee~");
  }

  protected infoText(): string {
    return `It's a mystical unicorn! Its name is ${this.name}!`;
  }

  public puke(): void {
    console.log("Puking rainbow vomit!");
  }
}

/** Inference after child class inheriance */
let aRandomUnicorn = new Unicorn("Leo");

// Annotation as Horse, but assigned to its child class
let anotherHose: Horse = new Unicorn("Leo");

aRandomUnicorn.puke();

anotherHose.puke();

let shouldBeUnicorn: Unicorn = new Horse(
  "Leo",
  Color.Rainbow,
  "Mystical Unicorn",
  "Nyeeeeeee~"
);

class Stallion extends Horse {
  constructor(name: string) {
    super(name, Color.Brown, "Stallion");
  }
}

let shouldBeStallion: Stallion = new Horse("Leo", Color.Brown, "Stallion");

class C1 {
  constructor(public prop: string) { }

  public publicMethod(): string {
    return this.prop;
  }
}

class C2 {
  constructor(public prop: string) { }

  public publicMethod(): string {
    return this.prop;
  }
}

let someObject: C1 = new C2("123");

class AnotherC1 {
  constructor(public prop: string, private privateProp: number) { }

  public publicMethod(): number {
    return this.privateProp;
  }

  private privateMethod(): number {
    return this.privateProp;
  }
}

class AnotherC2 {
  constructor(public prop: string, private privateProp: number) { }

  public publicMethod(): number {
    return this.privateProp;
  }

  private privateMethod(): number {
    return this.privateProp;
  }
}

let otherObject: AnotherC1 = new AnotherC2("123", 123);

type TA = { hello: string };
type TB = { hello: string };

interface IA {
  hello: string;
}

interface IB {
  hello: string;
}

function logTypeA(obj: TA) {
  console.log(obj);
}

logTypeA(<TA>{ hello: "World" });
logTypeA(<TB>{ hello: "World" });
logTypeA(<IA>{ hello: "World" });
logTypeA(<IB>{ hello: "World" });

/** Type x Interface */
enum Role {
  Swordsman = "Swordsman",
  Warlock = "Warlock",
  Highwayman = "Highwayman",
  BountyHunter = "Bounty Hunter",
  Monster = "Monster",
}

interface ICharacter {
  name: string;
  role: Role;
  attack(target: ICharacter): void;
}

interface IStats {
  health: number;
  mana: number;
  strength: number;
  defense: number;
}

// Implements character with interface
class Character implements ICharacter, IStats {
  //   public health: number = 50;
  //   public mana: number = 10;
  //   public strength: number = 10;
  //   public defense: number = 5;
  constructor(
    public name: string,
    public role: Role,
    public health: number = 50,
    public mana: number = 10,
    public strength: number = 10,
    public defense: number = 5
  ) { }

  public attack(target: ICharacter): void {
    let verb: string;

    switch (this.role) {
      case Role.Swordsman:
        verb = "attacking";
        break;
      case Role.Warlock:
        verb = "cursing";
        break;
      case Role.Highwayman:
        verb = "ambushing";
        break;
      case Role.BountyHunter:
        verb = "threatening";
        break;
      default:
        throw new Error(`${this.role} didn't exist!`);
    }
    console.log(`${this.name} is ${verb} ${target.name}!`);
  }
}

class Monster implements ICharacter {
  public role = Role.Monster;

  constructor(public name: string) { }

  public attack(target: ICharacter): void {
    console.log(
      `${this.name} is attacking the ${target.role} - ${target.name}`
    );
  }
}

const character1 = new Character("Joseph", Role.Swordsman, 100, 20, 15, 15);
const character2 = new Character("Jack", Role.Highwayman, 80, 25, 10, 20);

character1.attack(character2);
character2.attack(character1);
console.log(character1);
console.log(character2);

let certainlyACharacter: ICharacter = new Character("Joseph", Role.Highwayman);

character1.name;
character1.health;

certainlyACharacter.name;
certainlyACharacter.health;

let aHumanCharacter = new Character("Joseph", Role.Swordsman);
let aMonster = new Monster("Sticky Slime");

aHumanCharacter.attack(aMonster);
aMonster.attack(aHumanCharacter);

class BountyHunter extends Character {
  public hostages: ICharacter[] = [];

  constructor(name: string) {
    super(name, Role.BountyHunter);
  }

  public capture(target: ICharacter, successRate: number) {
    const randomNumber = Math.random();
    let message: string;
    let targetTitle = `${target.name} the ${target.role}`;

    if (randomNumber > 1 - successRate) {
      this.hostages = [...this.hostages, target];

      message = `${this.name} has captured ${targetTitle}`;
    } else {
      message = `${this.name} failed to capture ${targetTitle}`;
    }

    console.log(message);
  }
  public sellHostages() {
    const totalPrice = this.hostages.length * 1000;
    const hostagesInfo = this.hostages
      .map((hostage) => `${hostage.name} the ${hostage.role}`)
      .join("\n");

    console.log(`${this.name} sells all the hostages, including: 
      ${hostagesInfo}
      
      Recevie Gold: $${totalPrice}
      `);

    this.hostages = [];
  }
}

const bountyHunter = new BountyHunter("Joseph");

const wantedCharacter = new Character("Jack", Role.Highwayman);

const wantedMonster = new Monster("Eikthyrnir");

const desperado = new Character("Legendary Joe", Role.Highwayman);

bountyHunter.capture(wantedCharacter, 1);

bountyHunter.capture(wantedMonster, 0.5);

bountyHunter.capture(desperado, 0.01);

bountyHunter.sellHostages();

wantedCharacter.attack(bountyHunter);
wantedMonster.attack(bountyHunter);

const anyCharacter: ICharacter = new BountyHunter("Alexius");

anyCharacter.capture(wantedMonster, 0.5);
