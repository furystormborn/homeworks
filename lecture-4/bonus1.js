function multiply(num1, num2) {
    return num1 * num2;
}

const double = (num) => {
    return multiply(num, 2);
}

const square = (num) => {
    return multiply(num, num);
}

console.log(double(5));
console.log(square(5));