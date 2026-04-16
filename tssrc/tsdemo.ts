
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