var nodemailer = require('nodemailer');
const express = require('express');
const router = express.Router();

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'plugingenerator96@gmail.com',
    pass: 'ugtzrzmwbqbhucvf'
  }
});

// var mailOptions = {
//   from: 'plugingenerator96@gmail.com',
//   to: 'samanabid8715@gmail.com',
//   subject: 'Sending Email using Node.js',
//   text: 'That was easy!'
// };

router.post('/sendmail', (req, res) => { 
  console.log(req.body);
  transporter.sendMail(req.body, function(error, info){
    if (error) {
      console.log(error);
      res.status(500).json({message : 'some error occured send mail'})
    } else {
      console.log('Email sent: ' + info.response);
      res.status(201).json(info.response);
    }
  });
 })

 module.exports = router;
