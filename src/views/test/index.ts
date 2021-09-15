interface ClockConstructor {
    new (hour: number, minute: number):ClockInterface
}

type Apple = {
    id: number
}

interface ClockInterface {
    trick(): void;
}

class BigClock implements ClockInterface {
    trick(): void {
        console.log('BigClock')
    }
}

class SmallClock implements ClockInterface {
    trick(): void {
        console.log('SmallClock')
    }
}

class appleClock implements ClockInterface {
    trick(): void {
        console.log('SmallClock')
    }
}

function createClock(ctor: ClockConstructor, hour: number,minute: number) :ClockInterface {
    return new ctor(hour, minute)
}

let clockInterface = createClock(appleClock, 15,30);
let bigClock = createClock(BigClock, 15,30);

clockInterface.trick()


