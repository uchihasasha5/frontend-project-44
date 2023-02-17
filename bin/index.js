import readlineSync from 'readline-sync';
import { getGamedata } from '../src/brain-even.js';

const runGame = () => {
  console.log('Welcome to the Brain games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hellо, ${name}`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let i = 1;
  while (i <= 3) {
    if (getGamedata() === 1) {
      console.log('correct!');
      i += 1;
    } else { break; }
  }
  if (i === 1) { console.log('you lose!'); } else { console.log(`Congratulations, ${name}, you win!`); }
};
export { runGame };
