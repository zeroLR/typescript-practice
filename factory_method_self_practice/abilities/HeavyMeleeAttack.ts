import Character from "../characters/Character";
import Attack from "./Attack";

export default class HeavyMeleeAttack implements Attack {
  public attack(self: Character, target: Character) {
    console.log(`${self.name} strongly attack ${target.name}!`);
  }
}
