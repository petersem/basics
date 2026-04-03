// promises - are used to wait for data, then act on it. Otherwise JS will just continue running your code. 
// So could be issues if you need something from a long operation


// without prompises and async / await 
function doALongTask() {
    // wait 1 seconds to simulate a slow operation
    setTimeout(() => {
            console.log("1");
        }, 1000);

    console.log("2");
};

doALongTask();  
console.log('3');


// async function with long op wrapped in a promise
async function doSomeLongTask() {
    await new Promise((resolve) => {  // waits for resolve before returning to other code
        // wait 2 seconds to simulate a slow operation
        setTimeout(() => {
            console.log("1");
            resolve(); // calls resolve
        }, 2000);
    });

    console.log("2");
}

doSomeLongTask();  // waits for the long task function, then displays 1 and 2
console.log('3'); // This is outside the function, so js runs this while the long operation is waiting

// now use the .then feature
async function doThenLongTask() {
    let poop = 5;
    await new Promise((resolve) => {  // waits for resolve before returning to other code
        // wait 2 seconds to simulate a slow operation
        setTimeout(() => {
            poop++
            resolve();
        }, 2000);
    });
    return poop;
};


doThenLongTask()
    .then((data) => {
        console.log(data);
    })
    .catch(function (error) {
        console.log(error)
    });


// do an async call to a jokes API, then wait to print the response.
fetch('https://icanhazdadjoke.com/', {
  headers: {
    "User-Agent": "Matt",
    "Accept": "application/json"
  }
})
  .then(res => res.json())
  .then(res => {
    console.log(res.joke)
    //jokeDisplay.innerHTML = res.joke
  })
