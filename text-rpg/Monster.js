class Monster {
  constructor(name, hp, att, xp) {
    this.name = name;
    this.hp = hp;
    this.att = att;
    this.xp = xp;
  }
  attack(monster) {
    monster.hp -= this.att;
    this.hp -= monster.att;
  }
  heal(monster) {
    this.hp += 20;
    this.hp -= monster.att;
  }
}
export default Monster;
