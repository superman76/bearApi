// IMPORT THE OTHER FILE
var Calculator = require('./calculator')  
// this ./ is looking for the calculator
 // file from calculator.js
console.log(Calculator);
		// this tests it

//CREATE A NEW CALCULATOR

var myCalculator = new Calculator();

//TEST THE SUM FUNCTION - Yeehaa it works
console.log(myCalculator.sum(10, 10));
console.log(myCalculator.subtract(10, 10));
