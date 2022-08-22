import Attack from "../abilities/Attack";
import MeleeAttack from "../abilities/MeleeAttack";
import Character from "../characters/Character";
import Role from "../characters/Role";

// export default interface Weapon {
//   readonly name: string;

//   availableRoles: Role[];

//   attackStrategy: Attack;

//   switchAttackStrategy(type: Attack): void;

//   attack(self: Character, target: Character): void;
// }

export default abstract class Weapon {
  abstract name: string;

  abstract availableRoles: Role[];

  abstract attackStrategy: Attack;

  public switchAttackStrategy(type: Attack) {
    this.attackStrategy = type;
  }

  public attack(self: Character, target: Character) {
    this.attackStrategy.attack(self, target);
  }
}
