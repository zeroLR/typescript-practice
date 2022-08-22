import Attack from "../abilities/Attack";
import MagicAttack from "../abilities/MagicAttack";
import Character from "../characters/Character";
import Role from "../characters/Role";
import Weapon from "./Weapon";

export default class BasicWand extends Weapon {
  public readonly name = "Basic Wand";

  // Warlock can use
  public availableRoles = [Role.Warlock];

  public attackStrategy = new MagicAttack();
}
