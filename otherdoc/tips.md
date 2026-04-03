# Tips and useful code

- [Tips and useful code](#tips-and-useful-code)
  - [Get day of week](#get-day-of-week)
  - [Return a number within a range](#return-a-number-within-a-range)
  - [Ordinal descriptor for day](#ordinal-descriptor-for-day)
  - [Get a random UUID](#get-a-random-uuid)
  - [Read environment variables](#read-environment-variables)
  - [Asynchronously reading a file with fs/promise](#asynchronously-reading-a-file-with-fspromise)
  - [Asynchronously reading multiple files](#asynchronously-reading-multiple-files)
  - [Get someone's age](#get-someones-age)
  - [Events and event emitters](#events-and-event-emitters)
  - [Serialising and deserialising an object to and from a file](#serialising-and-deserialising-an-object-to-and-from-a-file)
  - [Itterate object properties](#itterate-object-properties)
  - [Hash strings](#hash-strings)
  - [Bubble sort](#bubble-sort)
  - [Capitalise first letter of words](#capitalise-first-letter-of-words)
  - [Flatten a multi-dimensional array](#flatten-a-multi-dimensional-array)
  - [Chart.js](#chartjs)
  - [Temperature conversion](#temperature-conversion)
  - [Return unique array elements](#return-unique-array-elements)
  - [Check if an Object is empty](#check-if-an-object-is-empty)
  - [Generate a random HEX colour](#generate-a-random-hex-colour)
  - [Debounce a function](#debounce-a-function)
  - [Copy to clipboard](#copy-to-clipboard)
  - [Load version number from package.json](#load-version-number-from-packagejson)

[Return Home](/basics)

## Get day of week

Get the day of the week for a given day

``` js
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
```

**[`^        back to top        ^`](#tips-and-useful-code)**

## Return a number within a range

``` js
function clamp(num, min, max) {
    return Math.min(Math.max(num, min), max);
}

console.log(clamp(10, 0, 5)); // outside range. closest value is 5
console.log(clamp(-10, 0, 5)); // outside range. closest value is 0
console.log(clamp(3, 0, 5)); // in range. Just return 3
```

**[`^        back to top        ^`](#tips-and-useful-code)**

## Ordinal descriptor for day

Get the ordinal descriptor suffix for the day of a month

``` js
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

const d = new Date(); // get the current day
const day = d.getDate();  // gets day of the month
console.log(getDaySuffix(day));   // Suffix for today
```

**[`^        back to top        ^`](#tips-and-useful-code)**

## Get a random UUID

``` js
import crypto from 'crypto';

// Example usage
console.log("Generated UUID:", crypto.randomUUID());
```

**[`^        back to top        ^`](#tips-and-useful-code)**

## Read environment variables

Read environment variables from .env file, if environment is not set at the OS level.
> must use `node --env-file=.env xxx.mjs`

``` js
console.log(`Reading from Environment variables: 
    ${process.env.GREETING}
    ${process.env.SECRET_PSW}
    ${process.env.NODE_ENV}
`);
```

**[`^        back to top        ^`](#tips-and-useful-code)**

## Asynchronously reading a file with fs/promise

Use fs/promises as this is the modern implementation

``` js
import fsPromises from 'fs/promises';

async function readFileExample() {
    try {
        const data = await fsPromises.readFile('settings.json', 'utf8');
        return data;
    } catch (error) {
        return JSON.stringify({ error: error });
    }
}

readFileExample()
    .then((data) => {
        console.table(data);
    })
    .catch((err) => {
        console.log(err);
    });
```

**[`^        back to top        ^`](#tips-and-useful-code)**

## Asynchronously reading multiple files

Wrap multiple fs async reads in a promise.

``` js
import fsPromise from 'fs/promise';

async function readMultipleFiles() {
    const filesToRead = ['settings.json', 'new.txt']
    try {
        const results = await Promise.all(filesToRead.map((file) => fsPromises.readFile(file, 'utf8')))
        return results;
  } catch (err) {
        return JSON.stringify({ error: err });
  }
}

readMultipleFiles()
    .then((data) => {
        data.forEach(res => console.table(JSON.parse(res)));
    })
    .catch((err) => {
        console.log(err);
    });
```

**[`^        back to top        ^`](#tips-and-useful-code)**

## Get someone's age

Get someone's age from their birthdate

``` js
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
```

**[`^        back to top        ^`](#tips-and-useful-code)**

## Events and event emitters

``` js
import EventEmitter from 'events';
const emitter = new EventEmitter();

emitter.on('greet', (name) => {
    console.log(`Hello, ${name}!`)
});

// put the event trigger in a timer to make it run after other examples do
setTimeout(() => emitter.emit('greet', 'Fred'), 14000);
```

**[`^        back to top        ^`](#tips-and-useful-code)**

## Serialising and deserialising an object to and from a file

Ideal for reading and writing settings to a configuration file.

> Notice the JSON.stringify option in fs.writefile(). The `, null, 2` option will indent and format the output for the file, rather than it all being on a single line.

``` js
// create setting object
let mySettings = {
    user: "baggz",
    firstName: "Fred",
    surname: "Flintstone",
    darkMode: true,
    age: 57
}

// serialise setting object and write to file
fs.writeFile('settings.json', JSON.stringify(mySettings, null, 2), (err) => {   
    if (err) return console.error('Error writing file:', err);
    logger('Write object to a file');
    console.log('Settings written successfully to settings.json.');
});

// Read the settings file, then deserialise it into a new object
let mySettings2 = {};
// Read a file (asynchronous)
fs.readFile('settings.json', 'utf8', (err, data) => {
    if (err) return console.error('Error reading file:', err);
    mySettings2 = JSON.parse(data);
    logger('Reading file contents into an object');
    console.log('Setting file contents read into object');
    console.log('Test object read: ' + mySettings2.age);
    console.log();
});
```

**[`^        back to top        ^`](#tips-and-useful-code)**





## Itterate object properties

Itterate through all properties of an object

``` js
// create an object
const fakeBody = {
    jigery: "pokery",
    title: "my title",
    age: 180,
    badData: "<script>alert('KaKow');</script>"
};

// Get all the keys for the object, then test the values if unusafe
for (const [key, value] of Object.entries(fakeBody)) {
    // safe = false, unsafe = true
    console.log(fakeBody[key], /[$&+,:;=?@#|'<>.^*()%!-]/g.test(fakeBody[key]));
}
```

**[`^        back to top        ^`](#tips-and-useful-code)**

## Hash strings 

Hash a string to compare if it has changed

``` js
function hashRequest(thing) {
    const content = JSON.stringify(thing) || '';
    return crypto.createHash('sha256').update(content).digest('hex');
}

let changingString = "cat";
let firstHash = hashRequest(changingString);
changingString = "dog";
let secondHash = hashRequest(changingString);

console.log(firstHash);
console.log(secondHash); // Different to firstHash. Has changed
```

**[`^        back to top        ^`](#tips-and-useful-code)**

## Bubble sort

Doing a bubble sort - compare-swap-repeat

``` js
const sortArr = [12, 1, 3, 3, 6, 13, 8, 5, 3, 5];

const bubbleSort = (arr) => {
    let swapped;

    do {
        swapped = false;
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);

    return arr;
};

console.log(sortArr); // pre-sort
console.log(bubbleSort(sortArr)); // post-sort
```

**[`^        back to top        ^`](#tips-and-useful-code)**

## Capitalise first letter of words

Capitalise first letter of each word, with the remaining letters lower case

``` js
// capitalise the first letter of each word, with the rest lower case
const haiku = "My code fAiLs I do not knoW why My code works I do not know wHy.";
console.log(haiku);

const capped = haiku
    .toLowerCase()
    .split(' ')
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(' ');

console.log(capped);
```

**[`^        back to top        ^`](#tips-and-useful-code)**


## Flatten a multi-dimensional array

Get the depth of a multi-dimensional array, flatten it, then convert to string

``` js
console.time("arrDep1");
const getArrayDepth = value => Array.isArray(value) ?
    1 + Math.max(0, ...value.map(getArrayDepth)) :
    0;

const a = [1, 2, [1, [1, 2, 3, [1, [1, 2, 3, [1]]]], 3], 3, 4];
console.log(a);
const depth = getArrayDepth(a);
console.log('Array depth is', depth);
console.log('Flattened as string is', a.flat(depth).toString());
console.timeEnd("arrDep1");

console.time("arrDep2");
//console.log('Flattened2 as string is', a.flat(infinity).toString());
console.timeEnd("arrDep2");
```

**[`^        back to top        ^`](#tips-and-useful-code)**

## Chart.js

Use chart.js to create chart images for your data.

``` js
import {CategoryScale, Chart, LinearScale, LineController, LineElement, PointElement} from 'chart.js';
import {Canvas} from 'skia-canvas';
import fsp from 'node:fs/promises';

Chart.register([
  CategoryScale,
  LineController,
  LineElement,
  LinearScale,
  PointElement
]);

const canvas = new Canvas(400, 300);
const chart = new Chart(
  canvas, // TypeScript needs "as any" here
  {
    type: 'line',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderColor: 'red'
      }]
    }
  }
);
const pngBuffer = await canvas.toBuffer('png', {matte: 'white'});
await fsp.writeFile('output.png', pngBuffer);
chart.destroy();
```

**[`^        back to top        ^`](#tips-and-useful-code)**

## Temperature conversion

Celcius to Fahrenheit and Fahrenheit to Celcius

``` js
const celciusToFahrenheit = celcius => Math.round(((celcius * 9/5) + 32) * 10) / 10; // round to 1 decimal place
const FahrenheitToCelcius = fahrenheit => Math.round(((fahrenheit -32) / (9/5)) * 10) / 10; // round to 1 decimal place

console.log(celciusToFahrenheit(37.8));
console.log(FahrenheitToCelcius(100));
```

**[`^        back to top        ^`](#tips-and-useful-code)**

## Return unique array elements

Using `Set` to get the unique array elements

``` js
const repeats = ["cat", "dog", "cat", "dog", "cat", "dog", "dog", "dog"];
const unique = arr => [...new Set(arr)];
console.log(unique(repeats));
```

**[`^        back to top        ^`](#tips-and-useful-code)**

## Check if an Object is empty

Object key length is zero

``` js
const isEmpty = obj => Object.keys(obj).length === 0;
```

**[`^        back to top        ^`](#tips-and-useful-code)**

## Generate a random HEX colour

Using Math.Random()

``` js
const randomColour = () => `#${ Math.floor( Math.random() * 0xFFFFFF )
    .toString(16)
    .padStart(6, '0')}`;

console.log(randomColour());
```

**[`^        back to top        ^`](#tips-and-useful-code)**

## Debounce a function

Pause before executing, and reset pause if call again in that initial pause. Reduces the chance that double calls are processed. (Mainly seen in client code for things like search as you type or auto-complete text)

``` js
// Debounce function
function debounce(func, delay) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

// Function to be debounced
function search(query) {
    console.log('Searching for:', query);
}

// Create a debounced version of the search function
const dSearch = debounce(search, 1000);

// Simulate typing with multiple calls to the debounced function
dSearch('Hello');
dSearch('Hello, ');
dSearch('Hello, World!');  // Only this call will trigger after 1000ms
```

**[`^        back to top        ^`](#tips-and-useful-code)**

## Copy to clipboard

Copy text to the clipboard (client code only)

``` html
<input type="button" value="Copy to clipboard" 
    onclick='copyToClipboard("I am text to copy")'>
```

``` js
const copyToClipboard = text => navigator.clipboard.writeText(text);
```

**[`^        back to top        ^`](#tips-and-useful-code)**

## Load version number from package.json

The `package.json` is just a JSON file, so we can load it and process it like any other JSON file. This way we can use the version number here to display in an app. You must include the `with {type:'json'}` option when importing JSON. 

``` js
import pkg from './package.json' with { type: 'json' };
console.log(pkg.version);
```

**[`^        back to top        ^`](#tips-and-useful-code)**
