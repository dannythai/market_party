import clamp from "./numbers";

// color hex codes for each mascot
export const mascot = {
  mousey: "#f8b195",
  wolf: "#f67280",
  flixy: "#c06c84",
  bizarro: "#ffd369"
};

// default chance to roll forward or backward is 50%
const rollDice = (sidedDice, forwardToBackwardRollRatio = 0.5) => {
  const direction = Math.random() < forwardToBackwardRollRatio ? -1 : 1;
  const distance = Math.floor(Math.random() * sidedDice) + 1;
  return direction * distance;
};

export const getMouseyLocation = prevSpace => {
  const newLocation = prevSpace + rollDice(4);
  return clamp(newLocation, -25, 25);
};

export const getWolfLocation = prevSpace => {
  const newLocation = prevSpace + rollDice(2);
  return clamp(newLocation, -25, 25);
};

export const getFlixyLocation = prevSpace => {
  const diceRoll = rollDice(8);
  const newLocation = prevSpace + diceRoll;
  const clampedLocation = clamp(newLocation, -25, 25);
  return clampedLocation;
};

export const getBizarroLocation = prevSpace => {
  const newLocation = prevSpace + rollDice(10);
  return clamp(newLocation, -25, 25);
};
