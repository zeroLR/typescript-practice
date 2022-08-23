import Character from "./Character";
import Role from "./Role";

export default class Berserker extends Character {
  constructor(name: string) {
    super(name, Role.Berserker);
  }
}
