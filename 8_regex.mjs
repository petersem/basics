// Regular Expressions
// (patern/modifier)

// used often with text.search|replace|match()  


// /i case insensitive search
let text = "Visit W3Schools";
let n = text.search(/w3schools/i);
console.log(n);  // returns 6

// case insensitive replace
let textR = "Visit Microsoft!";
let result = textR.replace(/Microsoft/i, "W3Schools");
console.log(result);  // returns "Visit W3Schools"

// matches if a string present and returns array of search, position found, and search string
let text3 = "Visit W3schools";
let n2 = text3.match(/W3schools/);
console.log(n2); // retruns ['W3Schools', index: 6, input: 'Visit W3Schools']

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

// /\w/g matches non-word characters like spaces and symbols
console.log(srcStr.match(/\w/g));  // prints ['1', '2', '3', 'a', 'b', 'c']

// /\W/g matches non-word characters like spaces and symbols
console.log(srcStr.match(/\W/g));  // prints ['#']

// /\s/g matches spaces and newlines
console.log(text.match(/\s/g));  // prints [' ']

// match phone number format (AUS)
let ausPhoneNumbers = [
    "8217 5530",
    "82175530",
    "(08) 8217 5530",
    "+61 413 332 333",
    "0413332333",
    "08 8217 5530"
];

ausPhoneNumbers.forEach(num => {
    console.log(num, num.match(/^(\s\+?\(61\)|\(\+?61\)|\+?61|\(0[1-9]\)|0[1-9])?( ?-?[0-9]){7,9}$/gm));
});


let password = "Abcd123!";

checkPswComplexity(password);

function checkPswComplexity(password) {
    let hasUpperCase = /[A-Z]/.test(password);
    let hasLowerCase = /[a-z]/.test(password);
    let hasNumbers = /\d/.test(password);
    let hasNonalphas = /\W/.test(password);
    if (password.length >= 8 && hasUpperCase && hasLowerCase && hasNumbers && hasNonalphas) {
        console.log("Good password");
    } else {
        console.log("Bad password");
    }
}