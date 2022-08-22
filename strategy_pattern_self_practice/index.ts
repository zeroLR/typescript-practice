import Archer from "./characters/Archer";
import Assassin from "./characters/Assassin";
import Berserker from "./characters/Berserker";
import Caster from "./characters/Caster";
import Lancer from "./characters/Lancer";
import Rider from "./characters/Rider";
import Saber from "./characters/Saber";

// Create Characters
const saber = new Saber("Altria Pendragon");
const lancer = new Lancer("Cú Chulainn");
const archer = new Archer("Emiya");
const rider = new Rider("Medusa");
const caster = new Caster("Medea");
const assassin = new Assassin("Sasaki Kojiro");
const berserker = new Berserker("Hercules");

// Introduce self
saber.introduce();
lancer.introduce();
archer.introduce();
rider.introduce();
caster.introduce();
assassin.introduce();
berserker.introduce();
