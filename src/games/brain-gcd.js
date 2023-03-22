/* eslint-disable no-param-reassign */
import readlineSync from 'readline-sync';
import randomNum from '../utilits.js';

const getGcdGameData = () => {
  const randomNumber1 = randomNum(1, 99);
  const randomNumber2 = randomNum(1, 99);
  console.log(`Question: ${randomNumber1} ${randomNumber2}`);
  const playerAnswer = readlineSync.question('Your answer:');
  const playerNumber = Number(playerAnswer);
  const getGCD = (a, b) => {
    let c = 0;
    if (a > b) {
      while (b !== 0) {
        c = b;
        b = a % b;
        a = c;
      }
    }
    if (a < b) { return getGCD(b, a); }
    return c;
  };
  let result = getGCD(randomNumber1, randomNumber2);
  if (result === playerNumber) {
    return 1;
  }
  if (randomNumber1 === randomNumber2) { result = Number(randomNumber1); }
  console.log(`'${playerNumber}' is wrong answer ;(. Correct answer '${result}'`);
  return 'wrong!';
};

export default getGcdGameData;
