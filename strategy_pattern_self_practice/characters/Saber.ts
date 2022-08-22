import LightMeleeAttack from "../abilities/LightMeleeAttack";
import BasicSword from "../weapons/BasicSword";
import Character from "./Character";
import Role from "./Role";

export default class Saber extends Character {
  constructor(name: string) {
    super(name, Role.Saber, new BasicSword());
  }
}
