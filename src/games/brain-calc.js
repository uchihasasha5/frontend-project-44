import readlineSync from 'readline-sync';
import { randomNum } from '../utilits.js';

const calcGameData = () => {
  const lowerCamelCase = ['-', '+', '*'];
  const num1 = randomNum(1, 99);
  const num2 = randomNum(1, 99);
  const index = randomNum(0, 2);
  // данная константа выбирает один из трех возможных операторов //
  const operations = lowerCamelCase[index];
  const regularExpressions = `${num1} ${operations} ${num2}`;
  let correctAnswer;
  if (operations === '-') { correctAnswer = num1 - num2; }
  if (operations === '+') { correctAnswer = num1 + num2; }
  if (operations === '*') { correctAnswer = num1 * num2; }
  console.log(`Question: ${regularExpressions}?`);
  const playerAnswer = readlineSync.question('Your answer:');
  const playerNumber = Number(playerAnswer);
  // данная константа преобразует ответ пользователя в число //
  if (playerNumber === correctAnswer) { return 1; }
  console.log(`'${playerNumber}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
  return 'wrong!';
};

export default calcGameData;
