import readlineSync from 'readline-sync';

const isEven = (num) => num % 2 === 0;

export const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const getGamedata = () => {
  const num = Math.ceil(Math.random() * 100);
  const correctAnswer = isEven(num) ? 'yes' : 'no';
  console.log(`Question: ${num}`);
  const evenodd = readlineSync.question('Your answer:');
  if (evenodd === correctAnswer) {
    return 1;
  }
  console.log(`'${evenodd}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
  return 0;
};

export default getGamedata;
