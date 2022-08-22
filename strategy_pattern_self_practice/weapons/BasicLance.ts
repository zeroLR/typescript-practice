import Attack from "../abilities/Attack";
import LightMeleeAttack from "../abilities/LightMeleeAttack";
import Role from "../characters/Role";
import Weapon from "./Weapon";

export default class BasicLance extends Weapon {
  public name: string = "BasicLance";
  public attackStrategy: Attack = new LightMeleeAttack();
  public availableRoles: Role[] = [Role.Lancer, Role.Rider];
}
