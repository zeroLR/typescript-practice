import Character from "../characters/Character";
import Attack from "./Attack";

export default class LightMeleeAttack implements Attack {
  public attack(self: Character, target: Character) {
    console.log(`${self.name} lightly attack ${target.name}!`);
  }
}
