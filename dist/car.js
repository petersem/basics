export var eColor;
(function (eColor) {
    eColor["RED"] = "Red";
    eColor["GREEN"] = "Green";
    eColor["WHITE"] = "White";
})(eColor || (eColor = {}));
export var eEngine;
(function (eEngine) {
    eEngine["V4"] = "putt putt";
    eEngine["V6"] = "chug chug";
    eEngine["V8"] = "lump lump";
    eEngine["ELECTRIC"] = "Weeeeeeeeeee";
})(eEngine || (eEngine = {}));
export class Car {
    color;
    engine;
    _doors = 2;
    _seats = 2;
    brand;
    nickName;
    set doors(doors) {
        if (doors < 2 || doors > 5) {
            throw new Error('Number of doors in invalid. Must be 2 to 5');
        }
        console.log('doors set in valid range');
        this._doors = doors;
    }
    get doors() {
        return this._doors;
    }
    set seats(seats) {
        if (seats < 2 || seats > 5) {
            throw new Error('Number of seats in invalid. Must be 2 to 5');
        }
        console.log('seats set in valid range');
        this._seats = seats;
    }
    get seats() {
        return this._seats;
    }
    constructor(color, engine, doors, seats, brand, nickName = "") {
        this.color = color;
        this.engine = engine;
        this.doors = doors;
        this.seats = seats;
        this.brand = brand;
        this.nickName = nickName;
    }
    startCar() {
        return `${this.color} ${this.brand} goes ${this.engine}`;
    }
    showMe() {
        return {
            color: this.color,
            engine: this.engine,
            doors: this.doors,
            seats: this.seats,
            brand: this.brand,
            nickName: this.nickName
        };
    }
}
const myCar = new Car(eColor.RED, eEngine.V8, 5, 4, "Holden", "Blurg");
console.log(myCar.startCar());
console.table(myCar.showMe());
//# sourceMappingURL=car.js.map