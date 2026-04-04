# Console

Using the console

- [Console](#console)
  - [Console output](#console-output)
    - [String output](#string-output)
    - [Delimetered output](#delimetered-output)
    - [Literals](#literals)
  - [Clear](#clear)
  - [Grouped output](#grouped-output)
  - [Output timer](#output-timer)
  - [Table](#table)
  - [Coloured output prefixes](#coloured-output-prefixes)

[Return Home](/basics)

## Console output

### String output

Outputs to the terminal

``` js
console.log('my message');
console.log('my' + ' other message');
```

**[`^        back to top        ^`](#console)**

### Delimetered output

Outputs to the terminal

``` js
const a = 'my';
const b = 'message';
console.log(a,b); // outputs with a space inbetween
```

**[`^        back to top        ^`](#console)**

### Literals

Outputs to the terminal. Uses `back-ticks` and `${}` syntax

``` js
const b = 'message';
console.log(`my ${b}`}; // outputs 'my message'
```

**[`^        back to top        ^`](#console)**

## Clear

Clears the console

``` js
console.clear()
```

**[`^        back to top        ^`](#console)**
## Grouped output

Output messages as a group with indentation

``` js
// group content auto-indented under group heading
console.group("My Settings");
console.log(mySettings.timeOutValueMS);
console.log(mySettings.isDebug);
console.log(mySettings.uniqueId);
console.groupEnd();
```

**[`^        back to top        ^`](#console)**

## Output timer

Elapsed time operations

``` js
console.time("step-1");  // start timer
console.timeLog("step-1");  // current progress of timer
setTimeout(() => {
    console.log('Timer is complete');
    console.timeEnd("step-1"); // stops timer and outputs ellapsed time
}, 5000);
```

**[`^        back to top        ^`](#console)**

## Table

Outputs object or arrays in a table format

``` js
const mySettings = {
    timeOutValueMS: 5000,
    isDebug: true,
    uniqueId: "27832-38927-a86d9-a7f56"
}

// console.table() - prints objects and arrays in a table format
console.table(mySettings);
```

**[`^        back to top        ^`](#console)**

## Coloured output prefixes

Console Formatting - [reference](https://nodejs.org/api/util.html#customizing-utilinspect-colors)

``` js
import { styleText } from 'node:util';
import { errorMonitor } from 'node:events';
const danger = styleText(['yellow', 'bgRed', 'bold'], 'Error!');
const warning = styleText(['yellow', 'bgBlack', 'bold'], 'Warning');
const info = styleText(['white', 'bgBlue', 'bold'], 'Information');

console.log(danger,'oops');
console.log(warning,'uh oh');
console.log(info,'Well then..');
```

**[`^        back to top        ^`](#console)**
