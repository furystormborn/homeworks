export class MyNumber {

    public num: number = 0;
    public hasX: boolean = false;
    public power: number = 1;

    constructor(data: string = '') {

        if('' === data) {
            return;
        }

        let dataMinus: boolean = false;
        if( data.startsWith('!') === true ) {
            dataMinus = true;
            data = data.slice(1, data.length);
        }
        let dataX: number = data.indexOf('x');
        let dataPower: number = data.indexOf('^');
        let numJoin: number = data.length;

        if(dataX >= 0) {
            this.hasX = true;
            numJoin = dataX;
        }

        if(dataPower >= 0 && this.hasX === true) {
            this.power = parseInt(data[dataPower+1]);
        }

        if(numJoin === 0) {
            this.num = 1;
        } else {
            this.num = parseInt(data.slice(0, numJoin));
        }

        if(dataMinus === true) {
            this.num = parseInt('-'+this.num);
        }

    }

    public static multiply(data1:MyNumber, data2:MyNumber): MyNumber {
        let multipliedNumber = new MyNumber();

        if( data1.hasX && data2.hasX ) {
            multipliedNumber.power = data1.power + data2.power;
            multipliedNumber.num  = data1.num * data2.num;
            multipliedNumber.hasX  = true;
        }
        else if( data1.hasX || data2.hasX ) {
            multipliedNumber.power = data1.power >= data2.power ? data1.power : data2.power; 
            multipliedNumber.hasX = true;
            multipliedNumber.num = data1.num * data2.num;
        }
    
        else {
            multipliedNumber.num = data1.num * data2.num;
        }

        return multipliedNumber;
    }

    public getPrintData(): string {
        let data: string = '';

        if(this.num === 0 && !this.hasX) {
            return data;
        }
        
        if(this.num !== 0) {
            data += this.num;
        }

        if(this.hasX) {
            data += 'x';
        }

        if(this.power !== 1) {
            data += `^${this.power}`;
        }

        return data;

    }
 }