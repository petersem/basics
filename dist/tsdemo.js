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
    specialAbility;
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
    constructor(attack, defence, ability) {
        this.race = "Wang";
        this.attack = attack;
        this.defence = defence;
        this.specialAbility = ability;
    }
    invoke() {
        return `${this.race} invokes the ${this.specialAbility} attack`;
    }
}
const myEnemy = new Wang(5, 10, 'increasement');
import chalk from 'chalk';
const log = console.log;
const red = chalk.bold.red;
const ora = chalk.bold.hex('#f09e06');
const gre = chalk.bold.greenBright;
const bgW = chalk.bgWhite;
const blu = chalk.bold.blue;
const uCy = chalk.underline.cyanBright;
log(gre('this is'), ora('a test'), red('of coloured'), bgW.blue('text'), uCy('and underlines'));
// ES2015 template literal
log(`
CPU: ${chalk.red('90%')}
RAM: ${chalk.green('40%')}
DISK: ${chalk.yellow('70%')}
`);
// Use RGB colors in terminal emulators that support it.
log(chalk.rgb(123, 45, 67).underline('Underlined reddish color'));
log(chalk.hex('#DEADED').bold('Bold gray!'));
log(chalk.bgHex('#a200d3')(myEnemy.invoke()));
//# sourceMappingURL=tsdemo.js.map