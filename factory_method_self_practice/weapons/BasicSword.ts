import Attack from "../abilities/Attack";
import LightMeleeAttack from "../abilities/LightMeleeAttack";
import Role from "../characters/Role";
import Weapon from "./Weapon";

export default class BasicSword extends Weapon {
  public name: string = "BasicSword";
  public attackStrategy: Attack = new LightMeleeAttack();
  public availableRoles: Role[] = [
    Role.Saber,
    Role.Rider,
    Role.Archer,
    Role.Berserker,
  ];
}
