// Classes - are reusable template object which you can make many copies of. 
//     (Think of a rubber stamp as a class, and imprints are the instances you create from the stamp.)
//     They are similar to objects but can also contain methods, which
//     are operations specific to the class

// Creating a class
class Dog {
    weightKG;
    #age;   // this is a private property. Only visible inside the Dog class, not outside
    #name;  // Private property. Only the getter is available to get name outside the class

    constructor(dogName, dogWeight) {
        this.#name = dogName;
        this.weightKG = dogWeight;
    }

    // setter for setting age to be in dogt years
    set age(peopleYears) {
        this.#age = peopleYears * 7;
    }

    // getter for retrieving a name in a specific format
    get name() {
        return this.#name.replace(/(^|\s)[a-z]/gi, l => l.toUpperCase())
    }

    bark() {
        if (this.weightKG <= 5) {
            return "Ruf!";
        }
        else if (this.weightKG <= 12) {
            return "Arf!";
        }
        else if (this.weightKG >= 12) {
            return "WOOF!";
        }
        else { return "Meow"; }
    }

    // a static function can be called without instantiating a class (...new Class)
    static mysteryNoise() {
        // returns a random animal noise
        let noises = ["neigh", "squark", "meow", "woof", "tweet", "roar", "ribbit", "chirp", "sqweak"];
        // get a random noise (index 0 to array.length-1)
        let randomIndex = Math.floor(Math.random() * (noises.length - 1));
        return noises[randomIndex];
    }
}

// instantiate (create) 2 new instances of the dog class and give them different properties. Then call bark()
let yourDog = new Dog("pumpkin spice", 4.9);
console.log(yourDog.name + " " + yourDog.bark());  // Ruff

let myDog = new Dog("stalone", 32);
console.log(myDog.name + " " + myDog.bark());  // Woof!

// inheriting a class - allows you to make a new class, based upon another

// Create a RoboDog class that is based on the Dog class, but is a little different. use Extend to base on another class
class MechanicalDog extends Dog {
    // only take a single parameter for constructor
    constructor(dogName) {
        super(dogName, 100);  // Call the parent dog creation function (called a contructor) Every mech dog is 100kg
    }

    // override the base dog bark method
    bark() {
        return "Does not compute";
    }
}

// instantiate MechanicalDog class
let mechDog = new MechanicalDog("K9");
console.log(mechDog.name + " says: " + mechDog.bark());  // Does not compute!

// call a static method on the class directly. No need to instantiate it
console.log(Dog.mysteryNoise());