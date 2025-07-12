require('dotenv').config();
const mysql = require('mysql2');

const db = mysql.createConnection({
  host: process.env.HOST,
  port: process.env.PORT,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

db.connect((err) => {
  if (err) return console.error('Connection error:', err);
  console.log('Connected to Railway MySQL');
});

// ❌ Don't import SQL again — it's already in Railway DB
// const fs = require('fs');
// const sql = fs.readFileSync('./kindle.sql', 'utf8');
// db.query(sql, (err, result) => {
//   if (err) console.error('Import failed:', err);
//   else console.log('Database imported!');
//   db.end();
// });

module.exports = db;
