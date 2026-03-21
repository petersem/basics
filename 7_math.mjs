// math functionality in js

// increment a numeric variable
let a = 5;
a++  // is the same as saying a = a + 1
console.log('Increment: ' + a);  // prints 6

// decrements a numeric variable
a-- // is the same as saying a = a - 1
console.log('Decrement: ' + a);  // prints 5

// Math.min([array of numbers]) // returns the smallest number
let numArray = [9, 55, 44, 2, 900, 1];
console.log('Min: ' + Math.min(...numArray));; // prints 1 - Note that the ... syntax means this is the only argument for a required range
console.log('Min: ' + Math.min(4,66,777,2,-6));; // prints -6

// Math.max([array of numbers]) // returns the highest number
console.log('Max: ' + Math.max(...numArray));; // prints 900 
console.log('Max: ' + Math.max(4,66,777,2,-6));; // prints 777

// Math.trunc(number) - removes any fractions and only returns an integer. No rounding
let mt = 5.9;
console.log('Trunc: ' + Math.trunc(mt));  // returns 5

// Math.floor(number) - rounds down and returns an integer
let mf = 5.9;
console.log('Floor: ' + Math.floor(mf));  // returns 5

// Math.ceil(number) - rounds up and returns an integer
let mc = 5.1;
console.log('Ceil: ' + Math.ceil(mc));  // returns 6

// Math.round(number) - rounds to the nearest integer
let mr = 4.99999;
console.log('Round: ' + Math.round(mr));  // returns 5

// Math.random() - Returns a fraction between 0 and 1
let rnd = 100; // set the max random number
console.log('Random: ' + (Math.floor(Math.random() * rnd) + 1)); // return a number between 1 and 100

