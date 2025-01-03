// Destructuring animal sounds
const animalSounds = {
  moo: "cow",
  neigh: "horse",
  baa: "sheep",
  oink: "pig",
  cluck: "chicken",
};

const { moo, neigh, baa, oink, cluck } = animalSounds;

// Destructuring animal names
const animalNames = {
  bessie: "cow",
  dolly: "sheep",
  babe: "pig",
  little: "chicken",
};

const { bessie, dolly, babe, little } = animalNames;

// Destructuring animal colors
const animalColors = {
  blackAndWhite: "cow",
  black: "sheep",
  pink: "pig",
};

const { blackAndWhite, black, pink } = animalColors;

// Destructuring rainbow colors (array)
const rainbow = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
const [red, orange, yellow, green, blue, indigo, violet] = rainbow;

// Destructuring rainbow colors (initials and indg)
const [r, o, y, g, b, , v] = rainbow;
const [, , , , , indg] = rainbow;

// Destructuring Muppet information
const muppet = {
  muppetName: "Miss Piggy",
  color: "pink",
  song: "Never Before, Never Again",
  job: "Cast member of The Muppet Show",
  partner: "Kermit",
  songs: [
    "The Rainbow Connection",
    "Moving Right Along",
    "Can You Picture That?",
    "I Hope That Something Better Comes Along",
  ],
  nested: {
    job: "Host of The Muppet Show",
    partner: "Miss Piggy",
  },
};

const {
  muppetName,
  color,
  song,
  job,
  partner,
  songs: [, song2, , song4],
  nested: { job: nestedJob, partner: nestedPartner },
} = muppet;
