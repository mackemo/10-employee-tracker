const pool = require('../config/connection');

async function viewAllDepartments() {
    try {
        const { rows } = await pool.query('SELECT * FROM departments');
        rows.forEach(department => {
            console.log(`${department.id}: ${department.name}`);
        })
    } catch (err) {
        console.error(("Error executing query", err));
    };
   
};

module.exports = viewAllDepartments;
