import Attack from "../abilities/Attack";
import MeleeAttack from "../abilities/MeleeAttack";
import Character from "../characters/Character";
import Role from "../characters/Role";
import Weapon from "./Weapon";

export default class BasicSword extends Weapon {
  public readonly name = "Basic Sword";

  // Swordsman and Highwayman can use
  public availableRoles = [Role.Swordsman, Role.Highwayman];

  public attackStrategy = new MeleeAttack();
}
