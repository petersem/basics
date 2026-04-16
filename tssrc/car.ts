export enum eColor {
    RED = "Red",
    GREEN = "Green",
    WHITE = "White" 
}

export enum eEngine {
    V4 = "putt putt",
    V6 = "chug chug",
    V8 = "lump lump",
    ELECTRIC = "Weeeeeeeeeee"
}

interface iCar {
    color: eColor
    engine: eEngine
    //private _doors: number
    //seats: number
    brand: string
    nickName?: string

    get doors(): number
    set doors(doors: number)

    startCar(): String 
    showMe(): Object
}

export class Car implements iCar {
    color: eColor
    engine: eEngine
    private _doors: number = 2
    private _seats: number = 2
    brand: string
    nickName?: string

    set doors(doors: number) {
        if (doors < 2 || doors > 5) {
            throw new Error('Number of doors in invalid. Must be 2 to 5');
        }
        console.log('doors set in valid range')
        this._doors = doors
    }

    get doors() {
        return this._doors
    }

    set seats(seats: number) {
        if (seats < 2 || seats > 5) {
            throw new Error('Number of seats in invalid. Must be 2 to 5');
        }
        console.log('seats set in valid range')
        this._seats = seats
    }

    get seats() {
        return this._seats
    }

    constructor(color: eColor, engine: eEngine, doors: number, seats: number, brand: string, nickName = "") {
        this.color = color
        this.engine = engine
        this.doors = doors
        this.seats = seats
        this.brand = brand
        this.nickName = nickName
    }

    startCar(): string {
        return `${this.color} ${this.brand} goes ${this.engine}`
    }

    showMe(): object {
        return { 
            color: this.color,
            engine: this.engine,
            doors: this.doors,
            seats: this.seats,
            brand: this.brand,
            nickName: this.nickName
         }
    }
}

const myCar = new Car(eColor.RED,eEngine.V8,5,4,"Holden","Blurg");
console.log(myCar.startCar())
console.table(myCar.showMe())

