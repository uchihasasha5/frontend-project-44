import getGamedata from './games/brain-even.js';
import calcGameData from './games/brain-calc.js';
import getGcdGameData from './games/brain-gcd.js';
import getBrainProgressionData from './games/brain-progression.js';
import getPrimeData from './games/brain-prime.js';
import welcome from './cli.js';

const mainGame = (callback) => {
  const name = welcome();
  const descriptions = () => {
    if (callback === getGamedata) { console.log('Answer "yes" if the number is even, otherwise answer "no".'); }
    if (callback === calcGameData) { console.log('What is the result of the expression?'); }
    if (callback === getGcdGameData) { console.log('Find the greatest common divisor of given numbers.'); }
    if (callback === getBrainProgressionData) { console.log('What number is missing in the progression?'); }
    if (callback === getPrimeData) { console.log('Answer "yes" if given number is prime. Otherwise answer "no".'); }
  };
  descriptions();
  let i;
  for (i = 0; i < 3; i += 1) {
    if (callback() === 1) { console.log('Correct!'); } else { console.log(`Let's try again, ${name}!`); return; }
  }
  if (i === 3) { console.log(`Congratulations, ${name}!`); }
};

export default mainGame;
