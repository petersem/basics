# Patterns

- [Patterns](#patterns)
  - [Override default parameters](#override-default-parameters)
  - [Singleton](#singleton)
  - [Concrete Class](#concrete-class)
  - [Abstract Factory](#abstract-factory)
  - [Builder](#builder)
  - [Prototype](#prototype)

[Return Home](/basics)

## Override default parameters

Call a function or method with default options, and optional overrides.

``` js
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
});  // Prints defaults with overriden options - { a: 'cat', b: 'potato', c: 86400000, d: 17 }]
```

**[`^        back to top        ^`](#patterns)**

## Singleton

When you invoke a class with the `new ClassName` statement, you are creating a specific instance of a class, which is has unique properties and methods to any other instance. The singleton pattern only allows a single instance of a class to be created. This is useful when you have to access services or databases which only allow allow single connections.

> Perfect for a database or API which only allows one connection

``` js
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
```

**[`^        back to top        ^`](#patterns)**

## Concrete Class

A class which is fully implemented and can be instantiated using the `new` keyword.

``` js
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

const zod = new Alien("Kryptonian", "Kneel before Zod!")

```

**[`^        back to top        ^`](#patterns)**

## Abstract Factory

Allows us to produce families of related objects without specifying concrete classes. It's useful in situations where we need to create objects that share only some properties and methods.

The way it works is by presenting an abstract factory the client interacts with for the desired concrete class. That abstract factory calls the corresponding concrete factory given the corresponding logic. And that concrete factory is the one that returns the end object.

``` js
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
```

**[`^        back to top        ^`](#patterns)**

## Builder

Is used to create objects in "steps". Normally we will have functions or methods that add certain properties or methods to our object.

The cool thing about this pattern is that we separate the creation of properties and methods into different entities.

``` js
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
```

**[`^        back to top        ^`](#patterns)**

## Prototype

The Prototype pattern allows you to create an object using another object as a blueprint, inheriting its properties and methods.

``` js
// We declare our prototype object with two methods
const enemy = {
    attack: () => console.log("Zip Zap Zoop.. you're covered in poop!"),
    flyAway: () => console.log("Flyyyy like an eagle!")
}

// We declare another object that will inherit from our prototype
const weekling = {
    name: "Buggy McFly",
    phrase: "Your debugger doesn't work with me!",
    sayMyName: () => console.log("I'm Bugsinberg!")
}

// With setPrototypeOf we set the prototype of our object
Object.setPrototypeOf(weekling, enemy)

// With getPrototypeOf we read the prototype and confirm the previous call has worked
console.log('Post set', Object.getPrototypeOf(weekling)) // { attack: [Function: attack], flyAway: [Function: flyAway] }

console.log(weekling.phrase) // Your debugger doesn't work with me!
weekling.attack(); // Zip zap zoop..
weekling.flyAway(); // Flyyyy like an eagle!
weekling.sayMyName(); // Original function still present
```

**[`^        back to top        ^`](#patterns)**
