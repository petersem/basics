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
  - [Trace](#trace)
  - [Count](#count)

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

// Prints objects and arrays in a table format
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

## Trace

Outputs trace information that shows the execution path to trace command

``` js
function add(...intValues) {
    console.trace('add func'); // trace called
    return intValues.reduce(getSum, 0);
}

// reducer add function
function getSum(total, currentValue) {
    return total + Math.round(currentValue);
}

console.log(add(1,2,3,4,5,6));
```

Trace shows the optional string value, the function, call, and module information.

``` console
Trace: add func
    at add (file:///C:/code/basics/demo.mjs:71:13)
    at file:///C:/code/basics/demo.mjs:80:13
    at ModuleJob.run (node:internal/modules/esm/module_job:437:25)
    at async node:internal/modules/esm/loader:639:26
    at async asyncRunEntryPointWithESMLoader (node:internal/modules/run_main:101:5)
21
```

**[`^        back to top        ^`](#console)**

## Count

Logs the numbers of times that a particulatr call to count('x') has been called.

``` js

function add(...intValues) {
    console.count('add'); // add count called
    return intValues.reduce(getSum, 0);
}

// reducer function - takes an initialValue (total) and the current value
function getSum(total, currentValue) {
    console.count('reducer'); // reducer count called
    return total + Math.round(currentValue);
}

console.log(add(1,2,3,4,5,6));
```

Output shows the incrementing counts.

``` console
PS C:\code\basics> node demo.mjs
add: 1
reducer: 1
reducer: 2
reducer: 3
reducer: 4
reducer: 5
reducer: 6
21
```

**[`^        back to top        ^`](#console)**