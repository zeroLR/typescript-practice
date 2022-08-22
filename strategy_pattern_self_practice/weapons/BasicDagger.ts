import Attack from "../abilities/Attack";
import LightMeleeAttack from "../abilities/LightMeleeAttack";
import Role from "../characters/Role";
import Weapon from "./Weapon";

export default class BasicDagger extends Weapon {
  public name: string = "BasicDagger";
  public attackStrategy: Attack = new LightMeleeAttack();
  public availableRoles: Role[] = [Role.Archer, Role.Caster, Role.Assassin];
}
