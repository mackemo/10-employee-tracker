
// creating connection pool to connect application to server
const { Pool } = require('pg');
// package to store sensitive info
require('dotenv').config();


// connect to database
const pool = new Pool (
    {
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        host: 'localhost',
        database: process.env.DB_NAME
    },

    console.log(`Connected to ${process.env.DB_NAME} database`)
)

module.exports = pool;
