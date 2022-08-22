import Attack from "../abilities/Attack";
import Weapon from "../weapons/Weapon";
import Role from "./Role";

export default class Character {
  constructor(
    public readonly name: string,
    public readonly role: Role,
    private attackRef: Attack // private weaponRef: Weapon
  ) {}

  public introduce() {
    console.log(`My name is ${this.name}, my role is ${this.role}`);
  }

  public attack(target: Character) {
    this.attackRef.attack(this, target);
  }
}
