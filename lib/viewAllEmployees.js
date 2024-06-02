const pool = require('../server');

async function viewAllEmployees() {
    try {
        const { rows } = await pool.query('SELECT * FROM employees');
        rows.forEach(employee => {
            console.log(`${employee.id}: ${employee.first_name} ${employee.last_name} 
            - Role ID ${employee.role_id} - Manager ID ${employee.manager_id}`);
        })
    } catch (err) {
        console.error(("Error executing query", err));
    }; 
    
};

module.exports = viewAllEmployees();

