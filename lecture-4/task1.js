const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const perimeter = (num) => {
    return isNaN(Number(num)) ? 0 : num * 4;
};

const square = (num) => {
    return isNaN(Number(num)) ? 0 : num * num;
};

rl.question('Enter the number: ', function(num) {
    if(isNaN(Number(num))) {
        console.log('Wrong number');
        rl.close();
        return;
    }

    if(Number(num) < 1 && Number(num) > 1000) {
        console.log('Number doesnt get into a range');
        rl.close();
        return;
    }

    console.log(`Perimeter is ${perimeter(num)}`);
    console.log(`Square is ${square(num)}`);
    rl.close();

});