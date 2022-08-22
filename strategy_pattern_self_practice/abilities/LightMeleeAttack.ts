import Character from "../characters/Character";
import Attack from "./Attack";

export default class LightMeleeAttack implements Attack {
  public attack(self: Character, target: Character): void {
    console.log(`${self.name} light attack ${target.name}!`);
  }
}
