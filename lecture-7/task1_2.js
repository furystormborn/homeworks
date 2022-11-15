const tti = require('triangle-triangle-intersection');

class Triangle {
    AB = 10;
    AC = 15;
    BC = 11;

    points = []

    constructor(fs,ss,ts, coordinates) {
        this.AB = fs;
        this.AC = ss;
        this.BC = ts;
        this.points = coordinates;
        
    }

    square() {
        half = this.perimeter() / 2;
        return Math.sqrt( half * ( half - this.AB ) * (half - this.AC) * (half - this.BC) );
    }

    perimeter() {
        return this.AB + this.AC + this.BC;
    }
    
}

class Rectangle {
    length = 5;
    width = 10;

    topLeftPoint = {x:0, y:0};

    square() {
        return this.length * this.width;
    }

    constructor(l, w, coord) {
        this.length = l;
        this.width = w;
        this.topLeftPoint.x = coord.x ?? 0;
        this.topLeftPoint.y = coord.y ?? 0;
    }
}

class Parallelogram extends Rectangle {
    
    height = 7;

    constructor(l, w, h) {
        super(l, w);
        this.height = h;
    }

    square() {
        return this.width * this.height;
    }   
}

class Square extends Rectangle {
    
    constructor(side) {
        super(side, side);
    }

    
}


class Circle {
    radius = 10;
    #diameter = 20; // Incapsulation

    constructor(r) {
        this.radius = r;
    }

    square() {
        return Math.PI * Math.pow(this.radius, 2);
    }
}

const Figure = (() => {

    /**
     * Encapsulation as function declaration
     */
   let private_data = {
        some: 'data'
   };

   let param1, param2;


   const Figure = function( p1, p2 ) {
        console.log( 'Kind of constructor' );
        param1 = p1;
        param2 = p2;
   }

   Figure.prototype.sayHi = function() {
        console.log('Hi');
   }

   Figure.prototype.getParam1 = function() {
        return param1;
   }

   Figure.prototype.getParam2 = function() {
        return param2;
    }
    Figure.prototype.getPrivateData = function() {
        return private_data;
    }
   return Figure;
})();


const test = new Figure('111', '2222');

test.sayHi();
console.log( test.getParam1(), test.getParam2(), test.getPrivateData() );


function getIntersectRectangleSquare(r1, r2) {
    return new Rectangle(
        Math.max(r1.coord.x, r2.coord.x), Math.max(r1.coord.y, r2.coord.y),
        Math.min(r1.coord.x + r1.width, r2.coord.x + r2.width) - Math.max(r1.coord.x, r2.coord.x),
        Math.min(r1.coord.y + r1.height, r2.coord.y + r2.height) - Math.max(r1.coord.y, r2.coord.y)
      ).square();
}

function getIntersectCircleSquare(c1,c2) {
        let s = (c1.square() / 4) + (c2.square() / 4) - Math.pow(c1.radius, 2);
        return s > 0 ? s : 'Not positive square';
}

let T1 = new Triangle(3,4,5,[[0,0,0],[1,0,0],[1,1,0]]);
let T2 = new Triangle(6,7,6,[[0,0,1],[1,0,1],[1,1,-1]]);

let intersection = tti(T1, T2);