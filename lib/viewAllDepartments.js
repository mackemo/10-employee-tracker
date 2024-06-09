const pool = require('../config/connection');

async function viewAllDepartments() {
    try {
        const { rows } = await pool.query('SELECT * FROM departments');
        console.table(rows);
    } catch (err) {
        console.error(("Error executing query", err));
    }; 
    
};

module.exports = viewAllDepartments;

