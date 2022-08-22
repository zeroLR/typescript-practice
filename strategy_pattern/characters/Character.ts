import Attack from "../abilities/Attack";
import Weapon from "../weapons/Weapon";
import Role from "./Role";

export default class Character {
  constructor(
    public readonly name: string,
    public readonly role: Role,
    private weaponRef: Weapon
  ) {}

  public introduce() {
    console.log(`My name is ${this.name}, I'm a ${this.role}`);
  }

  // character can equip
  public equip(weapon: Weapon) {
    const { availableRoles: roles } = weapon;

    if (roles.length === 0 || roles.indexOf(this.role) !== -1) {
      // if character can equip, change weaponRef and attackStrategy
      console.log(`${this.name} has equipped "${weapon.name}"`);
      this.weaponRef = weapon;
      //   this.attackRef = this.weaponRef.attackStrategy;
    } else {
      // Throw error if role can't equip
      throw new Error(`${this.role} cannot equip ${weapon.name}!`);
    }
  }

  public switchAttackStrategy(type: Attack) {
    this.weaponRef.switchAttackStrategy(type);
  }

  public attack(target: Character) {
    this.weaponRef.attack(this, target);
  }
}
