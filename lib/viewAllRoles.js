const pool = require('../server');

async function viewAllRoles() {
    try {
        const { rows } = await pool.query('SELECT * FROM roles');
        rows.forEach(role => {
            console.log(`${role.id}: ${role.title} - Salary: ${role.salary}`);
        })
    } catch (err) {
        console.error(("Error executing query", err));
    }; 
    
};

module.exports = viewAllRoles();

