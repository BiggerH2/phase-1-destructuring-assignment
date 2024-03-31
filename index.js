// Import necessary functions or variables from helpers.js if needed
const { expect } = require("chai");
const { findMatching } = require("./helper.js");

const animals = 'cow horse sheep pig chicken';
const colorsList = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

// Strings
const [moo, horse, sheep, pig, chicken] = animals.split(' ');

// 2. Bolt the horse wandered off, so just give us four animals, and let's name them bessie, dolly, babe, and little.
const [bessie, dolly, babe, little] = animals.split(' ').slice(1);

// 3. Little the chicken had to go back to the coop, so now we're left with three. Let's use color variables of blackAndWhite, black, and pink.
const [blackAndWhite, black, pink] = colorsList.slice(0, 3);

// Arrays
const [red, orange, yellow, green, blue, indigo, violet] = colorsList;

// 5. Some people have a really hard time picking out indigo, so let's leave that one out, using the first letter of each color as the variable names.
const [r, o, y, g, b, i, v] = colorsList;

// 6. But wait! Indigo is now feeling super left out. Let's only assign indigo using indigo.
const [,,,,, indigo] = colorsList;

// Objects
const { muppetName, color, song, job, partner } = muppet;
const { album: { theMuppetMovie: { song2, song4 } }, nestedJob, nestedPartner } = nestedMuppet;

describe("index.js", () => {
  it("findMatching(): returns all animals that match the passed-in name", () => {
    const animalsList = [moo, horse, sheep, pig, chicken];
    const result = findMatching(animalsList, "cow");
    expect(result).to.deep.equal(["cow"]);
  });

  // Other test cases for findMatching()

  // Add more test cases for other functions if needed
});
