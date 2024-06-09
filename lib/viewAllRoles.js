const pool = require('../config/connection');

async function viewAllRoles() {
    try {
        const { rows } = await pool.query(`SELECT roles.id, roles.title,
        departments.name, roles.salary 
        
        FROM roles
        JOIN departments ON roles.department_id = departments.id;
        `);
        
        console.table(rows);
    } catch (err) {
        console.error(("Error executing query", err));
    }; 
    
};

module.exports = viewAllRoles;

