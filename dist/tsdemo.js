function add(numbersToAdd) {
    return numbersToAdd.reduce(getSum, 0);
}
// reducer function - takes an initial Value (total) and the current value
function getSum(total, currentValue) {
    console.count('reducer'); // reducer count called
    return total + Math.round(currentValue);
}
console.log(add([1, 2, 3, 4, 5, 6]));
const addNums = [10, 88, 9, 99, 8, 7, 6, 5, 4, 4, 2, 1];
console.log(add(addNums));
import { Car, eColor, eEngine } from "./car.js";
const myCar = new Car(eColor.RED, eEngine.ELECTRIC, 2, 5, 'holden', 'shaggin wagon');
console.log(myCar.showMe());
// standard syntax
let firstName;
for (let index = 0; index < 10; index++) {
    console.log(`item ${index}`);
}
let i = "dewanged";
// enums
var poop;
(function (poop) {
    poop[poop["NUMBER1"] = 0] = "NUMBER1";
    poop[poop["NUMBER2"] = 1] = "NUMBER2";
    poop[poop["NUMBER3"] = 2] = "NUMBER3";
})(poop || (poop = {}));
const bp = poop.NUMBER2;
// classes
class Wang {
    race;
    attack;
    _defence = 1;
    // getter
    get defence() {
        return this._defence;
    }
    // setter
    set defence(def) {
        if (def < 1 || def > 10)
            throw new Error("Defence must be 1 to 10");
        this._defence = def;
    }
    constructor(attack, defence) {
        this.race = "Wangmonger";
        this.attack = attack;
        this.defence = defence;
    }
}
const myEnemy = new Wang(10, 10);
//# sourceMappingURL=tsdemo.js.map