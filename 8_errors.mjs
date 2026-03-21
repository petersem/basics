// error handling in node 
//
// try-catch - encloses functionality and if anything fails, the error is managed
console.clear()
try {
    // attempt some functionality that could fail
    let result = 100n / 0n; // will cause a divide by zero error
} catch (error) {
    // catch the 'error' here, then do something with it
    // print out the error message, but keep running
    console.log("You got an error: " + error);
}

console.log()
console.log('This code kept going!');
console.log()

// let's try the same thing again, but this time raise a custom error
try {
    let result = 100n / 0n; // will cause a divide by zero error
} catch (error) {
    // If there is another error, throw a new custom error which will abort the program 
    throw new Error("CUSTOM ERROR - Do not pass GO, do not collect $200");
}

console.log()
console.log('This code will not run as a custom error was thrown, causing a crash');
console.log()




