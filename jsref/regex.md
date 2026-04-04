# Regex

Regular expression (patern/modifier)

- [Regex](#regex)
  - [Search](#search)
  - [Replace](#replace)
  - [Match](#match)
  - [Pattern matches](#pattern-matches)
  - [Name validity check](#name-validity-check)
  - [Check for invalid characters](#check-for-invalid-characters)

[Return Home](/basics)

## Search

``` js
// /i case insensitive search
let text = "Visit W3Schools";
let n = text.search(/w3schools/i);
console.log(n);  // returns 6
```

**[`^        back to top        ^`](#regex)**

## Replace

``` js
// case insensitive replace
let textR = "Visit Microsoft!";
let result = textR.replace(/Microsoft/i, "W3Schools");
console.log(result);  // returns "Visit W3Schools"
```

**[`^        back to top        ^`](#regex)**

## Match

``` js
// matches if a string present and returns array of search, position found, and search string
let text3 = "Visit W3schools";
let n2 = text3.match(/W3schools/);
console.log(n2); // retruns ['W3Schools', index: 6, input: 'Visit W3Schools']
```

**[`^        back to top        ^`](#regex)**

## Pattern matches

``` js
// /[a-z]/g matches any lower case letter
console.log(text.match(/[a-z]/g));  // prints ['i', 's', 'i', 't', 'c', 'h', 'o', 'o', 'l', 's']

// /[A-Z]/g matches any upper case letter
console.log(text.match(/[A-Z]/g));  // prints [ 'V', 'W', 'S' ]

// /[123]/g Matches exact digits
let regString = "1234567890";
console.log(regString.match(/[123]/g));  // prints [ '1', '2', '3' ]

// /[5-7]/g Matches digits in range
console.log(regString.match(/[5-7]/g));  // prints [ '5', '6', '7' ]

// /\d/g matches any digit from 0-9
console.log(regString.match(/\d/g));  // prints ['1', '2', '3' ....]

// /\D/g matches any non-digit character and non-symbol
let srcStr = "123abc#";
console.log(srcStr.match(/\D/g));  // prints ['a', 'b', 'c']

// /\w/g matches only word and digits characters, no spaces and symbols
console.log(srcStr.match(/\w/g));  // prints ['1', '2', '3', 'a', 'b', 'c']

// /\W/g matches non-word characters like spaces and symbols
console.log(srcStr.match(/\W/g));  // prints ['#']

// /\s/g matches spaces and newlines
console.log(text.match(/\s/g));  // prints [' ']
```

**[`^        back to top        ^`](#regex)**

## Name validity check

``` js
let names = [
    "Matt",
    "Ava",
    "susan",
    "Billy-8ob",
    "Avo Cardo"
];

names.forEach(name => {
    console.log(name + ":", name.match(/^[A-Z]{1}[a-zA-Z\-\ ]{1,40}$/gm)?.join() ?? false)
});
```

**[`^        back to top        ^`](#regex)**

## Check for invalid characters

``` js
// If any web unsafe characters are present, then replace with an empty string
let badText = "<script>alert('malicious js payload');</script>";
console.log(badText);
badText = badText.replace(/[$&+,:;=?@#|'<>.^*()%!-]/g,"");
console.log(badText);
```

**[`^        back to top        ^`](#regex)**
