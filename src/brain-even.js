import readlineSync from 'readline-sync';

const isEven = (num) => num % 2 === 0;

const getGamedata = () => {
  const num = Math.ceil(Math.random() * 100);
  const correctAnswer = isEven(num) ? 'yes' : 'no';
  console.log(`Question:${num}`);
  const evenodd = readlineSync.question('Your answer:');
  if (evenodd === correctAnswer) {
    return 1;
  }
  return 0;
};

export { getGamedata, isEven };
