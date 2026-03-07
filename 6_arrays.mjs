// Arrays
let newArray = []; // the square brackets indicate this is an array. Nothing inside means an empty array
console.log(newArray.length);  // returns 0
let populatedArray = [1,2,3,"a","b","C"];  //creates a variable and assigns a populated array
console.log(populatedArray.length);  // returns // array[n] - returns an array value at a given position (The first position in an array is 0)

var myArray = [1,2,3,4,5];   // define a variable and initialise it with an array
console.log(myArray[3]);   // returns the 4th value in the array, which is 46

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

// serialise and deserialise objects
// Serialise - Turn into a structured string
let serialFruit = JSON.stringify(fruits);
console.log(`String: 
${serialFruit}`);
// De-Serialise - Turn into an object
let deSerialFruit = JSON.parse(serialFruit);
console.log('Object:');
console.log(deSerialFruit);

// array.join(delimeter) - Moves the elements in a array into a delimetered string
let petArray = ['Dog', 'Cat', 'Bird'];
console.log(petArray.join());   // prints a string "Dog,Cat,Bird"

// arry.issArray(yourArray) - Tests if yourArray is an array. Dont use TypeOf() for arrays as this would return an Object
console.log(Array.isArray(petArray));  // returns true