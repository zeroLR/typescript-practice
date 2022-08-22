import Character from "./Character";
import Role from "./Role";

export default class Caster extends Character {
  constructor(name: string) {
    super(name, Role.Caster);
  }
}
