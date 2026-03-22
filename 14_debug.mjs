// Debugging

// Coloured output
//
console.log(`
-------------- Console formatting`)
// Console Formatting - https://nodejs.org/api/util.html#customizing-utilinspect-colors
import { styleText } from 'node:util';
import { errorMonitor } from 'node:events';
const logDanger = styleText(['yellow', 'bgRed', 'bold'], 'Error!');
const logWarning = styleText(['yellow', 'bgBlack', 'bold'], 'Warning');
const logInfo = styleText(['white', 'bgBlue', 'bold'], 'Information');

console.log(logDanger,'oops');
console.log(logWarning,'uh oh');
console.log(logInfo,'Well then..');
console.log();


// Output in table
//
console.log(`
-------------- Print object as a table`);
const mySettings = {
    timeOutValueMS: 5000,
    isDebug: true,
    uniqueId: "27832-38927-a86d9-a7f56"
}

// console.table() - prints objects and arrays in a table format
console.table(mySettings);

// Output in group
//
console.log(`
-------------- Output messages as a group`);
// group content auto-indented under group heading
console.group("My Settings");
console.log(mySettings.timeOutValueMS);
console.log(mySettings.isDebug);
console.log(mySettings.uniqueId);
console.groupEnd();


// Output timer
//
console.log(`
-------------- Output timer`);
// group content auto-indented under group heading
console.time("step-1");  // start timer
console.timeLog("step-1");  // current progress of timer
setTimeout(() => {
    console.log('Timer is complete');
    console.timeEnd("step-1"); // stops timer and outputs ellapsed time
}, 5000);

