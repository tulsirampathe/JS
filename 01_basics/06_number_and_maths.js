const score = 400;
// console.log(score);


const balance = new Number(100)
// console.log(balance);


// console.log(balance.toString().length);
// console.log(balance.toFixed(2)); // For number of decimal point values

const otherNumber = 123.5435

// console.log(otherNumber.toPrecision(4))


const hundreds = 100000000
// console.log(hundreds.toLocaleString('en-IN'))


// ********************** Maths ******************

// console.log(Math);
// console.log(Math.abs(-4)) // nagitive -> positive
// console.log(Math.round(4.3))
// console.log(Math.ceil(4.2))
// console.log(Math.floor(4.9))

// console.log(Math.pow(2, 4))

// console.log(Math.min(4, 2, 6, 8));
// console.log(Math.max(4, 2, 6, 8))

// console.log(Math.random()); //-> always give values bw 0 and 1
// console.log((Math.random() * 10) + 1); //-> we have values bw 1 to 10, if value in 0 then we +1 it
// console.log(Math.floor(Math.random() * 10) + 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
