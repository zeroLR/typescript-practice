import Attack from "../abilities/Attack";
import Character from "../characters/Character";
import Role from "../characters/Role";

export default abstract class Weapon {
  abstract name: string;
  abstract attackStrategy: Attack;
  abstract availableRoles: Role[];

  public switchStrategy(type: Attack) {
    this.attackStrategy = type;
  }

  public attack(self: Character, target: Character) {
    this.attackStrategy.attack(self, target);
  }
}
