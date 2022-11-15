const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let points = 0;

let stop = false;
async function guessing() {
    return new Promise( (res, rej) => {
        rl.question('Enter the number ', (ans) => res(ans))
    });
}

async function tryagain() {
    return new Promise( (res, rej) => {
        rl.question( 'Try again? y/n ', (ans) => res(ans) );
    });
}
(async() => {
    while(!stop) {
        let number = Number(await guessing());
        let random = Math.floor(Math.random() * ( 6 - 1 + 1 ) + 1);

        if( number === random ) {
            points += 2;
        } else if(number + 1 === random || number - 1 === random ) {
            points += 1;
        }
        
        let tryAgain = await tryagain();

        if( tryAgain === 'n' ) {
            console.log(`You've reached ${points} points`);
            stop = true;
        }
    }
    rl.close();
})();
