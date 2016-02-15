var express = require('express');
var app = express();

app.get('/api/bears', function(req, res) {
	res.json({title: 'does it work?', body: "I hope so.."})
});


app.listen(3000, function(){
	console.log('the server is up and running..')
});

// lifecycle of this function is the req and 
// response.  We are hardcoding the response 
// as a json object






// Line 1 - not starting express with ./ means that 
// it will look in node_modules, etc. first
// line 2 - express is being defined as a constructor function
//