# Strings

## To upper and lower case

Converts a string to upper or lower case

``` js
let name = "Hananna";
console.log(name.toUpperCase());
console.log(name.toLowerCase());
```

## IndexOf

Find the position in a string for another string

``` js
let name = "Hananna";
console.log(name.indexOf("anna"));
```

## Substring

Extracts characters from position to position of a string.

- From start index, up to but excluding the end index.
- If the first index is greater than the second, they are swapped. 
- If a second parameter is ommitted, then it is start index to end of string
- Any argument value that is less than 0 or greater than str.length is treated as if it were 0 and str.length, respectively.

``` js
const text = "0123456789";
console.log(text.substring(5, 7)); // 56 - start to end index
console.log(text.substring(5, 3)); // 34 - 1st greater than 2nd, so swapped
console.log(text.substring(5)); // 56789 - 2nd ommitted, so 1st to end
console.log(text.substring(-7,20)); // 0123456789 - 1st becomes 0, 2nd becomes 9
```

## Slice

Extracts a section of this string and returns it as a new string, without modifying the original string

- From start index, up to but excluding the end index.
- If the first index is greater than the second, empty string is returned.
- If a second parameter is ommitted, then it is start index to end of string
- Any argument value that greater than str.length is treated as str.length
- Negative values are string.legth - value

``` js
const text = "0123456789";
console.log(text.slice(5, 7)); // 56 - 5-6
console.log(text.slice(5, 3)); // "" - 1st greater than 2nd, empty string
console.log(text.slice(4)); // 456789 - 2nd ommitted, so 4 to end
console.log(text.slice(-4)); // 56789 - 2nd ommitted and -1st, so end-4 to end
console.log(text.slice(-4,8)); // 67 - End-4 to 7
console.log(text.slice(0,100)); // 67 - start to max string length (if 2nd higher)
console.log(text.slice(-4,-1)); // 67 - End-4 to End-1
```

## Split

Splits a string by delimeter into an array

``` js
let phrase = "I like big butts, and I cannot lie";
let words = phrase.split(' ');
console.log(words); // retruns ['I', 'like', 'big', 'butts, ',', 'and', 'I', 'cannot', 'lie']
```

## Replace

Searches and replaces something in a striing

``` js
let phrase = "I like big butts, and I cannot lie";
console.log(phrase.replace('butts', 'dinners'));  // returns "I like big dinners, and I cannot lie"
```

## Trim

Removes leading and trailing whitespace'

``` js
phrase = "     This is a new phrase       ";
console.log(phrase);
console.log(phrase.trim());  // returns "This is a new phrase"
```
