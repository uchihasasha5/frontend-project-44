import readlineSync from 'readline-sync';

const welcome = () => {
  console.log('Welcome to the Brain games!');

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
};

export { welcome };
