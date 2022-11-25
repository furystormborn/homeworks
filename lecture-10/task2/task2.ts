import * as readline from 'node:readline';
import { Point } from './point.ts';


const rl:readline.Interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

async function getUserData(question: string) {
    let promise: Promise<string> = new Promise((res,rej) => rl.question(question, input => res(input)));
    return promise;
}


async function run() {

let userInputPoint: string = await getUserData('Coordinates of the point O: (x,y): ');

let processedData: string[] | boolean = Point.processCoordinate(userInputPoint.split(','));
let pointO: Point|null = null;
let pointA: Point|null = null;
let pointB: Point|null = null;
let pointC: Point|null = null;

if(processedData !== false) {
    pointO = new Point(processedData);
}
let userInputA: string = await getUserData('Coordinates of the point A: (x,y): ');

processedData = Point.processCoordinate(userInputA.split(','));
if(processedData) {
    pointA = new Point(processedData);
}

let userInputB: string = await getUserData('Coordinates of the point B: (x,y): ');

processedData = Point.processCoordinate(userInputB.split(','));
if(processedData) {
    pointB = new Point(processedData);
}
let userInputC: string = await getUserData('Coordinates of the point C: (x,y): ');

processedData = Point.processCoordinate(userInputC.split(','));
if(processedData) {
    pointC = new Point(processedData);
}

if( pointO && pointA && pointB && pointC ) {
    if( Point.isPointInTriangle(pointO,pointA,pointB,pointC) === true ) {
        console.log('Point lies in the triangle');
    } else {
        console.log('Point lies out of the triangle');
    }
}

rl.close();

}
run();