const express = require('express')
const path = require('path')
var portController = require('./controllers/portController')
const PORT = process.env.PORT || 5000

var app = express();

// fire controllers




  app.use(express.static(path.join(__dirname, '/')))
  app.set('views', path.join(__dirname, 'views'))
  app.set('view engine', 'ejs')
  portController(app);
  app.listen(PORT, () => console.log(`Listening on ${ PORT }`));
  

