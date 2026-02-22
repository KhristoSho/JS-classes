export class Character {

  static types = ["Bowerman", "Swordsman", "Magician", "Daemon", "Undead", "Zombie"];

  constructor(
    name,
    type,
  ) {
    this.name = this._validateName(name);
    this.type = this._validateType(type);
    this.health = 100;
    this.level = 1;
    this.attack = undefined;
    this.defence = undefined;
  }

  _validateName(name) {
    if (name.length < 2 || name.length > 10) {
      throw new Error("Name's length should be more than 2 and less then 10 symbols");     
    }
    return name;
  }

  _validateType(type) {
    if (!Character.types.includes(type)) {
      throw new Error("Type should be one of Bowerman, Swordsman, Magician, Daemon, Undead, Zombie");
    }
    return type;
  }
  
  levelUp() {
    if (this.health === 0) {
      throw new Error("Cannot up level for dead character");
    }
    this.level += 1;
    this.attack *= 1.2;
    this.defence *= 1.2;
    this.health = 100;
  }

  damage(points) {
    if (this.health > 0) {
      this.health -= points * (1 - this.defence / 100);
    }
  }
}