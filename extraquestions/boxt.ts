class Box<T> {
    constructor(private value: T) {}

    display(): void {
        console.log("Value:", this.value);
    }
}

let numberBox = new Box<number>(100);
let stringBox = new Box<string>("Hello TypeScript");
let booleanBox = new Box<boolean>(true);

numberBox.display();
stringBox.display();
booleanBox.display();