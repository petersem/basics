# Arrays

- [Arrays](#arrays)
  - [Define and initialise](#define-and-initialise)
  - [Using arrays](#using-arrays)
    - [Return element at position](#return-element-at-position)
    - [Serealise/Deserialise arrays](#serealisedeserialise-arrays)
  - [Array functions](#array-functions)
    - [Array length](#array-length)
    - [Includes](#includes)
    - [Split](#split)
    - [Join](#join)
    - [Array Push](#array-push)
    - [Array Pop](#array-pop)
    - [Array Reverse](#array-reverse)
    - [Flatten an Array](#flatten-an-array)
    - [Array Sort](#array-sort)
      - [No parameters](#no-parameters)
      - [Sorting with a function](#sorting-with-a-function)
    - [Is Array](#is-array)
    - [Empty an array](#empty-an-array)
    - [Concatenate arrays](#concatenate-arrays)
  - [Itterating arrays](#itterating-arrays)
    - [Filter](#filter)
    - [Map](#map)
    - [For-Each](#for-each)
    - [Entries itterator](#entries-itterator)
    - [Keys itterator](#keys-itterator)
    - [Every](#every)
    - [Reduce](#reduce)
    - [For-of](#for-of)
  - [Not arrays, but similar](#not-arrays-but-similar)
    - [Map Object](#map-object)
    - [Set](#set)

[Return Home](/basics)

## Define and initialise

``` js
// the square brackets indicate an array. Nothing inside means empty array
let newArray = []; 
console.log(`Empty array is ${newArray.length} elements long`);  // returns 0
let populatedArray = [1,2,3,"a","b","C"];  // Assigns array to variable
console.log(`Populated array is ${populatedArray.length} elements long`);  // returns // array[n] - returns an array value at a given position (The first position in an array is 0)
```

**[`^        back to top        ^`](#arrays)**

## Using arrays

### Return element at position

Array are 0 based and elements can be address discretely. `array[position]`

``` js
var myArray = [1,2,3,4,5];   // define a variable and initialise it with an array
console.log('4th element is', myArray[3]);   // 4
```

**[`^        back to top        ^`](#arrays)**

### Serealise/Deserialise arrays

Used for sending or receiving data from restful APIs

``` js
// Serialise - object to string
let fruits = ["Banana", "Orange", "Apple", "Mango", "Advocado"];
let serialFruit = JSON.stringify(fruits);
console.log(`String: 
${serialFruit}`);

// De-Serialise - Turn into an object
let deSerialFruit = JSON.parse(serialFruit);
console.log('Object:');
console.log(deSerialFruit);
```

**[`^        back to top        ^`](#arrays)**

## Array functions

### Array length

You can get the length of an array, including strings. (Strings are actually an array of characters)

``` js
const myConst = "Hello there world"
console.log(myConst.length);  // prints 18
const myArray = [0,1,2,3];
console.log(myArray.length); // prints 4
```

**[`^        back to top        ^`](#arrays)**

### Includes

Reurns a boolean if a given string is present in another

``` js
const myConst = "Hello world";
console.log(myConst.includes("world"));   // returns true
```

**[`^        back to top        ^`](#arrays)**

### Split

Splits a string into an array of word, delimetered by a given string

``` js
const myConst = "Hello world";
console.log(myConst.split(" "));   // prints ["Hello", "world"]
```

**[`^        back to top        ^`](#arrays)**

### Join

Array to string with join()

``` js
// array.join(delimeter) - Moves the elements in a array into a delimetered string
let petArray = ['Dog', 'Cat', 'Bird'];
console.log(petArray.join());   // prints a string "Dog,Cat,Bird"
```

**[`^        back to top        ^`](#arrays)**

### Array Push

Push adds a new array element at the end of an array

``` js
let newArray = [];
newArray.push("hello");  
console.log(newArray.length);  // returns 1
```

**[`^        back to top        ^`](#arrays)**

### Array Pop

Removes and returns the last value in an array

``` js
let newArray = [1,2,3];
let popValue = newArray.pop();  // newArray = [1,2] and popValue = 3
console.log(popValue);  // prints 3
```

**[`^        back to top        ^`](#arrays)**

### Array Reverse

Reverses the items in an array

``` js
console.log(populatedArray.reverse()); // prints [ 'C', 'b', 'a', 3, 2, 1 ]
```

**[`^        back to top        ^`](#arrays)**

### Flatten an Array

Elevate arrays within arrays to the top level. array.flat(depth)

``` js
const a = [1,2,[1,2],3,4];
console.log('As is',a);    
console.log('Flattened', a.flat(1));
```

**[`^        back to top        ^`](#arrays)**

### Array Sort

array.sort() - sorts an array


#### No parameters

With no parameters for the sort function, each array element is converted to a string, then compared alphbetically. This is fine for text elements, but no good for numerics. 

``` js
// sorting numbers - does not work as you expect
let numbersArray = [155,21,3,4,5,15,1,2, 15];
console.log(numbersArray.sort());  // Returns [1, 15, 15, 155, 2, 21,  3, 4, 5 ]

// sorting string - works as expected
let fruits = ["Banana", "Orange", "Apple", "Mango", "Advocado"];
console.log(fruits.sort());  // Returns [ 'Advocado', 'Apple', 'Banana', 'Mango', 'Orange' ]
```

**[`^        back to top        ^`](#arrays)**

#### Sorting with a function

Sorting, using a function takes two values, a and b (the first value, and second value to compare). 

- If a `negative` result, then it should come **before** b
- If a `positive` result, it a should come **after** b.
- A zero or NaN result indicates a and b are considered equal.

``` js
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
console.log(numbersArray.sort(compareNum));  // prints as expected [1, 2, 3, 4, 5, 15, 15, 21, 155]
```

**[`^        back to top        ^`](#arrays)**

### Is Array

Return `true` if is an array. 

> Dont use TypeOf(array) to test for arrays as this would return an Object.

``` js
let petArray = ['Dog', 'Cat', 'Bird'];
console.log(Array.isArray(petArray));  // returns true
```

**[`^        back to top        ^`](#arrays)**

### Empty an array

``` js
let petArray = ['Dog', 'Cat', 'Bird'];
petArray.length = 0;
console.log(petArray);  // returns []
```

**[`^        back to top        ^`](#arrays)**

### Concatenate arrays

Merge arrays together

``` js
let arr1 = [1,2,3];
let arr2 = [4,5,6];
arr1.concat(arr2); // merges arr2 into arr1 [ 1, 2, 3, 4, 5, 6 ]
```

**[`^        back to top        ^`](#arrays)**

## Itterating arrays

Methods which move through all the elements in an array

### Filter

Itterate array using a filter to return a `new` array subset

``` js
// Retruns a new array of items which match certain criteria.
let sampleArray = ["cat", "dog", "cat", "dog", "cat", "dog", "dog", "dog"];
// returns a new array of only cats
const catArray = sampleArray.filter((item) => { return item == "cat" });
```

**[`^        back to top        ^`](#arrays)**

### Map

Itterate array with map, to mutate all or some elements into a `new` array

``` js
// returns an array of all birds
let sampleArray = ["cat", "dog", "cat", "dog", "cat", "dog", "dog", "dog"];
const birdArray = sampleArray.map((item) => { return "bird" });  

// returns an array of birds and cats (replaces dog with bird, using ternary oper)
const catBirdArray = sampleArray.map((item) => (item=="cat") ? "cat" : "bird" ); 

```

**[`^        back to top        ^`](#arrays)**

### For-Each

For each - itterates by element in array

``` js
let fruits = ["Banana", "Orange", "Apple", "Mango", "Advocado"];

fruits.forEach(f => {
    console.log(f);
});
```

**[`^        back to top        ^`](#arrays)**

### Entries itterator

Entries returns an iterator object with key/value pairs from an array position/value

``` js
const cars = ["Commodore", "Civic", "G-Wagon", "Supra"];

// Create an Iterator
const list = cars.entries();

// List the Entries
for (let x of list) {
  console.log(x);
};
```

**[`^        back to top        ^`](#arrays)**

### Keys itterator

Keys returns an iterator object with key of an array

``` js
// Create an Iterator
const keyList = cars.keys();

// List the Entries
for (let x of keyList) {
  console.log(x, cars[x]);
};
```

**[`^        back to top        ^`](#arrays)**

### Every

Executes a function for each array element - returns true if all elements are true, else false

``` js
const ages = [32, 33, 16, 40];

// Create a Test Function
function checkAge(age) {
  return age > 18;
}

// Are all ages over 18?
console.log(ages);
console.log('All over 18?', ages.every(checkAge));
```

**[`^        back to top        ^`](#arrays)**

### Reduce

Reduce executes a reducer function for all array elements to return a single value

``` js
const numbers = [15.5, 2.3, 1.1, 4.7];
// calls the reducer fuction with the initial value of 0
console.log('Total is:', numbers.reduce(getSum, 0));

// reducer function - takes an initialValue (total) and the current value
function getSum(total, currentValue) {
  console.log(total, currentValue)
  return total + Math.round(currentValue);
}
```

**[`^        back to top        ^`](#arrays)**

### For-of

Itterates over values of an array

``` js
const colours = ["purple nurple", "toejam teal", "bum brown"];
for (const col of colours) {
    console.log(col);
}
console.log('for-of done');
```

**[`^        back to top        ^`](#arrays)**

## Not arrays, but similar

### Map Object

The Map object holds in-memory key-value pairs. (Not to be confused with array.map())

``` js
let mm = new Map()

// can add any value type (key,value)
mm.set("matt",1);
mm.set("lance", "potato");
mm.set("joe",{safeWord: 'pineapple', fruit: 'apple', implement: 'pen'})

// check for a key with 'has'
console.log('item present:', mm.has("lance"));  // returns true

// iiterable
mm.forEach(m => console.log('item value in map:', m));

// get size
console.log('size:', mm.size);

// get value
console.log('value of lance:', mm.get("lance"));

// delete key
mm.delete("lance");
console.log('lance key present:', mm.has("lance"));   // false
```

**[`^        back to top        ^`](#arrays)**

### Set

Only contains unique values. 

- Non-unique are not added.
- The order added is preserved.
- Strings, numbers, objects, and functions are allowed. 

``` js
let st = new Set();

st.add('apple');
st.add(5);
st.add('pen');
st.add('pen'); // not added as duplicate
console.log(st);

st.delete('apple'); // delete entry from set
console.log(st);

st.clear(); // clears entire set
console.log(st);

st.add('pen');
console.log(st.has('pen')); // item is preset

console.log(st.size); // get the size of the set
```

**[`^        back to top        ^`](#arrays)**
