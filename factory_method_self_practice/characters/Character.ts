import Weapon from "../weapons/Weapon";
import Role from "./Role";

export default class Character {
  constructor(
    public readonly name: string,
    public readonly role: Role,
    protected weaponRef: Weapon
  ) {}

  public attack(target: Character) {
    this.weaponRef.attack(this, target);
  }

  public equip(weapon: Weapon) {
    let roles: Role[] = this.weaponRef.availableRoles;
    if (roles.length === 0 || roles.indexOf(this.role) != -1) {
      this.weaponRef = weapon;
      console.log(`${this.name} equip ${this.weaponRef.name}`);
      return;
    }

    throw new Error(`${this.name} cannot equip ${this.weaponRef.name}!`);
  }
}
