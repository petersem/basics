// Debugging
import logger from '../utilities/logger.mjs'




// Output in group
//
logger('Output messages as a group');
// group content auto-indented under group heading
console.group("My Settings");
console.log(mySettings.timeOutValueMS);
console.log(mySettings.isDebug);
console.log(mySettings.uniqueId);
console.groupEnd();


// Output timer
//
logger('Output timer');
// group content auto-indented under group heading
console.time("step-1");  // start timer
console.timeLog("step-1");  // current progress of timer
setTimeout(() => {
    console.log('Timer is complete');
    console.timeEnd("step-1"); // stops timer and outputs ellapsed time
}, 5000);

