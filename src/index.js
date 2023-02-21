import readlineSync from 'readline-sync';
import { getGamedata } from './brain-even.js';
import { calcGameData } from './brain-calc.js';

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
  if (i === 1 || i === 2) { console.log('you lose!'); } else { console.log(`Congratulations, ${name}, you win!`); }
};

const runGameCalc = () => {
  console.log('Welcome to the Brain games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hellо, ${name}`);
  console.log('What is the result of the expression?');
  let i = 0;
  for (i = 0; i < 3; i++) {
    calcGameData();
  }
};

export { runGame, runGameCalc };
