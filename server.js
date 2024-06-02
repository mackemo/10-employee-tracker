const express = require('express');
// creating connection pool to connect application to server
const { POOL } = require('pg');

const PORT = process.env.PORT || 3001;
const app = express();

// middleware
app.use(express.urlencoded({extended: false}));
app.use(express.json());




