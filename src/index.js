import readlineSync from 'readline-sync';
import { getGamedata } from './games/brain-even.js';
import { calcGameData } from './games/brain-calc.js';
import { getGcdGameData } from './games/brain-gcd.js';

// eslint-disable-next-line consistent-return
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
    } else { return console.log(`Sorry, ${name}, you lose!`); }
  }
  console.log(`Congratulations, ${name}, you win!`);
};

const runGameCalc = () => {
  console.log('Welcome to the Brain games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hellо, ${name}`);
  console.log('What is the result of the expression?');
  let i = 0;
  for (i = 0; i < 3; i += 1) {
    if (calcGameData() === 'correct!') { console.log('correct!'); } else { console.log('you lose'); break; }
  }
  if (i === 3) { console.log('Congratulations! You win the game!'); } else (console.log('Maybe you should try again?'));
};

const runGcdGame = () => {
  console.log('Welcome to the Brain games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hellо, ${name}`);
  console.log('Find the greatest common divisor of given numbers.');
  let i = 0;
  for (i = 0; i < 3; i += 1) {
    if (getGcdGameData() === 'correct!') { console.log('correct!'); } else { console.log('wrong!'); break; }
  }
  if (i === 3) { console.log('Congratulations! You win the game!'); } else (console.log('Maybe you should try again? '));
};

export { runGame, runGameCalc, runGcdGame };
