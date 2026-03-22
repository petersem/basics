// strings - are basically an array of characters

console.log(`
-------------- assign string`)
let name = "Hananna";
console.log(name);

console.log(`
-------------- toUpperCase / toLowerCase`)
console.log(name.toUpperCase());
console.log(name.toLowerCase());

console.log(`
-------------- indexOf - find position in zero-based array of characters`)
console.log(name.indexOf("anna"));

console.log(`
-------------- substring - extracts characts from position x to position y`)
console.log(name.substring(1, 4)); // prints ana

console.log(`
-------------- splits - splits a string by delimeter into an array`)
let phrase = "I like big butts, and I cannot lie";
let words = phrase.split(' ');
console.log(words);

console.log(`
-------------- replace - searches and replaces something in a striing`)
console.log(phrase.replace('butts', 'dinners'));

console.log(`
-------------- trim - removes leading and trailing whitespace`);
phrase = "     This is a new phrase       ";
console.log(phrase);
console.log(phrase.trim());

console.log(`
-------------- slice returns a string from position x [to postition y]`);
const aString = "She came from planet Claire. I know she came from there";
console.log(aString.slice(14,27));
console.log(aString.slice(29)); // or from a position to the end of the string