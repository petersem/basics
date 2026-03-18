// Timers
//
// in miliseconds - 1 second = 1000 miliseconds
//
// The following examples also demonstrate the use of console.timer()

// Runs once after a certain time
console.time("timer"); // starts a timer

setTimeout(() => {
    console.log('Complete');
    console.timeEnd("timer"); // ends a timer and outputs total time
}, 5000); // After 5 seconds

// Runs every time interval
let counter = 0;
const intervalId = setInterval(() => {
    counter++;
    // console.log('Runs every 1 second');
    console.timeLog('timer'); // outputs elapsed time of timer
    if (counter >= 4) {
        // stop if run 4 times
        clearInterval(intervalId);
    }
}, 1000);