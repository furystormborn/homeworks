const createBase = (base) => {
    return (nested) => {
        return nested === undefined ? base : base + nested;
    }
}

let addSix = createBase(6);
console.log(addSix(10));
console.log(addSix(21));