import Attack from "../abilities/Attack";
import MagicAttack from "../abilities/MagicAttack";
import Character from "../characters/Character";
import Role from "../characters/Role";
import Weapon from "./Weapon";

export default class BasicWand extends Weapon {
  public readonly name: string = "BasicWand";
  public readonly attackStrategy: Attack = new MagicAttack();
  public readonly availableRoles: Role[] = [Role.Rider, Role.Caster];
}
