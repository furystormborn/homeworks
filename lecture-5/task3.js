const circle = {
    x: 0,
    y: 0,
    r: 5,
    isPointIncluded(point) {
        return Math.pow(this.r, 2) === (Math.pow(this.x - point.x, 2) + Math.pow(this.y - point.y, 2)) ? true : false;
    }
}

const point = {
    x: 3,
    y: 4
}

console.log(circle.isPointIncluded(point));