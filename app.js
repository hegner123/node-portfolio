var express = require('express');
var portController = require('./controllers/portController')

var app = express();

// set up template engine
app.set('view engine', 'ejs');

// static files

app.use(express.static('./'));


// fire controllers

portController(app);


// listen to port
app.listen(3002);
console.log("You are listening to port 3002");

