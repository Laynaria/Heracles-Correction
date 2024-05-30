// First Labour : Heracles vs Nemean Lion
// use your Figher class here

const { Fighter } = require("./src/Fighter.js");
const { Weapon } = require("./src/Weapon.js");
const { Shield } = require("./src/Shield.js");

const sword = new Weapon("Épée");
const shield = new Shield("Bouclier");

const [heracles, nemean, erymanthian] = [
  new Fighter("🧔 Heracles", 20, 6, sword, shield),
  new Fighter("🦁 Nemean Lion", 11, 13),
  new Fighter("🐗 Erymanthian Boar", 25, 12),
];

let round = 1;

while (heracles.life > 0 && erymanthian.life > 0) {
  heracles.fight(erymanthian);
  erymanthian.fight(heracles);

  console.log(`⏲ Round ${round}`);
  round++;

  console.log(`${heracles.name} ⚔ ${erymanthian.name} ❤ ${erymanthian.life}`);
  console.log(`${erymanthian.name} ⚔ ${heracles.name} ❤ ${heracles.life}`);

  if (erymanthian.isAlive()) {
    erymanthian.isDead(heracles);
  } else if (heracles.isAlive()) {
    heracles.isDead(erymanthian);
  }
}
