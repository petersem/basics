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

