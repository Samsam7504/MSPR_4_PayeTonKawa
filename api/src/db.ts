// src/db.ts
import mysql from 'mysql2/promise';

// Create the connection to database
const db = mysql.createPool({
  host: 'localhost',
  user: 'youruser',
  password: 'yourpassword',
  database: 'yourdatabase'
});

export default db;