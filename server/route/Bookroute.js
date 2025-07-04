

const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const multer = require('multer');
const db = require('../db');

const router = express.Router();
// const pdf = req.file?.path;
// Multer storage setup
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname);
    }
});

const upload = multer({ storage });

// Create book route with PDF upload
// router.post('/create', upload.single('pdf'), (req, res) => {
//     const { title, img, author, description, price } = req.body;
//     const pdf = req.pdf?.path;

//     if (!pdf) {
//         return res.status(400).json({ error: "PDF file not uploaded." });
//     }

//     try {
//         const q = "INSERT INTO book(`title`,`img`,`author`,`description`,`price`,`pdf`) VALUES (?, ?, ?, ?, ?, ?)";
//         db.query(q, [title, img, author, description, price, pdf], (err, result) => {
//             if (err) {
//                 console.error("Database insert error:", err);
//                 return res.status(500).json({ error: "Database insert error" });
//             }

//             return res.status(201).json({ message: "Book created successfully" });
//         });
//     } catch (error) {
//         console.error("Internal error:", error);
//         return res.status(500).json({ error: "Internal server error" });
//     }
// });
router.post('/create', upload.single('pdf'), (req, res) => {
    const { title, img, author, description, price } = req.body;
    const pdf = req.file?.path;

    if (!pdf) {
        return res.status(400).json({ error: "PDF file not uploaded." });
    }

    try {
        const q = "INSERT INTO book(`title`,`img`,`author`,`description`,`price`,`pdf`) VALUES (?, ?, ?, ?, ?, ?)";
        db.query(q, [title, img, author, description, price, pdf], (err, result) => {
            if (err) {
                console.error("Database insert error:", err);
                return res.status(500).json({ error: "Database insert error" });
            }

            return res.status(201).json({ message: "Book created successfully" });
        });
    } catch (error) {
        console.error("Internal error:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
});


router.get("/all", (req, res) => {
    const q = "SELECT * FROM book"

    db.query(q, (err, data) => {
        if (err) return res.send(err)
        return res.status(200).json(data)
    })
})

router.get('/:id', (req, res) => {
    try {

        const { id } = req.params
        const q = "SELECT * FROM book WHERE id = ?"
        db.query(q, id, (err, data) => {
            if (err) {
                return res.status(400).json({ error: "eror occured" })
            }
            if (data.length===0) {
               return res.status(400).json({ error: "book not found" })
            }
            res.status(200).json(data[0])

        })
    } catch (error) {
        console.log(error)
        res.status(400).json({ error: "eror occured" })
    }
})
module.exports = router;
