// Timers
import logger from '../utilities/logger.mjs'
// in miliseconds - 1 second = 1000 miliseconds

// Runs once after a certain time
// 
setTimeout(() => {
    logger('Timeout')
    console.log('Complete');
}, 5000); // After 5 seconds


// Runs every time interval
// 
logger('Interval timer')

let counter = 0;
const intervalId = setInterval(() => {
    counter++;
    // console.log('Runs every 1 second');
    console.log('beep');
    if (counter >= 4) {
        // stop if run 4 times
        clearInterval(intervalId);
    }
}, 1000);