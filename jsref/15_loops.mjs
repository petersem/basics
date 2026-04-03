// Loops
import logger from '../utilities/logger.mjs'

// for loop
//
logger('For loop');

// loop 20 times, starting at 1 until we get to 20
for (let index = 1; index <= 20; index++) {
    console.log(index);
}
console.log('For done!');


// while loop - Condition set upfront. Good for loops that depend on external factors. Will run as long as the condition is true
//
logger('While loop');

let cntr = 0;
while (cntr != 5) {
    console.log('Not done yet');
    cntr++;
}
console.log('While done!');

// do while loop - Runs the code at least once before checking the condition. Condition checked after each itterration
//
logger('Do-While loop');

let i = 0;
do {
    console.log(i);
    i++;
} while (i < 5)
console.log('do-while done!');

// for-in
//
logger('For-in loop');

// Itterates over keys - Great for when you want to itterate over object keys
const matt = {
    favColour: "purple nurple",
    spiritAnimal: "brush turkey",
    hobby: "Hommus"
    };
for (const k in matt) {
    console.log(k + ':', matt[k]);
}
console.log('for-in done');

