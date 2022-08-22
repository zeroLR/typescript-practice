import Attack from "../abilities/Attack";
import StabAttack from "../abilities/StabAttack";
import Character from "../characters/Character";
import Weapon from "./Weapon";

export default class Dagger extends Weapon {
  public readonly name = "Dagger";

  // any one can use
  public availableRoles = [];

  public attackStrategy = new StabAttack();
}
