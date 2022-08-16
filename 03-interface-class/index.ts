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
interface ICashMachine extends TransactionSystem, AccountSystem {}

// implement ICashMachine interface
class CashMachine implements ICashMachine {
  // fake users
  private users: TUserAccount[];

  constructor(
    users: TUserAccount[] = [
      { account: "Joseph", password: "123", money: 12345 },
      { account: "Jack", password: "456", money: 77777 },
      { account: "Lin", password: "789", money: 6666666 },
    ]
  ) {
    this.users = users;
  }

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
