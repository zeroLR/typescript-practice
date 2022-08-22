import Character from "./Character";
import Role from "./Role";

export default class Rider extends Character {
  constructor(name: string) {
    super(name, Role.Rider);
  }
}
