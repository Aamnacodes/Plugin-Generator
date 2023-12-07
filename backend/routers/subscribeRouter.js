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

// router.delete('/delete/:id', (req, res) => {
//     Model.findByIdAndDelete(req.params.id)
//         .then((result) => {
//             res.json(result);
//         }).catch((err) => {
//             console.log(err);
//             res.status(500).json(err);
//         });
// });

const deleteUser = async (id) => {
    const res = await fetch("http://localhost:5000/subscriber/delete/"+id, { method : 'DELETE'});
    console.log(res.status);
    console.log(res)
    const data = await res.json();
    console.log(data);
    if(res.status === 200){

      // setUserList(prevUserList => prevUserList.filter(user => user._id !== id));
      setUserList(userList.filter(user => user._id !== id));
      console.log(userList);
      if (data){
      toast.success(data.name +' Deleted Successfully ❗')
      }
      fetchUserData();
         }
    };

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