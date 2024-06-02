const express = require('express');
// creating connection pool to connect application to server
const { POOL } = require('pg');
require('dotenv').config();

const PORT = process.env.PORT || 3001;
const app = express();

// middleware
app.use(express.urlencoded({extended: false}));
app.use(express.json());


// connect to database
const pool = new POOL (
    {
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        host: 'localhost',
        database: 'company_db'
    },

    console.log('Connected to company_db database')
)

pool.connect();


