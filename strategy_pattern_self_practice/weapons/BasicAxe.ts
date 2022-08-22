import Attack from "../abilities/Attack";
import LightMeleeAttack from "../abilities/LightMeleeAttack";
import Role from "../characters/Role";
import Weapon from "./Weapon";

export default class BasicAxe extends Weapon {
  public name: string = "BasicAxe";
  public attackStrategy: Attack = new LightMeleeAttack();
  public availableRoles: Role[] = [Role.Saber, Role.Berserker];
}
