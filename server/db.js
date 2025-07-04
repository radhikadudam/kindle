
const mysql = require("mysql");

const db = mysql.createConnection({
  host: process.env.HOST, // Ensure this is correct
  user: process.env.USER, // Your DB username
  password: process.env.PASSWORD, // Your DB password
  database: process.env.DATABASE // Replace with your actual DB name
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err);
    return;
  }
  console.log("Connected to MySQL database");
});

module.exports = db;

