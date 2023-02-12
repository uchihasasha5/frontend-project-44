/* eslint-disable import/prefer-default-export */
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain games!');
const name = readlineSync.question('May I have your name? ');

export { name };
