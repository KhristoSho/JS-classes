import { Character } from "../js/Character";


test("test make a character", () => {
  const expected = { 
    name: "Ivan", 
    type: "Bowerman", 
    health: 100, 
    level: 1, 
    attack: 25, 
    defence: 25
  };
  expect(new Character("Ivan", "Bowerman")).toEqual(expected);
});

test("test invalid name", () => {
  expect(() => {
    new Character("I", "Bowerman");
  }).toThrow(
    "Name's lentgh should be more then 2 and less then 10 symbols"
  );
});

test("test invalid type", () => {
  expect(() => {
    new Character("Ivan", "Human");
  }).toThrow(
    "Type should be one of Bowerman, Swordsman, Magician, Daemon, Undead, Zombie"
  );
});

test("test for character's level up", () => {
  const character = new Character("Ivan", "Magician");
  character.levelUp();
  expect(character.level).toBe(2);
});

test("test for dead character's level up for", () => {
  expect(() => {
    const character = new Character("Ivan", "Magician");
    character.health = 0;
    character.levelUp();
  }).toThrow(
    "Cannot up level for dead character"
  );
});

test("test character's damage", () => {
  const character = new Character("Ivan", "Magician");
  character.damage(50);
  expect(character.health).toBe(70);
});