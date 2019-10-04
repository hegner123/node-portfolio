var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');


var urlencodedParser = bodyParser.urlencoded({extended:false});

// async..await is not allowed in global scope, must use a wrapper
async function mail(dataObj) {

  console.log(dataObj);

  var data1 = dataObj.data1
  var data2 = dataObj.data2
  
  
    
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
      host: 'Smtp.gmail.com',
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
          user: "hegner123", // generated ethereal user
          pass: "GingER699" // generated ethereal password
      }
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
      from: '"Michael Hegner" <hegner123@gmail.com>', // sender address
      to: data2, // list of receivers
      bcc: 'hegner123@gmail.com',
      subject: 'Thanks for your request', // Subject line
      text: "Thanks for requesting a copy of my resume " + data1 + ".", // plain text body
      attachments: [{filename: 'michael_hegner_resume.pdf',
      path: 'assets/attachments/mlh_resume.pdf'}]
  });

  console.log('Message sent: %s', info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>


}

module.exports = function(app){
  
  app.get('/', function(req,res){
    res.render('../views/index');
  });

  app.get('/portfolio', function(req,res){
    res.render('../views/portfolio');
  });

  app.get('/contact', function(req,res){
    res.render('../views/contact');
  });


  app.post('/contact', urlencodedParser ,function(req,res){
    console.log(req.body);
    mail(req.body);
    res.json(req.body);
  });

};