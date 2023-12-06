const express = require('express');
const multer = require('multer');

const router = express.Router();

const storage = multer.diskStorage({ 
    destination: (req, file, cb) => {
        cb(null, './uploads');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

const uploader = multer({ storage: storage });

router.post('/uploadfile', uploader.single('myfile'), (req, res) => {
   
    const fileDetails = {
        filename: req.file.filename,
        originalname: req.file.originalname,
        mimetype: req.file.mimetype,
        size: req.file.size
    };
    // Save fileDetails to the database or perform any other required operations

    res.json({ message: 'file upload success' });
});

module.exports = router;