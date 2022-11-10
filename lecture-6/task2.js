let array = [1, 1, 2, 3, 4, 4];

const unique = (arr) => {

    let obj = {};

    for(el of arr) {
        console.log(el);
        obj[el] = '';
    }

    return Object.keys(obj);
}

console.log(unique(array));