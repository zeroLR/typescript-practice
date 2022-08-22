import BasicSword from "../weapons/BasicSword";
import Character from "./Character";
import Role from "./Role";

export default class Swordsman extends Character {
  constructor(name: string) {
    super(name, Role.Swordsman, new BasicSword());
  }
}
