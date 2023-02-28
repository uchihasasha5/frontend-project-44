import readlineSync from 'readline-sync';

export const getBrainProgressionData = () => {
  let randomNumber = Number(Math.ceil(Math.random() * 100));
  const randomNumber2 = Number(Math.ceil(Math.random() * 10));
  const resultmass = [];
  const correctAnswer = [];
  let i = 0;
  while (i !== 10) {
    randomNumber += randomNumber2;
    resultmass.push(randomNumber);
    i += 1;
  }
  while (i !== 0) {
    correctAnswer.push(resultmass[randomNumber2]);
    resultmass[randomNumber2] = '..';
    i -= 10;
  }
  const correctAnswer1 = Number(correctAnswer);
  console.log(`Question: ${resultmass.join(' ')}`);
  const playerAnswer = Number(readlineSync.question('Your answer:'));
  if (playerAnswer === correctAnswer1) { return 'Correct!'; }
  console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer '${correctAnswer1}'`);
  return 'Wrong!';
};
