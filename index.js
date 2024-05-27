// First Labour : Heracles vs Nemean Lion
// use your Figher class here

const { Fighter } = require("./src/Fighter.js");

const [heracles, nemean] = [
  new Fighter("🧔 Heracles", 20, 6),
  new Fighter("🦁 Nemean Lion", 11, 13),
];

let round = 1;

while (heracles.life > 0 && nemean.life > 0) {
  heracles.fight(nemean);
  nemean.fight(heracles);

  console.log(`⏲ Round ${round}`);
  round++;

  console.log(`${heracles.name} ⚔ ${nemean.name} ❤ ${nemean.life}`);
  console.log(`${nemean.name} ⚔ ${heracles.name} ❤ ${heracles.life}`);

  if (nemean.isAlive()) {
    nemean.isDead(heracles);
  } else if (heracles.isAlive()) {
    heracles.isDead(nemean);
  }
}
