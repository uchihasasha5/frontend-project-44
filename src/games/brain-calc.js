import readlineSync from 'readline-sync';

export const calcGameData = () => {
  const massoperations = ['.', '-', '+', '*'];
  const num1 = Math.ceil(Math.random() * 100);
  const num2 = Math.ceil(Math.random() * 100);
  const randomizeoperetions = Math.ceil(Math.random(massoperations) * 3);
  // данная константа выбирает один из трех возможных операторов //
  const operations = massoperations[randomizeoperetions];
  const regularExpressions = `${num1} ${operations} ${num2}`;
  let correctAnswer;
  if (operations === '-') { correctAnswer = num1 - num2; }
  if (operations === '+') { correctAnswer = num1 + num2; }
  if (operations === '*') { correctAnswer = num1 * num2; }
  console.log(`Question:${regularExpressions}?`);
  const playerAnswer = readlineSync.question('Your answer:');
  const playerNumber = Number(playerAnswer);
  // данная константа преобразует ответ пользователя в число //
  if (playerNumber === correctAnswer) { return 'Correct!'; }
  console.log(`'${playerNumber}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
  return 'wrong!';
};
