import * as readline from 'node:readline';
import { MyNumber } from './number.ts';


const rl:readline.Interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const operators: string[] = ['-', '+'];
 

rl.question('1st argument: ', (firstRawData: string) => {
    const operator = operators.find(op => firstRawData.includes(op));

    if (!operator) {
        console.log('Incorrect data');
        return;
    }

    const data = firstRawData.split(operator);
    
    if(operator === '-') {
        data[1] = '-' + data[1];
    }
    
    const firstDataArgs: MyNumber[] = data.map(value => new MyNumber(value));

    
    rl.question('2nd argument: ', function(secondRawData:string) {
        const operator = operators.find(op => secondRawData.includes(op));

        if (!operator) {
            console.log('Incorrect data');
            return;
        }
    
        const data = secondRawData.split(operator);
        if(operator === '-') {
            data[1] = '-' + data[1];
        }
        const secondDataArgs: MyNumber[] = data.map(value => new MyNumber(value));

        let multipliedValues: MyNumber[] = [
            MyNumber.multiply(firstDataArgs[0], secondDataArgs[0]),
            MyNumber.multiply(firstDataArgs[0], secondDataArgs[1]),
            MyNumber.multiply(firstDataArgs[1], secondDataArgs[0]),
            MyNumber.multiply(firstDataArgs[1], secondDataArgs[1])
        ];
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
                console.log('11111');
                console.log(arr);
                
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
        
        let notX: MyNumber = multipliedValuesNotX.reduce((acc, current) => {
            acc.num += current.num;
            return acc;
        }, new MyNumber());
        
        let printedData: string = '';

        result.reverse().forEach(([mn], index) => {
            if(mn.hasX && mn.num === 0) {
                return;
            }
            printedData += mn.getPrintData() + ' + ';
        });

        printedData += notX.getPrintData();

        console.log(printedData);
        rl.close();
    });
    
});