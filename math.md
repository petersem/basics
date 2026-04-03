# Math

Math unctionality in js

- [Math](#math)
  - [Min / Max](#min--max)
    - [Min](#min)
    - [Max](#max)
  - [Trunc](#trunc)
  - [Floor / Ceiling](#floor--ceiling)
    - [Floor](#floor)
    - [Ceiling](#ceiling)
  - [Round](#round)
  - [Random](#random)

[Return Home](/basics)

## Min / Max

### Min

Math.min([array of numbers]) returns the smallest number

``` js
let numArray = [9, 55, 44, 2, 900, 1];
console.log('Min: ' + Math.min(...numArray));; // prints 1 - Note that the ... syntax means this is the only argument for a required range
console.log('Min: ' + Math.min(4,66,777,2,-6));; // prints -6
```

**[`^        back to top        ^`](#math)** -->

### Max

Math.max([array of numbers]) returns the highest number

``` js
console.log('Max: ' + Math.max(...numArray));; // prints 900 
console.log('Max: ' + Math.max(4,66,777,2,-6));; // prints 777
```

**[`^        back to top        ^`](#math)** -->

## Trunc

Math.trunc(number) removes any fractions and only returns an integer. No rounding

``` js
let mt = 5.9;
console.log('Trunc: ' + Math.trunc(mt));  // returns 5
```

**[`^        back to top        ^`](#math)** -->

## Floor / Ceiling

### Floor

Math.floor(number) rounds down and returns an integer

``` js
let mf = 5.9;
console.log('Floor: ' + Math.floor(mf));  // returns 5
```

**[`^        back to top        ^`](#math)** -->

### Ceiling

Math.ceil(number) rounds up and returns an integer

``` js
let mc = 5.1;
console.log('Ceil: ' + Math.ceil(mc));  // returns 6
```

**[`^        back to top        ^`](#math)** -->

## Round

Math.round(number) rounds to the nearest integer

``` js
let mr = 4.99999;
console.log('Round: ' + Math.round(mr));  // returns 5
```

**[`^        back to top        ^`](#math)** -->

## Random

Math.random() Returns a fraction between 0 and 1

``` js
let rnd = 100; // set the max random number
// return a number between 1 and 100
console.log('Random: ' + (Math.floor(Math.random() * rnd) + 1)); 
```
