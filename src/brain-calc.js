import readlineSync from 'readline-sync';

export const calcGameData = () => {
  const num1 = Math.ceil(Math.random() * 100);
  const num2 = Math.ceil(Math.random() * 100);
  const regularExpressions = `${num1} + ${num2}`;
  const correctAnswer = num1 + num2;
  console.log(`Question:${regularExpressions}?`);
  const playerAnswer = readlineSync.question('Your answer:');
  const playerNumber = Number(playerAnswer);
  if (playerNumber === correctAnswer) { return 'correct!'; }
  return 'wrong!';
};
