//Simple
var a1 = 10;
var a1 = 20;
let hello = "Hello!";
const x = 42;
//errors
//x=41;
//let hello = "World";

//output: 3 3 3
// for (var i = 0; i < 3 ; i++) {
//     setTimeout(function() { console.log(i); }, 100 * i);
// }

//output: 1 2 3
// for (let i = 0; i < 3 ; i++) {
//     setTimeout(function() { console.log(i); }, 100 * i);
// }

//Destructuring
let input = [1, 2];
let [first, second] = input;
let [first1, ...rest] = [1, 2, 3, 4];

let o = {
    a: "foo",
    b: 12,
    c: "bar"
};
var { a , ...passthrough } = o;
let total = passthrough.b + passthrough.c.length;
var { a: newName1, b: newName2 } = o; // alias

//Spread
let firstPart = [1, 2];
let secondPart = [3, 4];
let bothPlus = [0, ...firstPart, ...secondPart, 5];

let defaults = { food: "spicy", price: "$$", ambiance: "noisy" };
let search = { ...defaults, food: "rich" };

class C {
    p = 12;
    m() {
    }
}
let c = new C();
let clone = { ...c };
//clone.p; // ok, but IDEA dont understand :)
//clone.m(); // error!


console.log("\x1b[32m There's no actions. Just code \x1b[0m");