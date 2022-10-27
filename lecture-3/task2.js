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

    phrase = Array.from(phrase)
    let numArrayIndex = 0;
    let numArray = new Array();

    phrase.forEach((element) => {
        let num = 0;

        switch(element) {
            case 'I':
                num = 1;
                break;
            case 'V':
                num = 5;
                break;
            case 'X':
                num = 10;
                break;
            case 'L':
                num = 50;
                break;
            case 'C':
                num = 100;
                break;
            case 'D':
                num = 500;
                break;
            case 'M':
                num = 1000;
                break;
            case '+':
                numArrayIndex++;
                break;
            default:
                break;
        }

        if(isNaN(numArray[numArrayIndex])) {
            numArray[numArrayIndex] = 0;
        }
        numArray[numArrayIndex] += num;


    });

    let resultNumber = 0;

    numArray.forEach((element) => {
        resultNumber += element;
    });

    console.log(`The result is ${resultNumber}`);
    rl.close();
});