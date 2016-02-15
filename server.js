var express = require('express');
var app = express();

var paddington = {name: "paddington", id: "1", age: "5", gender: "M"}
var winnie = {name: "winnie", id: "2", age: "15", gender: "M"}
var monte = {name: "monte", id: "3", age: "12", gender: "M"}
var bart = {name: "bart", id: "4", age: "21", gender: "M"}
var bertha = {name: "bertha", id: "5", age: "3", gender: "F"}

var bears = [paddington, winnie, monte, bart]

app.get('/api/bears', function(req, res) {
	res.json(bears);
});

app.listen(3000, function(){
	console.log('I shot the sheriff..')
});

// lifecycle of this function is the req and 
// response.  We are hardcoding the response 
// as a json object

// Line 1 - not starting express with ./ means that 
// it will look in node_modules, etc. first
// line 2 - express is being defined as a constructor function
// line 4-6 is creating a api endpoint  "/api/bears" defines the end point
