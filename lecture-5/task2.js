
const circle1 = {
    x: 1,
    y: 2,
    r: 1,

    square() {
        return Math.PI * Math.pow(this.r, 2);
    },
    perimeter() {
        return Math.PI * this.r * 2;
    },
    crossingSquare(obj) {
        let s = (this.square() / 4) + (obj.square() / 4) - Math.pow(this.r, 2);
        return s > 0 ? s : 'Not positive square';
    }
}

const circle2 = {
    x: 2,
    y: 4,
    r: 2,

    square() {
        return Math.PI * Math.pow(this.r, 2);
    },
}


console.log(circle1.crossingSquare(circle2));
