# Loops

- [Loops](#loops)
  - [For](#for)
  - [While](#while)
  - [Do-while](#do-while)
  - [For-in](#for-in)

[Return Home](/basics)

## For

Loop a preset number of times

``` js
// loop 20 times, starting at 1 until we get to 20
for (let index = 1; index <= 20; index++) {
    console.log(index);
}
console.log('For done!');
```

**[`^        back to top        ^`](#loops)**

## While

Condition set upfront. Good for loops that depend on external factors. Will run as long as the condition is true

``` js
let cntr = 0;
while (cntr != 5) {
    console.log('Not done yet');
    cntr++;
}
console.log('While done!');
```

**[`^        back to top        ^`](#loops)**

## Do-while

Runs the code at least once before checking the condition. Condition checked after each itterration

``` js
let i = 0;
do {
    console.log(i);
    i++;
} while (i < 5)
console.log('do-while done!');
```

**[`^        back to top        ^`](#loops)**

## For-in

Itterates over keys - Great for when you want to itterate over object keys

``` js
const matt = {
    favColour: "purple nurple",
    spiritAnimal: "brush turkey",
    hobby: "Hommus"
    };
for (const k in matt) {
    console.log(k + ':', matt[k]);
}
console.log('for-in done');
```

**[`^        back to top        ^`](#loops)**
