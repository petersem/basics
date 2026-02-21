// Classes - are reusable template object which you can make many copies of. 
//     (Think of a rubber stamp as a class, and imprints are the instances you create from the stamp.)
//     They are similar to objects but can also contain methods, which
//     are operations specific to the class

// Creating a class
class Dog{
    name;
    weightKG;

    constructor(dogName, dogWeight){
        this.name = dogName;
        this.weightKG = dogWeight;
    }

    bark(){
        if (this.weightKG <= 5){
            return "Ruf!";
        }
        else if (this.weightKG <= 12){
            return "Arf!";
        }
        else if (this.weightKG >= 12){
            return "WOOF!";
        }
        else { return "Meow"; }
    }
}

// instantiate (create) 2 new instances of the dog class and give them different properties. Then call bark()
let yourDog = new Dog("Pumpkin",4.9);
console.log(yourDog.bark());  // Ruff

let myDog = new Dog("Stalone",32);
console.log(myDog.bark());  // Woof!

// inheriting a class - allows you to make a new class, based upon another

// Create a RoboDog class that is based on the Dog class, but is a little different. use Extend to base on another class
class MechanicalDog extends Dog {
    // only take a single parameter for constructor
    constructor(dogName){
        super(dogName, 100);  // Call the parent dog creation function (called a contructor) Every mech dog is 100kg
    }

    // override the base dog bark method
    bark(){
        return "Does not compute";
    }
}

let mechDog = new MechanicalDog("K9");
console.log(mechDog.name + " says: " + mechDog.bark());  // Does not compute!

