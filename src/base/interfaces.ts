//Base
interface Config {
    status: string;
    width?: number;
    readonly justRead: string;
    justReadArray: ReadonlyArray<string>;

    [propName: string]: any;
    //[propName: string]: string; //only string props in object
}

function test(config: Config, consoleText: string) {
    console.log(consoleText);
    console.log(config.status);
    //errors
    // config.justReadArray = ["1"];
}

let configVariable = {status: "done", justRead: "just read", justReadArray: ["just read"]};

test({status: "done", justRead: "just read", justReadArray: ["just read"]} as Config, "assertion test: ");
// test(configVariable, "variable test: "); //work, but IDEA don't understand this

//Function
interface SearchFunc {
    (source: string, subString: string): boolean;
}
let mySearch: SearchFunc = function (source: string, subStringButAnotherName: string) {
    let result = source.search(subStringButAnotherName);
    return result == -1;
};

//Index
interface StringArray {
    [anyNameHere: number]: string;
}

let myArray: StringArray;
myArray = ["Bob", "Fred"];

//Class
interface ClockInterface {
    currentTime: Date;
}

class Clock implements ClockInterface {
    currentTime: Date;
    constructor(h: number, m: number) { }
}
