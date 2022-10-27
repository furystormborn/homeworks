const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Write a number from 10 to 99 included: ', (num) => {

    if(isNaN(Number(num))) {
        console.log('Number is not valid');
        rl.close();
        return;
    }

    if( Number(num) < 10 || Number(num) > 99 ) {
        console.log('Number is not in the range');
        rl.close();
        return;
    }
    arr = num.split('');
    console.log(arr);

    if( arr.length !== 2 ) {
        console.log('It is not a 3 digit number');
        rl.close();
        return;
    }

    let firstDigit = arr.slice(0,1);
    let secondDigit = arr.slice(1,2);

    let outputResult = `${firstDigit.toString()} ${secondDigit.toString()}`;
    console.log(outoutResult);
    
    rl.close();
})