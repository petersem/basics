// promises - are used to wait for data, then act on it. Otherwise JS will just continue running your code. 
// So could be issues if you need something from a long operation


// without prompises and async / await 
function doALongTask() {
    // wait 1 seconds to simulate a slow operation
    setTimeout(() => {
            console.log("OP 1 - First Long operation complete");
        }, 1000);

    console.log("OP 1 - Something done after first long operation");
};

doALongTask();  
console.log('OP 1 - Something after first operation function called');


// async function with long op wrapped in a promise
async function doSomeLongTask() {
    await new Promise((resolve) => {  // waits for resolve before returning to other code
        // wait 2 seconds to simulate a slow operation
        setTimeout(() => {
            console.log("OP 2- Second Long operation complete");
            resolve(); // calls resolve
        }, 2000);
    });

    console.log("OP 2 - Something done after second long operation");
}

doSomeLongTask();  // waits for 'Second Long operation complete' to print, then displays 'Something done after second long operation'
console.log('OP 2 - Something after second operation function called');
