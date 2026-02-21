// Classes - are reusable objects which you can have many copies of. 
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
let yourDog = new Dog("Pumkin",4.9);
console.log(yourDog.bark());  // Ruff

let myDog = new Dog("Stalone",32);
console.log(myDog.bark());  // Woof!
