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