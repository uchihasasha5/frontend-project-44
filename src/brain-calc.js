import readlineSync from 'readline-sync';

export const calcGameData = () => {
  const num1 = Math.ceil(Math.random() * 100);
  const num2 = Math.ceil(Math.random() * 100);
  const regularExpressions = `${num1} + ${num2}`;
  const correctAnswer = num1 + num2;
  console.log(correctAnswer);
  console.log(`Question:${regularExpressions}?`);
  const playerAnswer = readlineSync.question('Your answer:');
  const playerNumber = Number(playerAnswer);
  if (playerNumber === correctAnswer) { return console.log('correct!'); }
  return console.log('wrong!');
};
