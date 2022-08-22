import Character from "./Character";
import Role from "./Role";

export default class Archer extends Character {
  constructor(name: string) {
    super(name, Role.Archer);
  }
}
