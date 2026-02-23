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
console.log();

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
console.log();

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
console.log();

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
console.log();

// ---------------------------------------------------------------------------

// Reading and writing to files
// 
import fs from 'fs';

// Read a file (asynchronous)
fs.readFile('simple.txt', 'utf8', (err, data) => {
    if (err) return console.error('Error reading file:', err);
    console.log();
    console.log('File contents read:', data);
});

// Write to a file
fs.writeFile('new.txt', 'Hello Node.js!', (err) => {
    if (err) return console.error('Error writing file:', err);
    console.log();
    console.log('File written successfully.');
});

// ---------------------------------------------------------------------------

// Get someones age from birthdate

function getAge(birthDateString) {
    let today = new Date();
    let birthDate = new Date(birthDateString);

    // Difference in milliseconds
    const diffMs = today.getTime() - birthDate.getTime();

    // Convert to other units
    const diffSeconds = Math.trunc(diffMs / 1000);
    const diffMinutes = Math.trunc(diffSeconds / 60);
    const diffHours = Math.trunc(diffMinutes / 60);
    const diffDays = Math.trunc(diffHours / 24);
    const diffYears = Math.trunc(diffDays / 365);

    return {
        years: diffYears,
        days: diffDays,
        hours: diffHours,
        minutes: diffMinutes,
        seconds: diffSeconds,
        milliseconds: diffMs
    };
}

console.log(getAge("1998-08-13")); // get age
console.log();

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

// Console Formatting - https://nodejs.org/api/util.html#customizing-utilinspect-colors

import { styleText } from 'node:util';
const logError = styleText(['yellow', 'bgRed', 'bold'], 'Error!');
const logInfo = styleText(['white', 'bgBlue', 'bold'], 'Information');
const logWarning = styleText(['yellow', 'bgBlack', 'bold'], 'Warning');

console.log(logError,'oops');
console.log(logWarning,'uh oh');
console.log(logInfo,'Well then..');

// ---------------------------------------------------------------------------

// Creating an object, serialising it, saving it to a file, then reading it back in
//

// create setting object
let mySettings = {
    user: "baggz",
    firstName: "Fred",
    surname: "Flintstone",
    darkMode: true,
    age: 57
}

// serialise setting object and write to file
fs.writeFile('settings.json',JSON.stringify(mySettings), (err) => {
    if (err) return console.error('Error writing file:', err);
    console.log();
    console.log('Settings written successfully to settings.json.');
});

// Read the settings file, then deserialise it into a new object
let mySettings2 = {};
// Read a file (asynchronous)
fs.readFile('settings.json', 'utf8', (err, data) => {
    if (err) return console.error('Error reading file:', err);
    console.log();
    mySettings2 = JSON.parse(data);
    console.log('Setting file contents read into object');
    console.log('Test object read: ' + mySettings2.age);
    console.log();
});