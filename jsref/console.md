# Console

Using the console

- [Console](#console)
  - [Console output](#console-output)
    - [String output](#string-output)
    - [Delimetered output](#delimetered-output)
    - [Literals](#literals)
  - [Clear](#clear)
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
console.log();
```

**[`^        back to top        ^`](#console)**
