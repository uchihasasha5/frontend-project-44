import readlineSync from 'readline-sync';

const getBrainProgressionData = () => {
  let randomNumber = Number(Math.ceil(Math.random() * 100));
  // в функции выше генерируется число для массива //
  const randomNumber2 = Number(Math.ceil(Math.random() * 10));
  // в константе выше генерируется шаг на который увеличивается число в массиве //
  const resultmass = [];
  const correctAnswer = [];
  let i = 0;
  while (i !== 10) {
    randomNumber += randomNumber2;
    resultmass.push(randomNumber);
    i += 1;
  }
  // данный цикл увеличивает следующее число массива на шаг и добавляет его в результирующий масс.//
  while (i !== 0) {
    if (randomNumber2 === 9) { correctAnswer.push(resultmass[9]); resultmass[9] = '..'; i -= 10; break; }
    if (randomNumber2 === 10) { correctAnswer.push(resultmass[9]); resultmass[9] = '..'; i -= 10; break; }
    correctAnswer.push(resultmass[randomNumber2]);
    resultmass[randomNumber2] = '..';
    i -= 10;
  }
  // данный цикл скрывает случайное число в результирующем массиве //
  const correctAnswer1 = Number(correctAnswer);
  // функция выше переводит правильный ответ в число //
  console.log(`Question: ${resultmass.join(' ')}`);
  const playerAnswer = Number(readlineSync.question('Your answer:'));
  if (playerAnswer === correctAnswer1) { return 1; }
  console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer '${correctAnswer1}'`);
  return 'Wrong!';
};

export default getBrainProgressionData;
