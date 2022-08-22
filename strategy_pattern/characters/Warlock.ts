import BasicWand from "../weapons/BasicWand";
import Character from "./Character";
import Role from "./Role";

export default class Warlock extends Character {
  constructor(name: string) {
    super(name, Role.Warlock, new BasicWand());
  }
}
