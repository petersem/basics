/**
 * get the weekday for a given date
 * @param {date} forDate - for a given date
 * @returns the Day of the week
 */
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

// ---------------------------------------------------------------------------

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

// ---------------------------------------------------------------------------

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

// ---------------------------------------------------------------------------

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

// ---------------------------------------------------------------------------

// Read environment variables from .env file, but only if not in production mode.
import dotenv from 'dotenv';
// Load dotenv only if not in production
if (process.env.NODE_ENV !== 'production') {
    // load environment variables from a file
    dotenv.config();
}

// Set environment values in your .env file, then read them into your code at run time
// if production, these values will be set at the OS. 
// try it! npm run dev    and    npm run prod
// prod will have undefined output as not set on the OS for GREETING and SECRET_PSW
console.log(`Reading from Environment variables: 
    ${process.env.GREETING}
    ${process.env.SECRET_PSW}
    ${process.env.NODE_ENV}
`);
// ---------------------------------------------------------------------------

// Reading and writing to files
// 
import fs from 'fs';
import { clearInterval } from 'timers';

// Read a file (asynchronous)
fs.readFile('simple.txt', 'utf8', (err, data) => {
    if (err) return console.error('Error reading file:', err);
    console.log('File contents:', data);
});

// Write to a file
fs.writeFile('new.txt', 'Hello Node.js!', (err) => {
    if (err) return console.error('Error writing file:', err);
    console.log('File written successfully.');
});

// ---------------------------------------------------------------------------

// Timers
//
// in miliseconds - 1 second = 1000 miliseconds

// Runs once after a certain time
setTimeout(() => console.log('Runs after 2 seconds'), 2000); // After 2 seconds

// Runs every time period (in this case only 3 times)
let counter = 0;
const intervalId = setInterval(() => {
    counter++;
    console.log('Runs every 4 second');
    if (counter >= 3) {
        // stop if run 3 times
        clearInterval(intervalId);
        console.log('Interval stopped');
    }
}, 4000);

// ---------------------------------------------------------------------------

// Events emitter
//
import EventEmitter from 'events';
const emitter = new EventEmitter();

emitter.on('greet', (name) => console.log(`Hello, ${name}!`));

// put the event trigger in a timer to make it run after other examples do
setTimeout(() => emitter.emit('greet', 'Fred'), 14000);

// ---------------------------------------------------------------------------

