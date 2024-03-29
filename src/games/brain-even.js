import readlineSync from 'readline-sync';
import randomNum from '../utilits.js';

const isEven = (num) => num % 2 === 0;

const getGamedata = () => {
  const num = randomNum(1, 99);
  const correctAnswer = isEven(num) ? 'yes' : 'no';
  console.log(`Question: ${num}`);
  const evenodd = readlineSync.question('Your answer:');
  if (evenodd === correctAnswer) {
    return 1;
  }
  console.log(`'${evenodd}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
  return 0;
};

export default getGamedata;
