const express = require('express');
const multer = require('multer');

const path = require('path');

const router = express.Router();

const storage = multer.diskStorage({ 
    destination: (req, file, cb) => {
        // cb(null, './uploads');
        cb(null, path.join(__dirname, '../uploads'));
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

const uploader = multer({ storage: storage });

// router.post('/uploadfile', uploader.single('myfile'), (req, res) => {
   
//     const fileDetails = {
//         filename: req.file.filename,
//         originalname: req.file.originalname,
//         mimetype: req.file.mimetype,
//         size: req.file.size
//     };
//     // Save fileDetails to the database or perform any other required operations

//     res.json({ message: 'file upload success' });
// });

// app.use(express.json());
// serving front end build files
router.use(express.static(__dirname + "/../build"));

// route for file upload
router.post("/uploadfile", uploader.single('myFile'), (req, res, next) => {
    console.log(req.file.originalname + " file successfully uploaded !!");
    res.sendStatus(200);
});

// router.listen(3000, () => console.log("Listening on port 3000"));

module.exports = router;