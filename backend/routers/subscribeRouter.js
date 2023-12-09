const express = require('express');
const Model = require('../models/subscriber');

const router = express.Router();

router.post('/add', (req, res) => {
    //json 
    console.log(req.body);

    new Model(req.body).save()
        .then((result) => {
            res.json(result);

        }).catch((err) => {
            console.log(err); 
            res.status(500).json(err);
        });

});



// : denotes url parameter
router.get('/getbyemail/:email', (req, res) => {
    console.log(req.params.email);


    // find function matches all documents
    // find0ne function matches and returns only first document
    Model.find({ email: req.params.email })
        .then((result) => {
            res.json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
})


router.get('/getall', (req, res) => {

    Model.find({})
        .then((result) => {
            res.json(result);
        }).catch((err) => {
            res.status(500).json(err);
        });

});
router.get('/getbyowner/:id', (req, res) => {

    // Model.findOne({_id : req.params._id})
    Model.find({owner : req.params.id})
        .then((result) => {
            res.json(result);
        }).catch((err) => {
            res.status(500).json(err);
        });

});

router.delete('/unsubscribe/:id', (req, res) => {
    Model.findByIdAndDelete(req.params.id)
      .then((result) => {
        if (!result) {
          return res.status(404).json({ message: 'User not found' });
        }
  
        res.status(200).json({ message: 'Unsubscribed successfully' });
      })
      .catch(error => {
        res.status(500).json({ message: error.message });
      });
  });

router.delete('/delete/:id', (req, res) => {
    console.log(req.params.id);
    Model.findByIdAndDelete(req.params.id)
        .then((result) => {
            res.json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/update/:id', (req, res) => {
    Model.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((result) => {
            res.json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});



module.exports = router;