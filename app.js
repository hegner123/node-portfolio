const express = require('express');
const portController = require('./controllers/portController')
let PORT = process.env.PORT || 8080;
const app = express();

// set up template engine
app.set('view engine', 'ejs');

// static files

app.use(express.static('./'));


// fire controllers

portController(app);


app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});


