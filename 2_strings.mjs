// strings 
import logger from './utilities/logger.mjs'

logger('assign string')
let name = "Hananna";
console.log(name);

logger('toUpperCase / toLowerCase')
console.log(name.toUpperCase());
console.log(name.toLowerCase());

logger('indexOf - find position in zero-based array of characters')
console.log(name.indexOf("anna"));

logger('substring - extracts characts from position x to position y')
console.log(name.substring(1, 4)); // prints ana

logger('splits - splits a string by delimeter into an array')
let phrase = "I like big butts, and I cannot lie";
let words = phrase.split(' ');
console.log(words);

logger('replace - searches and replaces something in a striing')
console.log(phrase.replace('butts', 'dinners'));

logger('trim - removes leading and trailing whitespace');
phrase = "     This is a new phrase       ";
console.log(phrase);
console.log(phrase.trim());

logger('slice returns a string from position x [to postition y]');
const aString = "She came from planet Claire. I know she came from there";
console.log(aString.slice(14,27));
console.log(aString.slice(29)); // or from a position to the end of the string