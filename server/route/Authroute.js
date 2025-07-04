const express = require('express')
// const cors = require('cors')
const dotenv = require('dotenv')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const db = require('../db')
// const User = require('../model/User')

const router = express.Router()

router.post('/register', (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({ error: "All fields are required" });
        }

        // Check if user exists
        const q = "SELECT * FROM user WHERE email = ? OR name = ?";
        db.query(q, [email, name], (err, data) => {

            if (err) {
                console.error("Database error:", err);
                return res.status(500).json({ error: "Database error" });
            }

            if (data.length) {
                return res.status(409).json({ error: "User already exists" });
            }
            // Hash password
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(password, salt);

            // Insert user
            const q = "INSERT INTO user(`name`,`email`,`password`) VALUES (?, ?, ?)";
            db.query(q, [name, email, hash], (err, result) => {
                if (err) {
                    console.error("Database insert error:", err);
                    return res.status(500).json({ error: "Database insert error" });
                }

                return res.status(201).json({ message: "User created successfully" });
            });
        });
    } catch (err) {
        console.error("Unexpected server error:", err);
        return res.status(500).json({ error: err });
    }
})




router.post('/login', (req, res) => {
    const q = "SELECT id, name, email, password FROM user WHERE email = ?";
    try {
        db.query(q, [req.body.email], (err, data) => {
            if (err) return res.json(err);
            if (data.length === 0) return res.status(404).json("user not found");

            // const password = data[0].password;
            // console.log(data[0].password)
            if (!data[0].password) return res.status(400).json("password not found");

            const ispasscorrect = bcrypt.compareSync(req.body.password, data[0].password);
            if (!ispasscorrect) return res.status(400).json("wrong username or password");

            const token = jwt.sign({ id: data[0].id }, "jwtkey");
            const { password, ...other } = data[0];
            // console.log(token)

            res
                .cookie('access_token', token, {
                    httpOnly: true, // Prevents client-side JavaScript from accessing the cookie
                    secure: false, // Set to true if using HTTPS
                    sameSite: 'strict', // Prevents cross-site request forgery (CSRF)
                    // maxAge: 1000 * 60 * 60 * 24, // Cookie expires in 1 day
                })
                .status(200)
                .json(other);
            // console.log(req.cookies)

        });

    } catch (error) {
        const errorData = response.json();
        console.error("Login failed:", errorData.error);
        console.log(error)

    }
})

router.post('/logout', (req, res) => {
    res.clearCookie("access_token", {
        httpOnly: true,  // Must match the original settings
        secure: false,   // Set to true if using HTTPS
        sameSite: "strict"
    });
    res.status(200).json("User logged out");
})

module.exports = router;