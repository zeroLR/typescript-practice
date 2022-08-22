import Attack from "../abilities/Attack";
import MagicAttack from "../abilities/MagicAttack";
import Role from "../characters/Role";
import Weapon from "./Weapon";

export default class BasicWand extends Weapon {
  public name: string = "BasicWand";
  public attackStrategy: Attack = new MagicAttack();
  public availableRoles: Role[] = [Role.Rider, Role.Caster];
}
