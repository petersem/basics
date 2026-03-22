# Coding

Recommendations and practices.

## General

- Don't use `var`, as this is for old browsers
- Use `const` unless you plan to change a variable, in which case use `let`
- JS file naming, use `.mjs` for module-based ES6 JS. If you use `JS` then you will have to set your package to use modules `type: module`
- Use the `AXIOS` library for HTTP calls from the server, and the JS built-in `FETCH` library for client side JS. (Axios has more features)
- Check input data accuracy by validating inputs (eg. regular expression or other checks) This is checking the integrity of data, not checking for security issues. 
- Return appropriate status codes and error message for API calls
- Could use the `HE` (NPM JS) library for encoding inputs and escaping output

## Secure Coding

- *Always* sanitise inputs at server and client input interfaces
- *Always* parse outputs. This includes reads and writes from databases and external services, too.
- *Try* to log important operations fopr security and debugging
- *Never* output a stack trace in production

## Practices

- Practice coding by doing a simple app. Put it in GitHub and learn as you code. Start small!
- Don't be afraid to refactor. When you see something a bit *smelly*, and you have time, redo it.
- Are your functions doing only one thing? If not, seperate concerns and refactor
- Every database table should have a primary key
- Always implement appropriate error handling (try-catch) for any operation with a posibility of failure.
- Write unit tests *FIRST*, before you write your code
- Document code appropriately. Classes, functions, and then anything that is worth explaining. Don't add comments for the sake of commenting
- If you have to code a manual operation more than once in your code, put it in a seperate function of class
- Optimised code is great for efficiency, but can be bad for readability. Be efficient, but also keep things simple when it makes sense.

[Return to Home](https://github.com/petersem/basics)