import * as readline from 'node:readline';
import { MyNumber } from './number.ts';


const rl:readline.Interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const operators: string[] = ['-', '+'];

const mySplit = function(separator: string, fullString: string): string[] {
   let indexSeparator: number|undefined = fullString.indexOf(separator);

   if(indexSeparator === undefined) {
    return [fullString];
   }

   const data: string[] = [ fullString.slice(0,indexSeparator), fullString.slice(indexSeparator+1, fullString.length) ];
   return data;

}
 

rl.question('1st argument: ', (firstRawData: string) => {

    const data: string[] = [];
    while(firstRawData) {
    
        const operator = operators.find(op => firstRawData.includes(op));
        if (!operator) {
            data.push(firstRawData);
            break;
        }
        let temporaryData: string[] = mySplit(operator, firstRawData);

        if(operator === '-') {
            temporaryData[1] = '!' + temporaryData[1];
        }

        data.push(temporaryData[0]);
        firstRawData = temporaryData[1];
    }
    
    const firstDataArgs: MyNumber[] = data.map(value => new MyNumber(value));

    rl.question('2nd argument: ', function(secondRawData:string) {
        const data: string[] = [];
        while(firstRawData) {
        
            const operator = operators.find(op => secondRawData.includes(op));
            if (!operator) {
                data.push(secondRawData);
                break;
            }
            let temporaryData: string[] = mySplit(operator, secondRawData);
    
            if(operator === '-') {
                temporaryData[1] = '!' + temporaryData[1];
            }
    
            data.push(temporaryData[0]);
            secondRawData = temporaryData[1];
        }
        
        const secondDataArgs: MyNumber[] = data.map(value => new MyNumber(value));

        let multipliedValues: MyNumber[] = [];
        for( let firstNum of firstDataArgs ) {
            
            for(let secondNum of secondDataArgs) {
                multipliedValues.push(MyNumber.multiply(firstNum, secondNum));
            }
        }

        let multipliedValuesNotX: MyNumber[] = [];

        multipliedValues = multipliedValues.filter((mn) => {
            if(!mn.hasX) {
                multipliedValuesNotX.push(mn);
                return false;
            }
            return true;
        })

        const numbersMap: { [key: number]: MyNumber[] } = multipliedValues.reduce((acc, mv) => {
            if (acc[mv.power]) {
                acc[mv.power].push(mv)
            } else {
                acc[mv.power] = [mv];
            }

            return acc;
        }, {});


        const result: MyNumber[] = Object.values(numbersMap).map((arr) => {
            if(arr.length > 1) {               
                return arr.filter((el, index, arr) => {
                    if(index > 0) {
                        arr[0].num += el.num;
                        return false; 
                    }
                    return true;
                })
            } 

            return arr;
        });

        let notX: MyNumber|undefined = undefined;

        if( multipliedValuesNotX.length > 0 ) {
            notX = multipliedValuesNotX.reduce((acc, current) => {
                acc.num += current.num;
                return acc;
            }, new MyNumber());
        }

        let printedData: string = '';

        result.reverse().forEach(([mn], index, arr) => {
            if(mn.hasX && mn.num === 0) {
                return;
            }
            if(notX !== undefined) {
                printedData += mn.getPrintData() + ' + ';
            } else {
                printedData += index === (arr.length - 1) ? mn.getPrintData() : mn.getPrintData() + ' + ';
            }
        });

        if(notX !== undefined) {
            printedData += notX.getPrintData();
        }

        console.log(printedData);
        rl.close();
    });
    
});