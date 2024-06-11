const pool = require('../config/connection');

async function viewAllEmployees() {
    // selects certain headers and shows table in console
    try {
        const { rows } = await pool.query(`SELECT employees.id, 
        employees.first_name, employees.last_name, roles.title, 
        roles.salary, departments.name
        
        FROM employees
        JOIN roles ON employees.role_id = roles.id
        JOIN departments ON roles.department_id = departments.id;
        `);
        console.table(rows);
    } catch (err) {
        console.error(("Error executing query", err));
    };
   
};

module.exports = viewAllEmployees;
