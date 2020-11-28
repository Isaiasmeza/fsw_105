const readlineSync = require("readline-sync")

var firstNumber = readlineSync.questionInt(" Enter sirst Number:");

var secondNumber = readlineSync.questionInt("Enter second Number:");

var operation = readlineSync.question("What method would you like : add, sub, mul, div:");
//add
function add(a, b) {
    return (a + b);
}
var addResult = add(a, b);
console.log(addResult);

//subtraction
function sub(a, b) {
    return (a - b);
}
var subResult = sub(a, b);
console.log(subResult);

//multiply
function multi(a, b) {
    return (a * b);
}
var multiResult = multi(a, b);
console.log(multiResult);

function div(a, b) {
    return (a / b);
}
var divResult = div(a, b);
console.log(divResult);
if (operation === "add") {
    add(a, b);
} else if (operation === "sub") {
    sub(a, b);
} else if (operation === "multi") {
    multi(a, b);
} else if (operation === "div") {
    div(a, b);
} else {
    console.log("enter here");
}