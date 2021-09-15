interface ClockConstructor {
    new (hour: number, minute: number): ClockInterface;
}

interface ClockInterface {
    tick(): void;
}

export class DigtalInterface implements ClockInterface {
    tick(): void {
        console.log('this is DigtalInterface')
    }
}

export class AnalogInterface implements ClockInterface {
    tick(): void {
        console.log('this is AnalogInterface')
    }
}

export function createClock(
    ctor: ClockConstructor,
    hour: number,
    minute: number
): ClockInterface {
    return new ctor(hour,minute)
}

const digtal = createClock(DigtalInterface, 15,25)
const analog = createClock(AnalogInterface, 6,30)

digtal.tick()
analog.tick()


const obj:any = {
    name: '111',
    helloWorld: () => '11'
}
// obj.hello()

const obj1:unknown = {
    name: '111',
    helloWorld: () => '11'
}

export default class Apple {
    readonly num:number = 0
    readonly price:number = 0
    constructor(num: number, price: number) {
        this.num = num
        this.price = price
    }
}

let apple12 = new Apple(100, 300);
console.log(apple12.num);

