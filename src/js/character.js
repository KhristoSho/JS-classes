export class Character {

  #attackDefence = {
    "Bowerman": [25, 25],
    "Swordsman": [40, 10],
    "Magician": [10, 40],
    "Undead": [25, 25],
    "Zombie": [40, 10],
    "Daemon": [10, 40],
  };

  constructor(
    name,
    type,
  ) {
    this.name = this._validateName(name);
    this.type = this._validateType(type);
    this.health = 100;
    this.level = 1;
    this.attack = this.#attackDefence[type][0];
    this.defence = this.#attackDefence[type][1];
  }

  _validateName(name) {
    if (name.length < 2 || name.length > 10) {
      throw new Error("Name's lentgh should be more then 2 and less then 10 symbols");     
    }
    return name;
  }

  _validateType(type) {
    if (!["Bowerman", "Swordsman", "Magician", "Daemon", "Undead", "Zombie"].includes(type)) {
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
    if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100);
    }
  }
}