// functions - a set of defined functionality that can be called with or with parameters

// using function keywork and optional parameters
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(1,2)); // returns 3

// anonymous function
const addUp = function (num1, num2) {
    return num1 + num2;  
}
console.log(addUp(4,5)); // prints 9

// arrow functions
const result = (num1, num2) => {
    return num1 + num2;
    };
console.log(result(5,2));  // returns 7