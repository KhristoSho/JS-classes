import { Bowerman } from "../js/bowerman.js";
import { Daemon } from "../js/daemon.js";
import { Magician } from "../js/magician.js";
import { Swordsman } from "../js/swordsman.js";
import { Undead } from "../js/undead.js";
import { Zombie } from "../js/zombie.js";


test.each([
  ["Ivan", "Bowerman", { 
    name: "Ivan", 
    type: "Bowerman", 
    health: 100, 
    level: 1, 
    attack: 25, 
    defence: 25
  }],
  ["Dmitry", "Daemon", { 
    name: "Dmitry", 
    type: "Daemon", 
    health: 100, 
    level: 1, 
    attack: 10, 
    defence: 40
  }],
  ["Alex", "Magician", { 
    name: "Alex", 
    type: "Magician", 
    health: 100, 
    level: 1, 
    attack: 10, 
    defence: 40
  }]
])("test make a character", (name, type, expected) => {
  let character;
  if (type === "Bowerman") {
    character = new Bowerman(name, type);
  } else if (type === "Daemon") {
    character = new Daemon(name, type);
  } else {
    character = new Magician(name, type);
  }
  expect(character).toEqual(expected);
});

test("test invalid name", () => {
  expect(() => {
    new Daemon("I", "Daemon");
  }).toThrow(
    "Name's lentgh should be more then 2 and less then 10 symbols"
  );
});

test("test invalid type", () => {
  expect(() => {
    new Magician("Ivan", "Human");
  }).toThrow(
    "Type should be one of Bowerman, Swordsman, Magician, Daemon, Undead, Zombie"
  );
});

test("test for character's level up", () => {
  const character = new Swordsman("Ivan", "Swordsman");
  character.levelUp();
  expect(character.level).toBe(2);
});

test("test for dead character's level up for", () => {
  expect(() => {
    const character = new Undead("Ivan", "Undead");
    character.health = 0;
    character.levelUp();
  }).toThrow(
    "Cannot up level for dead character"
  );
});

test("test character's damage", () => {
  const character = new Zombie("Ivan", "Zombie");
  character.damage(50);
  expect(character.health).toBe(55);
});