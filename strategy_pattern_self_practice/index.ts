import HeavyMeleeAttack from "./abilities/HeavyMeleeAttack";
import MagicAttack from "./abilities/MagicAttack";
import Archer from "./characters/Archer";
import Assassin from "./characters/Assassin";
import Berserker from "./characters/Berserker";
import Caster from "./characters/Caster";
import Lancer from "./characters/Lancer";
import Rider from "./characters/Rider";
import Saber from "./characters/Saber";
import BasicAxe from "./weapons/BasicAxe";
import BasicBow from "./weapons/BasicBow";
import BasicDagger from "./weapons/BasicDagger";
import BasicSword from "./weapons/BasicSword";
import BasicWand from "./weapons/BasicWand";

// Create Characters
const saber = new Saber("Altria Pendragon");
const lancer = new Lancer("Cú Chulainn");
const archer = new Archer("Emiya");
const rider = new Rider("Medusa");
const caster = new Caster("Medea");
const assassin = new Assassin("Sasaki Kojiro");
const berserker = new Berserker("Hercules");

// Introduce self
console.log(`
Character Introduce
`);
saber.introduce();
lancer.introduce();
archer.introduce();
rider.introduce();
caster.introduce();
assassin.introduce();
berserker.introduce();

// Attack with default weapon
console.log(`
Attack with default weapon
`);
saber.attack(lancer);
lancer.attack(archer);
archer.attack(rider);
rider.attack(caster);
caster.attack(assassin);
assassin.attack(berserker);
berserker.attack(saber);

// Equip other weapon(available case)
console.log(`
Equip other weapon(available case)
`);
saber.equip(new BasicAxe());
lancer.equip(new BasicSword());
archer.equip(new BasicSword());
rider.equip(new BasicWand());
caster.equip(new BasicDagger());
assassin.equip(new BasicBow());
berserker.equip(new BasicSword());

// Switch attack strategy
console.log(`
Swithc attack strateg, then attack again
`);
saber.switchAttackStrategy(new HeavyMeleeAttack());
lancer.switchAttackStrategy(new MagicAttack());

saber.attack(lancer);
lancer.attack(saber);
