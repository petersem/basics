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

## Sub string

Extracts characters from position to position of a string.

``` js
let name = "Hananna";
console.log(name.substring(1, 4)); // prints ana
console.log(name.substring(1)); // prints ananna
```

## Split

Splits a string by delimeter into an array

``` js
let phrase = "I like big butts, and I cannot lie";
let words = phrase.split(' ');
console.log(words);
```

## Replace

Searches and replaces something in a striing

``` js
let phrase = "I like big butts, and I cannot lie";
console.log(phrase.replace('butts', 'dinners'));
```

## Trim 

Removes leading and trailing whitespace'

``` js
phrase = "     This is a new phrase       ";
console.log(phrase);
console.log(phrase.trim());
```

## Slice

Returns a string from position x [to postition y]');

``` js
const aString = "She came from planet Claire. I know she came from there";
console.log(aString.slice(14,27));
console.log(aString.slice(29)); // or from a position to the end of the string
```
