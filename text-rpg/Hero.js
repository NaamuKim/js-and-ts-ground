class Hero {
  constructor(game, name) {
    this.game = game;
    this.name = name;
    this.lev = 1;
    this.maxHp = 100;
    this.hp = 100;
    this.xp = 0;
    this.att = 10;
  }
  attack(target) {
    target.hp -= this.att;
  }
  heal(monster) {
    this.hp += 20;
    this.hp -= monster.att;
  }
}

export default Hero;
