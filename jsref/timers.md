# Timers

Operate in milliseconds. 1 second = 1000 miliseconds

- [Timers](#timers)
  - [Timeout](#timeout)
  - [Interval](#interval)

[Return Home](/basics)

## Timeout

Runs once after a certain time

``` js 
setTimeout(() => {
    logger('Timeout')
    console.log('Complete');
}, 5000); // After 5 seconds
```

**[`^        back to top        ^`](#timers)**

## Interval

Runs every time interval
 
``` js
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
```

**[`^        back to top        ^`](#timers)**
