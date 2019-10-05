var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');


var urlencodedParser = bodyParser.urlencoded({extended:false});

// async..await is not allowed in global scope, must use a wrapper
async function mail(dataObj) {

  console.log(dataObj);

  var data1 = dataObj.data1
  var data2 = dataObj.data2
  
  
    
  
  let transporter = nodemailer.createTransport({
      host: 'smtp.sendgrid.net',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
          user: "apikey", 
          pass: "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" 
      }
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
      from: '"Michael Hegner"<hegner123@gmail.com>', // sender address
      to: [data2, "hegner123@gmail.com"], // list of receivers
      bcc: 'hegner123@gmail.com',
      subject: 'Thanks for your request', // Subject line
      text: "Thanks for requesting a copy of my resume " + data1 + ".", // plain text body
      attachments: [{filename: 'michael_hegner_resume.pdf',
      path: 'assets/attachments/mlh_resume.pdf'}]
  });

  console.log('Message sent: %s', info.messageId);
  


}

module.exports = function(app){
  
  app.get('/', function(req,res){
    console.log("controller link")
    res.render('pages/index');
  });

  app.get('/portfolio', function(req,res){
    res.render('pages/portfolio');
  });

  app.get('/contact', function(req,res){
    res.render('pages/contact');
  });


  app.post('/contact', urlencodedParser ,function(req,res){
    console.log(req.body);
    mail(req.body);
    res.json(req.body);
  });

};