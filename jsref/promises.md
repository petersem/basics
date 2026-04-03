# Promises

Promises are used to wait for data, then act on it. Otherwise JS will just continue running your code as it is non-blocking.


- [Promises](#promises)
  - [Standard non-blocking function](#standard-non-blocking-function)
  - [Async function with promise](#async-function-with-promise)
  - [Then-Catch](#then-catch)
  - [Async functions](#async-functions)

[Return Home](/basics)

## Standard non-blocking function

Without prompises and async / await, the following code will print:

``` console
End of long task
Complete end
End of timeout
```

``` js
function doALongTask() {
    // wait 1 seconds to simulate a slow operation
    setTimeout(() => {
            console.log("End of timeout");
        }, 1000);

    console.log("End of long task");
};

doALongTask();  
console.log('Complete end');
```

**[`^        back to top        ^`](#promises)**

## Async function with promise

The code will now print the following. `complete end` is non blocking, so prints immediately. `end of long task` and `end of timeout` are inside of an async function, which automatically returns a promise. This promise then uses the `await` keyword to wait for the timeout function to `resolve`, which it does after the timeout. The `end long task` then executes. 

``` console
Complete end
End of timeout
End of long task
```

``` js
// async function with long op wrapped in a promise
async function doSomeLongTask() {
    await new Promise((resolve) => {  // waits for resolve before returning to other code
        // wait 2 seconds to simulate a slow operation
        setTimeout(() => {
            console.log("End of timeout");
            resolve(); // calls resolve
        }, 2000);
    });

    console.log("End of long task");
}

doSomeLongTask();  // waits for the long task function, then displays 1 and 2
console.log('Complete end'); // This is outside the function, so js runs this while the long 
```

**[`^        back to top        ^`](#promises)**

## Then-Catch

Promises can also return data (`resolve-return`), which can then be processed succinctly. If an error is encountered in the async function, it is caught later in the `.catch()` call.

``` js
// waits for resolve before returning value to caller
async function doThenLongTask() {
    let cntr = 5;
    await new Promise((resolve) => {  
        // wait 2 seconds to simulate a slow operation
        setTimeout(() => {
            cntr++
            resolve();
            //throw new Error("BLAH!!!!");
        }, 2000);
    });
    return cntr;
};


doThenLongTask()
    .then((data) => {
        return data + 4;
    })
    // subsequent data operations can be performed
    .then((data) => {
        console.log(data);
    })
    .catch(function (error) {
        console.log('Oops!', error);
    });
```

**[`^        back to top        ^`](#promises)**

## Async functions

Some functions are already aysnc, like fetch.

``` js
// do an async call to a jokes API, then wait to print the response.
fetch('https://icanhazdadjoke.com/', {
  headers: {
    "User-Agent": "node",
    "Accept": "application/json"
  }
})
  .then(res => res.json())
  .then(res => {
    console.log(res.joke)
  })
  .catch((error) => {
    console.log('ERROR:', error);
  });
```

**[`^        back to top        ^`](#promises)**
