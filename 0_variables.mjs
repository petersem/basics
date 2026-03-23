// Variables
import logger from './utilities/logger.mjs'

// javascript types
//    number - a number from -infinity to +infinity
//    string - textual data
//    boolean - true or false. Can also be represented as 1 and 0 respectively
//    undefined - the variable that has not been set with a value
//    null - Nothing. not the same as undefined. It is specifically set to null
//    bigint - larger number percision 
//    Object - a complex data type which can include multiple primitive values (as above)
//    Array - a collection of items, which can be the same or different types

// Defining and initialising variables
//
logger('Defining and initialising variables');
let a;    // assigns the variable a, but not yet setting a value (will be 'undefined')
let b = 1;   // assigns a variable and sets it value (initialises) to the number 2
const MY_CONST = "My Constant World"; // defines and initialises a variable which cannot be changed
console.log(a, b, MY_CONST);

// Typeof - Returns the type of data being stored in a variable 
//
logger('typeOf');
console.log(typeof c);  // prints 'string' to the console.

// array.length - returns the length of an array (strings are simple arrays)
console.log(MY_CONST.length);  // prints 11

// array.includes - reurns a boolean if a given string is present in another
console.log(MY_CONST.includes("world"));   // returns true

// string.split - splits a string into an array, delimetered by a given string
console.log(MY_CONST.split(" "));   // prints ["Hello", "world"]

// string.replace - replaces one string value with another
console.log(MY_CONST.replace("world", "there"));  // replaces world with there, then prints the new string

// Number(string) - Tries to convert a string to a number
let d = "5";  // assigns the string "5" to a variable d
console.log(Number(d));   // Prints the number 5

// objects - a complex type which can include multiple other types
let myPets = {
    aninmal: "cat",
    pets: 5,
    names: [ "Gary", "Bruce", "Rojor", "Testeclese", "Fluffy"] // can include arrays
}  // creates an object that defines a set of pets and thier names
console.log(myPets.names); // prints the names of the pets

// Enums provide a set of choices for a given option. this is to improve the speed of development and limit options
// define a colours enum
const eColours = {
    "RED": 1,
    "BLUE": 2,
    "WHITE": 3,
    "PINK": "Ohhh!"
}

console.log(eColours.BLUE); // prints 2

// Casting - Turning a variable from one type to another.
// Explicit casting
let myVariable = "5";   
myVariable = Number(myVariable); // Explicitly change a string to number "5" to 5
console.log(myVariable + 2);  // prints the number 7

// implicit casting
let myNumber = 5;
myNumber = myNumber + "1";  // the addition of a string and a number converts the number into a string, the concatenates the strings
console.log(myNumber);  // prints the string "51"

// Optional Chaining - return 'undefined' if a higher-level object is not present, rather than error
//
let person = {
    name: 'Fred',
    email: 'fred.flintstone@quarry.com'
}

console.log(person.avatar?.url);  // Use '?' If the avatar property not there, dont get the url, just return undefined

// ++ increment before and after evaluation
let i = 1;
console.log(i++);  // prints 1, then increments a to 2

let j = 1;
console.log(++j); // increments j to 2, then prints 2

// same logic for -- to decrement a number

// Structuring and destructuring variables
//
logger('Structuring and destructuring variables');
let m = 1;
let p = 10;
console.log([m,p]);  // prints [1, 10] as now an array
[m,p] = [p,m]
console.log([m,p]);  // prints [10,1] as new array is reversed from original

// Truthy and Falsy values - values considered true or false in a boolean context
//
logger('Truthy and Falsy falues');

// All values are considered true unless define falsy
// Falsy, being: false, 0, -0, 0n, "", null, undefined, NaN

// tests: if true, return true, else false
function isTrue(thing) {
    if (thing) {
        console.log(thing, true);
    } else {
        console.log(thing, false);
    }
}

isTrue(true);
isTrue({});
isTrue([]);
isTrue(42);
isTrue("0");
isTrue("false");
isTrue(new Date());
isTrue(-42);
isTrue(12n);
isTrue(3.14);
isTrue(-3.14);
isTrue(Infinity);
isTrue(-Infinity);
isTrue(false);
isTrue(0);
isTrue("");
isTrue(null);
isTrue(NaN);
isTrue(undefined);
isTrue(0n);
isTrue(-0);
