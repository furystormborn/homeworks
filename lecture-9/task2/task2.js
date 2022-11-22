import * as dotenv from 'dotenv';
dotenv.config();
let day = process.env.DAYS;


if( day !== undefined ) {
    let data = await import(`./days/${day}.js`);
    console.log(data.default);
}