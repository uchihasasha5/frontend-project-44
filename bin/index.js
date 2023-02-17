import readlineSync from 'readline-sync';
import { getGamedata } from '../src/brain-even.js';

const runGame = () => {
  console.log('Welcome to the Brain games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello ${name}`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let i = 1;
  while (i <= 3) {
    getGamedata();
    i += 1;
  }
};
export { runGame };
