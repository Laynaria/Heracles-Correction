/* Fighter class definition */
const MAX_LIFE = 100;

class Fighter {
  constructor(name, strength, dexterity) {
    this.name = name;
    this.strength = strength;
    this.dexterity = dexterity;
    this.life = MAX_LIFE;
  }

  fight(Ennemy) {
    const dmg = Math.floor(Math.random() * (this.strength - 1) + 1) + 1;

    const totalDmg = dmg - Ennemy.dexterity;

    Ennemy.life -= totalDmg > 0 ? totalDmg : 0;

    if (Ennemy.life < 0) {
      Ennemy.life = 0;
    }
  }

  isAlive() {
    return this.life === 0;
  }

  isDead(Ennemy) {
    console.log(`${Ennemy.name} 🏆 wins`);
    console.log(`${this.name} 💀 lost`);
  }
}

module.exports = { Fighter };
