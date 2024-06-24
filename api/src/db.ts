// src/db.ts
import mysql from 'mysql2/promise';

// Create the connection to database
const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'orders_db'
});

export default db;