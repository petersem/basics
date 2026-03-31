# Javascript Variables

## Javascript types


|  Type     | Description                                       |
| --------- | ------------------------------------------------- |
| number    | a number from -infinity to +infinity              |
| string    | textual data                                      |
| boolean   | true or false.                                    |
| undefined | A variable that has not been set with a value     |
| null      | Nothing. not the same as undefined.               |
| bigint    | Larger number percision 
| Object    | A complex data type which can include multiple primitive values (as above) |
| Array     | A collection of items, which can be the same or different types |

### Boolean

> Can also be represented as 1 and 0 respectively.
> 
> All values are considered true unless defined falsy
> 
> Falsy, being: false, 0, -0, 0n, "", null, undefined, NaN

#### True Examples

``` js
- true
- {}
- []
- 42
- "0"
- "false"
- new Date()
- -42
- 12n
- 3.14
- -3.14
- Infinity
- -Infinity
- ( 1 == 1 )    // comparative
```

#### False Examples

``` js
- false
- 0
- ""
- null
- NaN
- undefined
- 0n
- -0
- ( 1 == 2 )    // comparative
```

## Objects

A complex type which can include multiple other types

``` js
// creates an object that defines a set of pets and thier names
let myPets = {
    aninmal: "cat",
    pets: 5,
    names: [ "Gary", "Bruce", "Rojor", "Testeclese", "Spartacus"]
}
console.log(myPets.names); // prints the names of the pets
```

## Enums

Provide a set of choices for a given option. this is to improve the speed of development and limit options to allowed ones only.

``` js
// define a colours enum
const eColours = {
    "RED": 1,
    "BLUE": 2,
    "WHITE": 3,
    "PINK": "Ohhh!"
}

console.log(eColours.BLUE); // prints 2
```

## Defining and initialising variables

- `let` - Defines a variable where the value can be updated
- `const` - Defines a variable with the value is set and immutable
- `var` - Similar to `let`, but old. **DO NOT USE**

``` js
 // assigns a, but not initialised (will be 'undefined')
let a;   

// assigns a variable and initialises it
let b = 1;  
let name = "Hananna";

// assigns and initialises a variable which cannot be changed
const MY_CONST = "This-Is-The-Way"; 
```

## Related functions

`typeof` - Returns the type of data being stored in a variable

``` js
var c = "cat";
// prints 'string' to the console.
console.log(typeof c);
```

`Number(string)` - Tries to convert a string to a number. If there are any non-numeric characts, then NaN is returned.

``` js 
// converts the string "5" to a number
let d = "5";
console.log(Number(d));
```

`parseInt(string) / parseFloat(string)` - Tries to convert a string to a number. Will process the first valid number and ignore subsequent numbers after string characters

``` js
// converts the string "5" to a number
let d = "5 4";
// prints 5
console.log(parseInt(d));
```

## Casting

Turning a variable from one type to another.

### Explicit casting

Explicit Type Conversion occurs when the programmer manually changes the type of the variables.

``` js
let myVariable = "5";   
// Explicitly change a string to number "5" to 5
myVariable = Number(myVariable);  
console.log(myVariable + 2);  // prints the number 7
```

### Implicit casting (Coercion)

Implicit Type Conversion occurs automatically by the JavaScript.

``` js
let myNumber = 5;
// Adding a string and number forces implicit conversion of number to string.
myNumber = myNumber + "1";  
console.log(myNumber);  // prints the string "51"
```

## Structuring and destructuring variables

To get values to and from Objects and arrays.

``` js
let m = 1;
let p = 10;
console.log(m,p);

// Structure in array
 let newStructure = [m,p]
console.log(newStructure);

 // reverse array elements by new structure assignment
newStructure = [p,m]
console.log(newStructure);

// pass array elements to variables
var [one, two, three] = ['orange', 'mango', 'banana'];
console.log(one); // "orange"
console.log(two); // "mango"
console.log(three); // "banana"

// Get user properties of an object using destructuring assignment,
var {name, age} = {name: 'John', age: 32};
console.log(name); // John
console.log(age); // 32
```
