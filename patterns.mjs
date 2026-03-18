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

// call with option/