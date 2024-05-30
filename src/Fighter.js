/* Fighter class definition */
const MAX_LIFE = 100;

class Fighter {
  constructor(name, strength, dexterity, weapon = null, shield = null) {
    this.name = name;
    this.strength = strength;
    this.dexterity = dexterity;
    this.life = MAX_LIFE;
    this.weapon = weapon;
    this.shield = shield;
  }

  getDamage() {
    return this.weapon !== null
      ? this.strength + this.weapon.damage
      : this.strength;
  }

  getDefense() {
    return this.shield !== null
      ? this.dexterity + this.shield.defense
      : this.dexterity;
  }

  fight(Ennemy) {
    const dmg = Math.floor(Math.random() * (this.getDamage() - 1) + 1) + 1;

    const totalDmg = dmg - Ennemy.getDefense();

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
