var express = require('express');
var portController = require('./controllers/portController')
let PORT = process.env.PORT || 8080;
var app = express();

// set up template engine
app.set('view engine', 'ejs');

// static files

app.use(express.static('./'));


// fire controllers

portController(app);


app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});


