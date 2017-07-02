//Boolean
let isDone: boolean = false;

//Number
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

//String
let color: string = "blue";
color = 'red';

let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = `Hello, my name is ${ fullName }.
I'll be ${ age + 1 } years old next month.`;

//Array
let list: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

//Tuple
let tupleList: [string, number] = ["hello", 10];
tupleList[3] = "world";
//error example
//tupleList = [10, "hello"];
//tupleList[1].substr(1)
//tupleList[6] = true;

//Enum
enum Color {Red = 2, Green, Blue} // if set Red = 2 then Green === 3 and Blue === 4
let color2: Color = Color.Green;
let colorName: string = Color[3]; // colorName === "Green"

//Any
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false;

let list3: any[] = [1, true, "free"];
list3[1] = 100;

//Void
function warnUser(): void {
    alert("This is my warning message");
}
let unusable: void = undefined; // useless
let u: undefined = undefined;
let n: null = null;

//Never

// Function returning never must have unreachable end point
function error(message: string): never {
    throw new Error(message);
}

function infiniteLoop(): never {
    while (true) {
    }
}

//Assertions
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;

let someValue2: any = "this is a string";
let strLength2: number = (someValue2 as string).length; // <3

console.log("\x1b[32m There's no actions. Just code \x1b[0m");