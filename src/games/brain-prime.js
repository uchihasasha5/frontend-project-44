/* eslint-disable no-plusplus */
import readlineSync from 'readline-sync';
import { randomNum } from '../utilits.js';

const isPrime = (randomNumber) => {
  for (let i = 2; i < randomNumber; i++) {
    if (randomNumber % i === 0) {
      return false;
    }
  }
  return randomNumber > 1;
};

// eslint-disable-next-line consistent-return
const getPrimeData = () => {
  const randomNumber = randomNum(1, 99);
  console.log(`Question: ${randomNumber}`);
  const playerAnswer = readlineSync.question('Your answer:');
  const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';
  if (playerAnswer === correctAnswer) { return 1; } console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer '${correctAnswer}'`);
};

export default getPrimeData;
