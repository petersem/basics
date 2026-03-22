
// OVERRIDE DEFAULT PARAMETERS
//
console.log('');
console.log(`------------- Overridable, default options`);
// ** Call a function or method with default options, and optional overrides.
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
    b: 'Potato',
    d: 17
});  // Prints defaults with overriden options - { a: 'cat', b: [ 'bird' ], c: 86400000, d: 17 }]


// SINGLETON PATTERN
//
console.log('');
console.log(`------------- Signleton pattern`);
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
console.log('Class instance c test with value 5');
c.testNumber = 5; // sets a value for instance
c.test(); 

// returns the previously instantiated class
var d = new Singleton();
console.log('Class instance d test with no value');
d.test(); // usually would be 0, but is 5 as from the existing class instance

// ABSTRACT FACTORY PATTERN
//
console.log('');
console.log(`------------- Abstract factory pattern`);
// concrete class
class Alien {
    constructor (name, phrase) {
        this.name = name
        this.phrase = phrase
        this.species = "alien"
    }
    move = () => console.log(this.species, "Swish!")
    sayPhrase = () => console.log(this.phrase)
}

// concrete class
class Human {
    constructor (name, phrase) {
        this.name = name
        this.phrase = phrase
        this.species = "human"
    }
    move = () => console.log(this.species, "step step step")
    sayPhrase = () => console.log(this.phrase)
}

// this is what dictates implementation
const speciesFactory = {
    createEntity: function (type) {
        switch (type) {
            case "alien":
                console.log('Creating Alien');
                return new Alien()
            case "human":
                console.log('Creating Human');
                return new Human()
            default:
                return null
        }
    }
}

const ali = speciesFactory.createEntity("alien"); 
const dave = speciesFactory.createEntity("human")

ali.move();
dave.move();

// BUILDER PATTERN
//
console.log('');
console.log(`------------- Builder pattern`);
// base class
class Bug {
    name;
    phrase;

    constructor (name, phrase) {
        this.name = name;
        this.phrase = phrase;
    }
}

// We declare our objects
const bug1 = new Bug("Buggy McJoe", "Your debugger doesn't work with me!");
const bug2 = new Bug("Lance Buggio", "Can't touch this! Na na na na...");

// These functions take an object as parameter and add a method to them
const addFlyingAbility = obj => {
    console.log('Now ' + obj.name + ' can fly');
    obj.fly = () => console.log(`${obj.name} goes zoom zoom!`)
}

const addSpeechAbility = obj => {
    console.log('Now ' + obj.name + ' talks the talk, and walks the walk');
    obj.saySmthg = () => console.log(`${obj.name} says... A bug walks into a bar..and walks out with all the girls`)
}

// Give the bugs new abilities
console.log('Before ability added to bug1', Object.getOwnPropertyNames(bug1));
addFlyingAbility(bug1)
console.log('After ability added to bug1', Object.getOwnPropertyNames(bug1));
bug1.fly() // output: "Now Buggy can fly!"
console.log('');
console.log('Before ability added to bug2', Object.getOwnPropertyNames(bug2));
addSpeechAbility(bug2)
console.log('After ability added to bug2', Object.getOwnPropertyNames(bug2));
bug2.saySmthg() // output: "Lance walks the walk and talks the talk!"
