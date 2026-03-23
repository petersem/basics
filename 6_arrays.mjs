// Arrays
import logger from './utilities/logger.mjs'

// define and initialise
//
logger('define and initialise array');
let newArray = []; // the square brackets indicate this is an array. Nothing inside means an empty array
console.log(`Empty array is ${newArray.length} elements long`);  // returns 0
let populatedArray = [1,2,3,"a","b","C"];  //creates a variable and assigns a populated array
console.log(`Populated array is ${populatedArray.length} elements long`);  // returns // array[n] - returns an array value at a given position (The first position in an array is 0)

// interrogating arrays
//
logger('Interrogating arrays')
var myArray = [1,2,3,4,5];   // define a variable and initialise it with an array
console.log('4th element is', myArray[3]);   // returns the 4th value in the array (0 based), which is 4

// array.length - returns the length of an array (strings are simple arrays)
//
const myConst = "Hello there world"
console.log(myConst.length);  // prints 18

// array.includes - reurns a boolean if a given string is present in another
//
console.log(myConst.includes("world"));   // returns true

// Array functions
//
logger('Array split')

// string.split - splits a string into an array of word, delimetered by a given string
//
console.log(myConst.split(" "));   // prints ["Hello", "world"]

logger('array push / pop');
newArray.push("hello");  // push adds a value to the end of an array
console.log(newArray.length);  // returns 1

newArray.push("there");  // push adds a value to the end of an array
let popValue = newArray.pop();  // removes and returns the last value in an array
console.log(popValue);  // prints 'there';

logger('array reverse');
// array.reverse() - Reverses the items in an array
//
console.log(populatedArray.reverse()); // prints [ 'C', 'b', 'a', 3, 2, 1 ]

logger('flatten array');
// flatten array array. flat(depth)
//
const a = [1,2,[1,2],3,4];
console.log('As is',a);    
console.log('Flattened', a.flat(1));

logger('Array sorts');
// array.sort - sorts an array
// With no parameters for the sort function, each array element is converted to a string, then compared alphbetically.

// sorting numbers - does not work as you expect
let numbersArray = [155,21,3,4,5,15,1,2, 15];
console.log(numbersArray.sort());  // Returns [1, 15, 15, 155, 2, 21,  3, 4, 5 ]

// sorting string - works as expected
let fruits = ["Banana", "Orange", "Apple", "Mango", "Advocado"];
console.log(fruits.sort());  // Returns [ 'Advocado', 'Apple', 'Banana', 'Mango', 'Orange' ]

// sorting, using a function takes two values, a and b (the first value, and second value to compare)
//     It a negative result if a should come before b, and a positive result if a should come after b. 
//     A zero or NaN result indicates a and b are considered equal. 

// sort numbers function
function compareNum(a, b) {
    if ( a < b ) {
        return -1;
    }
    else if ( a > b ) {
        return 1;
    }
    // a and b must be equal
    return 0;
}
// sort our numbers array using our new compareNum function
console.log(numbersArray.sort(compareNum));  // prints as logically expected [1, 2, 3, 4, 5, 15, 15, 21, 155]

// Serealise/Deserialise arrays
//
logger('serialise/deseriale array');
// serialise and deserialise objects
// Serialise - Turn into a structured string
let serialFruit = JSON.stringify(fruits);
console.log(`String: 
${serialFruit}`);
// De-Serialise - Turn into an object
let deSerialFruit = JSON.parse(serialFruit);
console.log('Object:');
console.log(deSerialFruit);

logger('array to string with join');
// array.join(delimeter) - Moves the elements in a array into a delimetered string
let petArray = ['Dog', 'Cat', 'Bird'];
console.log(petArray.join());   // prints a string "Dog,Cat,Bird"

// isArray?
//
logger('test if array');
// arry.isArray(yourArray) - Tests if yourArray is an array. Dont use TypeOf() for arrays as this would return an Object
console.log(Array.isArray(petArray));  // returns true

// array.length = 0 - Empties an array
//
logger('empty an array with length=0');

petArray.length = 0;
console.log(petArray);  // returns []

// concatenate arrays
//
logger('array concatenate');

let arr1 = [1,2,3];
let arr2 = [4,5,6];
console.log(arr1.concat(arr2)); // merges arr2 into arr1 and prints [ 1, 2, 3, 4, 5, 6 ]

// The Map object holds in-memory key-value pairs 
//
logger('Map object - not really an array, but similar');


let mm = new Map()
// can add any value type
mm.set("matt",1);
mm.set("lance", "potato");
mm.set("joe",{safeWord: 'pineapple', fruit: 'apple', implement: 'pen'})
// check for a key with 'has'
console.log('item present:', mm.has("perpendicular"));  // returns false as doesnt exist in Map
// iiterable
mm.forEach(m => console.log('item value in map:', m));
// get size
console.log('size:', mm.size);
// get value
console.log('value of lance:', mm.get("lance"));

console.log('lance key present:',mm.has("lance"));  // true
// delete key
mm.delete("lance");
console.log('lance key present:', mm.has("lance"));   // false

// Array Iteration Method - foreach, filter, map, entries, every, keys
//

// for each - itterates by element in array
//
logger('itterate array values with foreach');

fruits.forEach(f => {
    console.log(f);
});

// Filter
//
logger('itterate array and filter to return a new subset array');
// array.filter retruns a new array of items which match certain criteria.
let sampleArray = ["cat", "dog", "cat", "dog", "cat", "dog", "dog", "dog"];
console.log(sampleArray.filter((item) => { return item == "cat" }));  // returns a subset array of cats

// Map
//
logger('Itterate array with map, to mutate all elements');
// array.map retruns a new array of changed items. could be selective or everything
let numArray = ["cat", "dog", "cat", "dog", "cat", "dog", "dog", "dog"];
console.log(sampleArray.map((item) => { return "bird" }));  // returns an array of birds

// Entries itterator
//
logger('Entries returns an iterator object with key/value pairs from an array position/value');

const cars = ["Commodore", "Civic", "G-Wagon", "Supra"];

// Create an Iterator
const list = cars.entries();

// List the Entries
for (let x of list) {
  console.log(x);
};

// Keys itterator
//
logger('Keys returns an iterator object with key of an array');

// Create an Iterator
const keyList = cars.keys();

// List the Entries
for (let x of keyList) {
  console.log(x, cars[x]);
};

// Every - executes a function for each array element - returns true if all elements are true, else false
//
logger('Every - executes a function for each array element. Returns true if all elements true');

const ages = [32, 33, 16, 40];

// Create a Test Function
function checkAge(age) {
  return age > 18;
}

// Are all ages over 18?
console.log(ages);
console.log('All over 18?', ages.every(checkAge));

// array reduce executes a reducer function for all array elements to return a single value
//
logger('array.reduce()');

const numbers = [15.5, 2.3, 1.1, 4.7];
// calls the reducer fuction and the initial value
console.log('Reducer value is:', numbers.reduce(getSum, 0));

// reducer function - takes an initialValue (total) and the current value
function getSum(total, currentValue) {
  console.log(total, currentValue)
  return total + Math.round(currentValue);
}