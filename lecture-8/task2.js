const user = {
    name: 'Alex',
    age: 21,
    cart: []
}

const goods = [
    {
        name: 'Good1',
        price: 100
    },
    {
        name: 'Good2',
        price: 100
    },
    {
        name: 'Good3',
        price: 100
    },
    {
        name: 'Good4',
        price: 100
    },
];


const getUserWithCallback = (callback) => {
    setTimeout( function() {
        callback(user);
    }, 2000 )
};

const getUserWithPromise = async() => {

    console.log('some of functionality here');
    return new Promise( (res,rej) => {
        if( user.age && user.name ) {
            res(user);
        } else {
            rej(new Error('User not found!'));
        }
    } );
}

const addProductWithCallback = (item_id, callback) => {
    if( goods[item_id] !== undefined ) {
        setTimeout(function() {

            callback(goods[item_id]);
        },1000)
    } else {
        throw Error('ERROR');
    }
}

const addProductWithPromise = async(item_id, user) => {
    return new Promise( (res, rej) => {
        if( goods[item_id] === undefined ) {
            rej(new Error("This product isn't available"))
        }
        user.cart.push(goods[item_id]);
        res(true);
    });
}

const getCartWithCallback = (cart, callback) => {
    if(cart.length > 0) {
        callback(cart);
    } else {
        throw Error('Your cart is empty!');
    }
}

const getCartWithPromise = async (cart, user) => {

return new Promise( (res, rej)=> {

if( cart.length < 0 ) {
    rej(new Error('Your cart is empty'));
}
console.log(JSON.stringify(cart, null, 2));
res(cart);
});
}

const paymentOperationWithCallback = (user_cart, callback) => {
    let sum = user_cart.reduce((prev, current) => {
        prev += current.price;
        return prev;
    }, 0 );
    if(sum > 0) {
        callback(sum)
    } else {
        throw Error('Something went wrong');
    }
}

const paymentOperationWithPromise = async( cart ) => {
    return new Promise( (res, rej) => {
        let sum = cart.reduce((prev, current) => {
            prev += current.price;
            return prev;
        }, 0 );

        if( sum < 0 ) {
            rej(new Error('Something went wrong'))
        }

        res(sum);
    });
}


function run(type = 'callback') {
    if( type === 'callback' ) {
        getUserWithCallback(function(user) {
            console.log(JSON.stringify(user, null, 2));
            addProductWithCallback(2, function(product) {
                user.cart.push(product);
                getCartWithCallback(user.cart, function(cart) {
                    console.log(JSON.stringify(cart, null, 2));
                    paymentOperationWithCallback(cart, function(sum) {
                        console.log( `Payment was successfully! It's cost ${sum}` );
                    })
                });
            });
        });


    } else if(type ==='promise') {
        (async() => {
            const user = await getUserWithPromise();
            console.log(JSON.stringify(user, null, 2));
            await addProductWithPromise(1, user);
            const cart = await getCartWithPromise(user.cart);

            const amount = await paymentOperationWithPromise(cart);
            console.log(amount);
        })();
    }
}
run('promise');

