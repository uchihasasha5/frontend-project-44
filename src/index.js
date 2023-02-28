import readlineSync from 'readline-sync';
import { getGamedata } from './games/brain-even.js';
import { calcGameData } from './games/brain-calc.js';
import { getGcdGameData } from './games/brain-gcd.js';
import { getBrainProgressionData } from './games/brain-progression.js';
import { getPrimeData } from './games/brain-prime.js';
import { welcome } from './cli.js';

const runGame = () => {
  const name = welcome();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let i = 1;
  while (i <= 3) {
    if (getGamedata() === 1) {
      console.log('Correct!');
      i += 1;
    } else { console.log(`Let's try again, ${name}!`); return; }
  }
  console.log(`Congratulations, ${name}!`);
};

const runGameCalc = () => {
  const name = welcome();
  console.log('What is the result of the expression?');
  let i = 0;
  for (i = 0; i < 3; i += 1) {
    if (calcGameData() === 'Correct!') { console.log('Correct!'); } else { break; }
  }
  if (i === 3) { console.log(`Congratulations, ${name}!`); } else (console.log(`Let's try again, ${name}!`));
};

const runGcdGame = () => {
  const name = welcome();
  console.log('Find the greatest common divisor of given numbers.');
  let i = 0;
  for (i = 0; i < 3; i += 1) {
    if (getGcdGameData() === 'Correct!') { console.log('Correct!'); } else { break; }
  }
  if (i === 3) { console.log(`Congratulations, ${name}!`); } else (console.log(`Let's try again, ${name}!`));
};

const runBrainProgression = () => {
  const name = welcome();
  console.log('What number is missing in the progression?');
  let i = 0;
  for (i = 0; i < 3; i += 1) {
    if (getBrainProgressionData() === 'Correct!') { console.log('Correct!'); } else { break; }
  }
  if (i === 3) { console.log(`Congratulations, ${name}!`); } else (console.log(`Let's try again, ${name}!`));
};

export const runBrainPrime = () => {
  const name = welcome();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  let i;
  for (i = 0; i < 3; i += 1) {
    if (getPrimeData() === 'Correct') { console.log('Correct!'); } else { break; }
  }
  if (i === 3) { console.log(`Congratulations, ${name}!`); } else (console.log(`Let's try again, ${name}!`));
};

export {
  runGame, runGameCalc, runGcdGame, runBrainProgression,
};
