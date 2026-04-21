
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
    specialAbility: string

    invoke(): string
}

// classes
class Wang implements iEnemy {
    race: string 
    attack: number
    specialAbility: string
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

    public constructor(attack:number, defence: number, ability: string) {
        this.race = "Wang"
        this.attack = attack
        this.defence = defence       
        this.specialAbility = ability
    }

    invoke(): string {
        return `${this.race} invokes the ${this.specialAbility} attack`;        
    }
}

const myEnemy = new Wang(5,10, 'increasement')


import chalk from 'chalk';

const log = console.log;
const red = chalk.bold.red
const ora = chalk.bold.hex('#f09e06');
const gre = chalk.bold.greenBright;
const bgW = chalk.bgWhite;
const blu = chalk.bold.blue;
const uCy = chalk.underline.cyanBright;

log(gre('this is'), ora('a test'), red('of coloured'), bgW.blue('text'), uCy('and underlines'))

// ES2015 template literal
log(`
CPU: ${chalk.red('90%')}
RAM: ${chalk.green('40%')}
DISK: ${chalk.yellow('70%')}
`);

// Use RGB colors in terminal emulators that support it.
log(chalk.rgb(123, 45, 67).underline('Underlined reddish color'));
log(chalk.hex('#DEADED').bold('Bold gray!'));

log(chalk.bgHex('#a200d3')(myEnemy.invoke()))