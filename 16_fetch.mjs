 
// - [Strings](#strings)

// [Return Home](/basics)

// **[`^        back to top        ^`](#strings)** -->



// Fetch
// 
import logger from './utilities/logger.mjs'

// Retrieve data
//
logger('Retrieving data');

const url = 'https://icanhazdadjoke.com';

const joke = await fetch(url, {
    method: 'GET',
    headers: {
        Accept: 'application/json'
    }
})
    .then((response) => response.json())
    .catch((error) => console.error('Error:', error));

console.log(joke.joke);

// Sending JSON data
//
logger('Sending data in JSON');

fetch('https://api.example.com/api/sleep', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    
    body: JSON.stringify({ psw: 'pinapple', sleep: false })
})
    .then(response => response.json())
    .then(data => console.log('Data sent:', data))
    .catch(error => console.error('Error:', error))

// Sending data from URL forms
//
logger('Sending data with form urlcoding');

fetch('https://api.example.com/api/sleep', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    
    body: new URLSearchParams({ psw: 'pineapple', sleep: true })
})
    .then(response => response.json())
    .then(data => console.log('Data sent:', data))
    .catch(error => console.error('Error:', error))
