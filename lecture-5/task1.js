let obj1 = {
    key1: 'val1'
};
let obj2 = {};

let obj3 = obj4 = {
    same: 'value'
};


const isEmpty = (obj) => Object.keys(obj).length > 0;

console.log(isEmpty(obj1), isEmpty(obj2));

const eqObjects = (target, source) => JSON.stringify(target) === JSON.stringify(source);

console.log( eqObjects(obj3, obj4) );

const shareObject = (source_1, source_2) => {
    
    let sharedObject = {};
    for(key1 in source_1) {
        for(key2 in source_2) {
            if( key1 === key2 && source_1[key1] === source_2[key2] ) {
                sharedObject.key1 = source_1[key1];
            }
        }
    }

    return sharedObject;
}

console.log( shareObject(obj1, obj4) );

const getValueByKey = (obj, key) => {
    return obj[key];
}

console.log(getValueByKey(obj1, 'key1'));