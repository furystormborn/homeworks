let example = [1,4,-1,15];

myReduce = (arr, callback, initialValue) => {
    let accumulator = initialValue;
    for(element of arr) {
        accumulator = callback.call(this, accumulator, element, arr.indexOf(element), arr);
    }

    return accumulator;
}

console.log(myReduce( example, func1, 0 ));


function func1(acc, value, index, arr) {
    return acc + value;
}