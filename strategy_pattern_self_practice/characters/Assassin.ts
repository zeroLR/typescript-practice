import Character from "./Character";
import Role from "./Role";

export default class Assassin extends Character {
  constructor(name: string) {
    super(name, Role.Assassin);
  }
}
