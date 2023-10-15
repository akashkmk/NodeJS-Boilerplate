import redis from 'redis';
import sum, { multiplication } from './sum';

console.log(sum(10, 5));
console.log(multiplication(10, 5));
console.log({ redis });

const value = 10;
const temp = value * 2;
console.log(temp);
