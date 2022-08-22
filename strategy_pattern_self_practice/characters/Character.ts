import Attack from "../abilities/Attack";
import Weapon from "../weapons/Weapon";
import Role from "./Role";

export default class Character {
  constructor(
    public readonly name: string,
    public readonly role: Role,
    protected weaponRef: Weapon
  ) {}

  public introduce() {
    console.log(`My name is ${this.name}, my role is ${this.role}`);
  }

  public switchAttackStrategy(type: Attack) {
    this.weaponRef.attackStrategy = type;
    console.log(`${this.name} switch attackStrategy to ${type.name}`);
  }

  public attack(target: Character) {
    this.weaponRef.attack(this, target);
  }

  public equip(weapon: Weapon) {
    if (
      weapon.availableRoles.length === 0 ||
      weapon.availableRoles.indexOf(this.role) != -1
    ) {
      this.weaponRef = weapon;
      console.log(`${this.name} equip ${weapon.name}!`);
    } else {
      throw new Error(`${this.name} cannot equip ${weapon.name}!`);
    }
  }

  public weaponInfo() {
    return this.weaponRef.name;
  }
}
