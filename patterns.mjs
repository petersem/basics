// ** Call a function or method with default options, and optional overrides.
// **

// set some default options which can be overriden with second function param
const defaultOptions = {
    a: 'dog',
    b: ['bird'],
    c: (24 * 60 * 60 * 1000),
    d: 5
}

function spreadFunction(options = {}) {
    const config = { ...defaultOptions, ...options }; // load defaults and any overrides
    console.log(config);
}

// call with nothing. Uses defaults
spreadFunction(); // prints default options object - { a: 'dog', b: [ 'bird' ], c: 86400000, d: 5 }

// call with option overrides 
spreadFunction({
    a: 'cat',
    d: 17
});  // Prints defaults with overriden options - { a: 'cat', b: [ 'bird' ], c: 86400000, d: 17 }]


// create a class that can only be instantiated once
// eg for a database or api that only allows one connection
class Singleton {
    static #instanceOf;
    static #createKey;
    testNumber = 0;
    
    constructor() {
        if (!Singleton.#instanceOf && !Singleton.#createKey) {
            Singleton.#createKey = "created";
            Singleton.#instanceOf = new Singleton();
        }
        return Singleton.#instanceOf;
    }

    test() {
        console.log(this.testNumber);
    }
}

// creates the class instance
let c = new Singleton();
c.testNumber = 5; // sets a value for instance
c.test(); 

// returns the previously instantiated class
var d = new Singleton();
d.test(); // usually would be 0, but is 5 as from the existing class instance