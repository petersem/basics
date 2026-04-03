# Errors

Error handling in node 

- [Errors](#errors)
  - [Try-Catch](#try-catch)
  - [Custom errors](#custom-errors)

[Return Home](/basics)

## Try-Catch

Encloses functionality and if anything fails, the error is managed

``` js
console.clear()
try {
    // attempt some functionality that could fail
    let result = 100n / 0n; // will cause a divide by zero error
} catch (error) {
    // catch the 'error' here, then do something with it
    // print out the error message, but keep running
    console.log("You got an error: " + error);
}

console.log('This code kept going!');
```

**[`^        back to top        ^`](#errors)**

## Custom errors

Let's try the same thing again, but this time raise a custom error

``` js
try {
    let result = 100n / 0n; // will cause a divide by zero error
} catch (error) {
    // If there is another error, throw a new custom error which will abort the program 
    throw new Error("CUSTOM ERROR - Do not pass GO, do not collect $200");
}

console.log('This code will not run as custom error thrown, causing exception');
```

**[`^        back to top        ^`](#errors)**
