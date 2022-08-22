import Attack from "../abilities/Attack";
import LightMeleeAttack from "../abilities/LightMeleeAttack";
import Role from "../characters/Role";
import Weapon from "./Weapon";

export default class BasicBow extends Weapon {
  public name: string = "BasicBow";
  public attackStrategy: Attack = new LightMeleeAttack();
  public availableRoles: Role[] = [
    Role.Saber,
    Role.Archer,
    Role.Rider,
    Role.Assassin,
  ];
}
