const express = require('express')
const path = require('path')
var portController = require('./controllers/portController')
const PORT = process.env.PORT || 5000

var app = express();

// fire controllers

portController(app);

express()
  .use(express.static('./'))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))



