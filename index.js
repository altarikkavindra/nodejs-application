const express = require("express");
const mysql = require("mysql2/promise");

const app = express();
const PORT = process.env.PORT || 3000;

// koneksi pool ke database
const pool = mysql.createPool({
  host: process.env.DB_HOST || "db",
  user: process.env.DB_USER || "user",
  password: process.env.DB_PASSWORD || "password",
  database: process.env.DB_NAME || "testdb"
});

// endpoint default
app.get("/", (req, res) => {
  res.send("Hello from Node.js + MySQL App 🚀");
});

// endpoint ambil user
app.get("/users", async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM users");
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching users");
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
