/* eslint-disable no-plusplus */
import readlineSync from 'readline-sync';

const isPrime = (randomNumber) => {
  for (let i = 2; i < randomNumber; i++) {
    if (randomNumber % i === 0) {
      return false;
    }
  }
  return randomNumber > 1;
};

// eslint-disable-next-line consistent-return
export const getPrimeData = () => {
  const randomNumber = Number(Math.ceil(Math.random() * 100));
  console.log(`Question: ${randomNumber}`);
  const playerAnswer = readlineSync.question('Your answer:');
  const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';
  if (playerAnswer === correctAnswer) { return 'Correct'; } console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer '${correctAnswer}'`);
};
