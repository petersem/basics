// math functionality in js

// increment a numeric variable
let a = 5;
a++  // is the same as saying a = a + 1
console.log(a);  // prints 6

// decrements a numeric variable
a-- // is the same as saying a = a - 1
console.log(a);  // prints 5

// Math.min([array of numbers]) // returns the smallest number
let numArray = [9, 55, 44, 2, 900, 1];
console.log(Math.min(...numArray));; // prints 1 - Note that the ... syntax means this is the only argument for a required range
console.log(Math.min(4,66,777,2,-6));; // prints -6

// Math.max([array of numbers]) // returns the highest number
console.log(Math.max(...numArray));; // prints 900 
console.log(Math.max(4,66,777,2,-6));; // prints 777

