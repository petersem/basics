# Decisions and branching logic

There are a nuumber of mechanisms to evaluate criteria and choose what to do. // being that you dont want to assign a new value to your test variable, use the double == or tripple === as comparison operators,

- [Decisions and branching logic](#decisions-and-branching-logic)
  - [If-then-else](#if-then-else)
  - [Switch statement](#switch-statement)
  - [Ternary operator](#ternary-operator)
  - [Logical OR](#logical-or)
  - [nullish coalesence](#nullish-coalesence)
  - [Optional Chaining](#optional-chaining)

[Return Home](https://github.com/petersem/basics)

## If-then-else

If condition `true` _do something_ `else` _do something else_

``` js
// prints 1
let myChoice = 1;
if (myChoice == 0){
    console.log("You chose 0");
}
else if (myChoice == 1){ 
    console.log("You chose 1");
}
else {
    console.log("You chose something weird");
};
```

**[`^        back to top        ^`](#decisions-and-branching-logic)**

## Switch statement

if condition `matches an option` _do something specific_ `else` _do a default operation_

``` js
// switch - prints "You chose 1"
myChoice = 1
switch (myChoice) {
    case 0:
        console.log("You chose 0");
        break;
    case 1:
        console.log("You chose 1");
        break;
    default:
        console.log("You chose something weird");
        break;
}
```

**[`^        back to top        ^`](#decisions-and-branching-logic)**

## Ternary operator

If `true` _do this_, `else` _that_. (three parts) - condition ? true part : false part

``` js
let age = 19;
let text = (age < 18) ? "Minor" : "Adult";
console.log("Ternary: " + text);  // Will return 'Ternary: Adult'
```

**[`^        back to top        ^`](#decisions-and-branching-logic)**

## Logical OR

Return `true` bit or `false` bit.  (returnedValue = thisIfTrue || otherwiseThis)

``` js
let firstPort;
let secondPort = 9999;

let port = firstPort || 3000;
console.log(port); // defaults to 3000 as firstPort is not initialised

port = secondPort || 3000;
console.log(port); // uses 9999 as secondPort value initialised.
```

**[`^        back to top        ^`](#decisions-and-branching-logic)**

## nullish coalesence

If a variable is null or undefined, return it, otherwise return something else. ( varToTest ?? returnThisIfFalse)

``` js
let r;
const q = "cat";

console.log( r ?? "dog"); // prints dog because r is null or undefined
console.log( q ?? "dog"); // prints cat as variable already initialised
```

**[`^        back to top        ^`](#decisions-and-branching-logic)**

## Optional Chaining

Return 'undefined' if a higher-level object is not present, rather than error. (?)

``` js
let person = {
    name: 'Fred',
    email: 'fred.flintstone@quarry.com'
}

console.log(person.avatar?.url);  // If avatar property undefined, dont get url, just return undefined
```

**[`^        back to top        ^`](#decisions-and-branching-logic)**

[Return Home](https://github.com/petersem/basics)
