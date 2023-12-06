var nodemailer = require('nodemailer');
const express = require('express');
const router = express.Router();

const path = require('path');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'plugingenerator96@gmail.com',
    pass: 'ugtzrzmwbqbhucvf'
  }
});

router.post('/sendmail', (req, res) => { 
  console.log(req.body);
  const { body } = req;
  console.log('FilePathe: ', `${path.join(__dirname, '../uploads')}/${req.body.fileName}`);
  const payload = {
    from: body.from,
    to: body.to,
    subject: body.subject,
    html: body.html,
    attachments: req.body.fileName !== '' ? [
      {
        filename: req.body.fileName,
        path: `${path.join(__dirname, '../uploads')}/${req.body.fileName}`
      }] : ''
    };
  console.log('payload: ', payload);                  
  transporter.sendMail(payload, function(error, info){
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
