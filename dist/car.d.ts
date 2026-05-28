export declare enum eColor {
    RED = "Red",
    GREEN = "Green",
    WHITE = "White"
}
export declare enum eEngine {
    V4 = "putt putt",
    V6 = "chug chug",
    V8 = "lump lump",
    ELECTRIC = "Weeeeeeeeeee"
}
interface iCar {
    color: eColor;
    engine: eEngine;
    brand: string;
    nickName?: string;
    get doors(): number;
    set doors(doors: number);
    startCar(): String;
    showMe(): Object;
}
/**
 * CTOR details the parameters required to create new car object
 * @class Car
 * @classdesc A basic car class to describe and operate a car
 * @param {eColor} - the selected and allowed colour
 */
export declare class Car implements iCar {
    color: eColor;
    engine: eEngine;
    private _doors;
    private _seats;
    brand: string;
    nickName?: string;
    set doors(doors: number);
    get doors(): number;
    set seats(seats: number);
    get seats(): number;
    constructor(color: eColor, engine: eEngine, doors: number, seats: number, brand: string, nickName?: string);
    /**
     * startCar - starts the car object
     * @returns a string with details of the car that started
     */
    startCar(): string;
    showMe(): object;
}
export {};
//# sourceMappingURL=car.d.ts.map