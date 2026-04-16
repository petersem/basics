
function add(numbersToAdd: number[]): number {
    return numbersToAdd.reduce(getSum, 0)
}

// reducer function - takes an initial Value (total) and the current value
function getSum(total: number, currentValue: number) {
    console.count('reducer'); // reducer count called
    return total + Math.round(currentValue);
}

console.log(add([1,2,3,4,5,6]));

const addNums: number[] = [10,88,9,99,8,7,6,5,4,4,2,1]
console.log(add(addNums))

import { Car, eColor, eEngine } from "./car.js"; 

const myCar = new Car(eColor.RED,eEngine.ELECTRIC,2,5,'holden','shaggin wagon')
console.log(myCar.showMe())


// standard syntax
let firstName: string

for (let index:number = 0; index < 10; index++) {
    console.log(`item ${index}`);
}

// custom types
type increasement = "wanged" | "dewanged";
let i: increasement = "dewanged";

// enums
enum poop {
    NUMBER1,
    NUMBER2,
    NUMBER3
}
const bp: poop = poop.NUMBER2

// interfaces
interface iEnemy {
    race: string
    attack: number
    defence: number
}

// classes
class Wang implements iEnemy {
    race: string 
    attack: number
    private _defence: number = 1

    // getter
    get defence() {
        return this._defence
    }

    // setter
    set defence(def: number) {
        if(def < 1 || def > 10) throw new Error("Defence must be 1 to 10")
        this._defence = def
    }

    public constructor(attack:number, defence: number) {
        this.race = "Wangmonger"
        this.attack = attack
        this.defence = defence       
    }
}

const myEnemy = new Wang(5,11)
