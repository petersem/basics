# Functions

A set of defined functionality that can be called with or with parameters

 
- [Functions](#functions)
  - [Using the function keywork](#using-the-function-keywork)
  - [Anonymous functions](#anonymous-functions)
  - [Arrow functions](#arrow-functions)
  - [Optional function values](#optional-function-values)
  - [Spread function ...](#spread-function-)
  - [Generator function](#generator-function)

[Return Home](/basics)

## Using the function keywork

``` js
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(1,2)); // returns 3
```

**[`^        back to top        ^`](#functions)**

## Anonymous functions

The variable becomes the function.

``` js
const addUp = function (num1, num2) {
    return num1 + num2;  
}
console.log(addUp(4,5)); // prints 9
```

**[`^        back to top        ^`](#functions)**

## Arrow functions

``` js
const result1 = (num1, num2) => {
    return num1 + num2;
    };
console.log(result1(3,4));

// or

const result2 = (num1, num2) => num1 + num2;
console.log(result2(1,2));
```

> If you do not encapsulate the code after the `=>` in `{}` then you do not have to say `return`, as this is implied. If you use `{}`, you must use `return`. (`{}` is needed if the code is multi-line.)

**[`^        back to top        ^`](#functions)**

## Optional function values

``` js
function hello(firstName, lastName = 'you lamer!') {
    return "Hello " + firstName + " " + lastName;
}

console.log(hello("Matt", "P"));  // prints Hello Matt P
console.log(hello("Matt"));  // prints Hello Matt you lamer
```

**[`^        back to top        ^`](#functions)**

## Spread function ...

Passes object as parameters to function

``` js
function spreadFunction(options = {}) {
    const config = { ...options };
    console.log(config); // prints object - { a: 'cat', b: 17 }
}

// call with object

spreadFunction({
    a: 'cat',
    b: 17
});
```

**[`^        back to top        ^`](#functions)**


## Generator function

The function* declaration creates a binding of a new generator function to a given name. A generator function can be exited and later re-entered, with its context (variable bindings) saved across re-entrances. Fast and low memory infinite counter.

``` js
// generator function - retains context
function* infiniteCounter(prefix = 'id') {
    let cnt = 1;
    while (true) {
        yield `${prefix}-${cnt++}`;
    }
}

const userId = infiniteCounter('user');
const pageId = infiniteCounter('page');

console.log(userId.next().value);
console.log(userId.next().value);
console.log(pageId.next().value);
console.log(userId.next().value);
console.log(userId.next().value);
```

**[`^        back to top        ^`](#functions)**