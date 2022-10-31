const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter the phrase: ', (phrase) => {
    
    if(!isNaN((Number(phrase)))) {
        console.log('Phrase is not valid.');
        rl.close();
        return;
    }

    phrase = Array.from(phrase);
    
    let romeLetterObject = {
        'M': 1000,
        'D': 500,
        'C': 100,
        'L': 50,
        'X': 10,
        'V': 5,
        'I': 1,
    }

    let resultNumber = 0;

    let stopper = false;
    phrase.forEach((element, index) => {
        resultNumber += romeLetterObject[element] === undefined ? 0 : romeLetterObject[element];

        if(phrase[index+1] === 'V' && phrase[index] === 'I' ) {
            resultNumber -= 2;
        } 

        if(phrase[index+1] === 'X' && phrase[index] === 'I' ) {
            resultNumber -= 2;
        } 

    });

    console.log(`The result is ${resultNumber}`);
    
    let romeNumber = new Array();

    for(key in romeLetterObject) {
        if(parseInt(resultNumber / romeLetterObject[key]) > 0) {
            let counter = parseInt(resultNumber / romeLetterObject[key]);
            romeNumber = romeNumber.concat(Array(counter).fill(key));
            resultNumber -= counter * romeLetterObject[key];
        }
        
        if(key === 'X' && parseInt(resultNumber % romeLetterObject[key]) === 9) {
            romeNumber = romeNumber.concat(Array(1).fill('IX'));
            resultNumber -= 9;
        }

        if(key === 'V' && (parseInt(resultNumber % romeLetterObject[key]) === 4)) {
            romeNumber = romeNumber.concat(Array(1).fill('IV'));
            resultNumber -= 4;
        }

    }
    console.log(romeNumber.join(''));

    rl.close();
});