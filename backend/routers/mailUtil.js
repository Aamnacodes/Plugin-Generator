var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'plugingenerator96@gmail.com',
    pass: 'ugtzrzmwbqbhucvf'
  }
});

var mailOptions = {
  from: 'plugingenerator96@gmail.com',
  to: 'samanabid8715@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});