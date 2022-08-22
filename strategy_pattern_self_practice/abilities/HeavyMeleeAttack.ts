import Character from "../characters/Character";
import Attack from "./Attack";

export default class HeavyMeleeAttack implements Attack {
  public attack(self: Character, target: Character): void {
    console.log(`${self.name} heavy attack ${target.name}!`);
  }
}
