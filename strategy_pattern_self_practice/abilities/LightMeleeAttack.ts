import Character from "../characters/Character";
import Attack from "./Attack";

export default class LightMeleeAttack implements Attack {
  public readonly name: string = "LightMeleeAttack";
  public attack(self: Character, target: Character): void {
    console.log(
      `${self.name} light attack ${target.name} - using ${self.weaponInfo()}!`
    );
  }
}
