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
let a;    // assigns the variable a, but not yet setting a value (will be 'undefined')
let b = 1;   // assigns a variable and sets it value to the number 2
let c = "hello world";  // assigns a variable c and sets it value to a string
const MY_CONST = "My Constant Value"; // defines and initialises a variable which cannot be changed

// Typeof - Returns the type of data being stored in a variable 
console.log(typeof c);  // prints 'string' to the console.

// array.length - returns the length of an array (strings are simple arrays)
console.log(c.length);  // prints 11

// array.includes - reurns a boolean if a given string is present in another
console.log(c.includes("world"));   // returns true

// string.split - splits a tring into an array, delimetered by a given string
console.log(c.split(" "));   // prints ["Hello", "world"]

// array[n] - returns an array value at a given position (The first position in an array is 0)
var myArray = [1,2,3,4,5];   // define a variable and initialise it with an array
console.log(myArray[3]);   // returns the 4th value in the array, which is 4

// string.replace - replaces one string value with another
console.log(c.replace("world", "there"));  // replaces world with there, then prints the new string

// Number(string) - Tries to convert a string to a number
let d = "5";  // assigns the string "5" to a variable d
console.log(Number(d));   // Prints the number 5

// Arrays
let newArray = []; // the square brackets indicate this is an array. Nothing inside means an empty array
console.log(newArray.length);  // returns 0
let populatedArray = [1,2,3,"a","b","C"];  //creates a variable and assigns a populated array
console.log(populatedArray.length);  // returns 6
newArray.push("hello");  // push adds a value to the end of an array
console.log(newArray.length);  // returns 1
newArray.push("there");  // push adds a value to the end of an array
let popValue = newArray.pop();  // removes and returns the last value in an array
console.log(popValue);  // prints 'there';
// array.reverse() - Reverses the items in an array
console.log(populatedArray.reverse()); // prints [ 'C', 'b', 'a', 3, 2, 1 ]

// array.filter retruns a new array of items which match certain criteria.
let sampleArray = ["cat", "dog", "cat", "dog", "cat", "dog", "dog", "dog"];
console.log(sampleArray.filter((item) => { return item == "dog" }).length);  // returns the length of a new array, being 5

// array.map retruns a new array of changed items. could be selective or everything
let numArray = ["cat", "dog", "cat", "dog", "cat", "dog", "dog", "dog"];
console.log(sampleArray.map((item) => { return "bird" }));  // returns an array of birds

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

// moving through arrays
// FOR IN - itterates by index
for (let f in fruits){
    console.log(fruits[f]);
}

// for each - itterates by element in array
fruits.forEach(f => {
    console.log(f);
});