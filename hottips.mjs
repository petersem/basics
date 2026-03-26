// Hpt Tips
import logger from './utilities/logger.mjs'

logger('Get weekday for a given date');

function getWeekDay(forDate) {
    const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];

    return days[new Date(forDate).getDay()];
}

console.log(getWeekDay("2026-02-20"));  // get the day for a given date
console.log(getWeekDay(new Date()));  // get todays day

logger('Returns a number within a range');
/**
 * Retuns a number within a defined min/max range
 * @param {number} num - input number
 * @param {number} min - minimum range
 * @param {number} max - maximum range
 * @returns - a number that falls into a range
 */
function clamp(num, min, max) {
    return Math.min(Math.max(num, min), max);
}

console.log(clamp(10, 0, 5)); // outside range. closest value is 5
console.log(clamp(-10, 0, 5)); // outside range. closest value is 0
console.log(clamp(3, 0, 5)); // in range. Just return 3
console.log();

logger('Get ordinal descriptor for a given day of the month');
/**
 * Returns the ordinal descriptor for a given day number.
 * Examples: 1 -> "1st", 2 -> "2nd", 3 -> "3rd", 4 -> "4th"
 *
 * @param {number} day - The day number (1-31)
 * @returns {string} The day with its ordinal suffix
 */
function getDaySuffix(day) {
    // Validate input
    if (!Number.isInteger(day) || day < 1 || day > 31) {
        throw new Error("Day must be an integer between 1 and 31.");
    }

    // Handle special cases for 11th, 12th, 13th
    if (day % 100 >= 11 && day % 100 <= 13) {
        return `${day}th`;
    }

    // Determine suffix based on last digit
    switch (day % 10) {
        case 1: return `${day}st`;
        case 2: return `${day}nd`;
        case 3: return `${day}rd`;
        default: return `${day}th`;
    }
}

// Example usage:
console.log(getDaySuffix(1));   // "1st"
console.log(getDaySuffix(2));   // "2nd"
console.log(getDaySuffix(3));   // "3rd"
console.log(getDaySuffix(4));   // "4th"

const d = new Date();
const day = d.getDate();  // gets day of the month
console.log(getDaySuffix(day));   // For today
console.log();

logger('Get a random UUID');
import crypto from 'crypto';

/**
 * Get a Unique Identifier value
 * @returns 
 */
function generateUUID() {
    return crypto.randomUUID();
}

// Example usage
console.log("Generated UUID:", generateUUID());
console.log();

logger('Reading environment variables');
// Read environment variables from .env file, but only if not in production mode.
// must use `node --env-file=.env xxx.mjs`

console.log(`Reading from Environment variables: 
    ${process.env.GREETING}
    ${process.env.SECRET_PSW}
    ${process.env.NODE_ENV}
`);
console.log();

// --------------------------------------------------------
// Reading and writing to files
// 
import fs from 'fs';

async function readFileExample() {
    let data;
    await new Promise((resolve) => {
        data = fs.readFile('settings.json', 'utf8', (err, data) => {
            setTimeout(() => {
                resolve(data); // calls resolve
            }, 3000);
        });
    });

    return data;
}

readFileExample()
    .then((data) => {
        console.table(data);
    });

// // // Read a file (asynchronous)
// // fs.readFile('simple.txt', 'utf8', (err, data) => {
// //     if (err) return console.error('Error reading file:', err);
// //     logger('Reading files');
// //     console.log('File contents read:', data);
// // });

// // // Write to a file
// // fs.writeFile('new.txt', 'Hello Node.js!', (err) => {
// //     if (err) return console.error('Error writing file:', err);
// //     logger('Writing files');
// //     console.log('File written successfully.');
// // });

// logger('Getting age from birthday');
// // Get someones age from birthdate

// function getAge(birthDateString) {
//     let today = new Date();
//     let birthDate = new Date(birthDateString);

//     // Difference in milliseconds
//     const diffMs = today.getTime() - birthDate.getTime();

//     // Convert to other units
//     const diffSeconds = Math.trunc(diffMs / 1000);
//     const diffMinutes = Math.trunc(diffSeconds / 60);
//     const diffHours = Math.trunc(diffMinutes / 60);
//     const diffDays = Math.trunc(diffHours / 24);
//     const diffYears = Math.trunc(diffDays / 365);

//     return {
//         years: diffYears,
//         days: diffDays,
//         hours: diffHours,
//         minutes: diffMinutes,
//         seconds: diffSeconds,
//         milliseconds: diffMs
//     };
// }

// console.log(getAge("1998-08-13")); // get age
// console.log();


// // -------------------------------------------------------------------
// import EventEmitter from 'events';
// const emitter = new EventEmitter();

// emitter.on('greet', (name) => {
//     logger('Events and event emitters'); // Events emitter
//     console.log(`Hello, ${name}!`)
// });

// // put the event trigger in a timer to make it run after other examples do
// setTimeout(() => emitter.emit('greet', 'Fred'), 14000);


// // -------------------------------------
// // Creating an object, serialising it, saving it to a file, then reading it back in
// //

// // create setting object
// let mySettings = {
//     user: "baggz",
//     firstName: "Fred",
//     surname: "Flintstone",
//     darkMode: true,
//     age: 57
// }

// // Read the settings file, then deserialise it into a new object
// let mySettings2 = {};
// // Read a file (asynchronous)
// fs.readFile('settings.json', 'utf8', (err, data) => {
//     if (err) return console.error('Error reading file:', err);
//     mySettings2 = JSON.parse(data);
//     logger('Reading file contents into an object');
//     console.log('Setting file contents read into object');
//     console.log('Test object read: ' + mySettings2.age);
//     console.log();
// });

// // serialise setting object and write to file
// fs.writeFile('settings.json', JSON.stringify(mySettings), (err) => {
//     if (err) return console.error('Error writing file:', err);
//     logger('Write object to a file');
//     console.log('Settings written successfully to settings.json.');
// });


// logger('Itterate through properties of an object');
// // itterate through all properties of an object
// // create a fake body object
// const fakeBody = {
//     jigery: "pokery",
//     title: "my title",
//     age: 180,
//     badData: "<script>alert('KaKow');</script>"
// };

// // Get all the keys for the object, then test the values if unusafe
// for (const [key, value] of Object.entries(fakeBody)) {
//     // safe = false, unsafe = true
//     console.log(fakeBody[key], /[$&+,:;=?@#|'<>.^*()%!-]/g.test(fakeBody[key]));
// }


// logger('Hash strings to compare for changes');
// // hash an object to compare if it has changed
// function hashRequest(thing) {
//     const content = JSON.stringify(thing) || '';
//     return crypto.createHash('sha256').update(content).digest('hex');
// }

// let poop = "cat";
// let fir = hashRequest(poop);
// poop = "dog";
// let sec = hashRequest(poop);
// let thi = hashRequest("dog");
// console.log(fir);
// console.log(sec); // has changes
// console.log(thi); // same as changed object

// logger('Doing a bubble sort');
// // Doing a bubble sort - compare-swap-repeat
// const sortArr = [12, 1, 3, 3, 6, 13, 8, 5, 3, 5];

// const bubbleSort = (arr) => {
//     let swapped;

//     do {
//         swapped = false;
//         for (let i = 0; i < arr.length - 1; i++) {
//             if (arr[i] > arr[i + 1]) {
//                 let temp = arr[i];
//                 arr[i] = arr[i + 1];
//                 arr[i + 1] = temp;
//                 swapped = true;
//             }
//         }
//     } while (swapped);

//     return arr;
// };

// console.log(sortArr); // pre-sort
// console.log(bubbleSort(sortArr)); // post-sort

// logger('capitalise the first letter of each word, with the remaining letters lower case');

// // capitalise the first letter of each word, with the rest lower case
// const haiku = "My code fAiLs I do not knoW why My code works I do not know wHy.";
// console.log(haiku);

// const capped = haiku
//     .toLowerCase()
//     .split(' ')
//     .map(word => word[0].toUpperCase() + word.slice(1))
//     .join(' ');

// console.log(capped);

// // Get array depth, then flatten and convert to string
// //
// logger('Get array depth, then flatten and convert to string');

// console.time("arrDep1");
// const getArrayDepth = value => Array.isArray(value) ?
//     1 + Math.max(0, ...value.map(getArrayDepth)) :
//     0;

// const a = [1, 2, [1, [1, 2, 3, [1, [1, 2, 3, [1]]]], 3], 3, 4];
// console.log(a);
// const depth = getArrayDepth(a);
// console.log('Array depth is', depth);
// console.log('Flattened as string is', a.flat(depth).toString());
// console.timeEnd("arrDep1");

// console.time("arrDep2");
// //console.log('Flattened2 as string is', a.flat(infinity).toString());
// console.timeEnd("arrDep2");