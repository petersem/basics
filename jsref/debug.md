# Debugging

- [Debugging](#debugging)
  - [Grouped output](#grouped-output)
  - [Output timer](#output-timer)

[Return Home](/basics)

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

**[`^        back to top        ^`](#debugging)**

## Output timer

Time operations

``` js 
console.time("step-1");  // start timer
console.timeLog("step-1");  // current progress of timer
setTimeout(() => {
    console.log('Timer is complete');
    console.timeEnd("step-1"); // stops timer and outputs ellapsed time
}, 5000);
```

**[`^        back to top        ^`](#debugging)**
