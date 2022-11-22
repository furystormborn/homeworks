import calculate from "./calculator.js";
import * as readline from 'node:readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question( 'Your query: ', (q) => {
    console.log( calculate(q) );
    rl.close();
});
