import Character from "../characters/Character";

export default interface Attack {
  name: string;
  attack(self: Character, target: Character): void;
}
