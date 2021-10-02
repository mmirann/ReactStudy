const HANDS = ["rock", "scissor", "paper"];
const WINS = {
  rock: "scissor",
  scissor: "paper",
  paper: "rock",
};

export function compareHand(a, b) {
  if (WINS[a] === b) return 1;
  if (WINS[b] === a) return -1;
  return 0;
}

export function random(n) {
  return Math.floor(Math.random() * n) + 1;
}

export function generateRandomHand() {
  const idx = random(HANDS.length - 1);
  return HANDS[idx];
}
