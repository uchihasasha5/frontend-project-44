/* eslint-disable no-param-reassign */
import readlineSync from 'readline-sync';

const getGcdGameData = () => {
  const randomNumber1 = Math.ceil(Math.random() * 100);
  const randomNumber2 = Math.ceil(Math.random() * 100);
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
