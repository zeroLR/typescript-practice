import BasicLance from "../weapons/BasicLance";
import Character from "./Character";
import Role from "./Role";

export default class Lancer extends Character {
  constructor(name: string) {
    super(name, Role.Lancer, new BasicLance());
  }
}
