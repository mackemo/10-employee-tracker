const pool = require('../config/connection');

async function viewAllRoles() {
    try {
        const { rows } = await pool.query('SELECT * FROM roles');
        rows.forEach(role => {
            console.log(`${role.id}: ${role.title} - Salary: ${role.salary}
            - Department ID ${role.department_id}`);
        })
    } catch (err) {
        console.error(("Error executing query", err));
    }; 
    
};

module.exports = viewAllRoles();

