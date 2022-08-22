import MagicAttack from "./abilities/MagicAttack";
import StabAttack from "./abilities/StabAttack";
import Swordsman from "./characters/Swordsman";
import Warlock from "./characters/Warlock";
import BasicWand from "./weapons/BasicWand";
import Dagger from "./weapons/Dagger";

// const swordsman = new Character("Joseph", Role.Swordsman);
// const warlock = new Character("Lisa", Role.Warlock);

const swordsman = new Swordsman("Joseph");
const warlock = new Warlock("Lisa");

// swordman.introduce();
// warlock.introduce();

// Using Default: MeleeAttack
// console.log("Using MeleeAttack: ");
// swordsman.attack(warlock);

// Switch to StabAttack
// swordsman.switchAttackStrategy(new StabAttack());

// Using New Strategy: StabAttack
// console.log("Using StabAttack: ");
// swordsman.attack(warlock);

// warlock.attack(swordsman);

// use initial weapon
// console.log("Using BasicSword - MeleeAttack: ");
// swordsman.attack(warlock);

// switch to Dagger
// swordsman.equip(new Dagger());

// console.log("Using Dagger - StabAttack: ");
// swordsman.attack(warlock);

// warlock.equip(new Dagger());
// warlock.attack(swordsman);

// switch to BasicWand will get exception, because Swordsman cannot use it
// try {
//   swordsman.equip(new BasicWand());
// } catch (error) {
//   console.log(error);
// }

// swordsman equip Dagger
swordsman.equip(new Dagger());

// swordsman use default attack warlock
swordsman.attack(warlock);

// swordsman change attack strategy
swordsman.switchAttackStrategy(new MagicAttack());

// attack again
swordsman.attack(warlock);
