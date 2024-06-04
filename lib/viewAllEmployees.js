const pool = require('../config/connection');

async function viewAllEmployees() {
    try {
        const { rows } = await pool.query(`SELECT employees.role_id, departments.name, employees.first_name, 
        employees.last_name, roles.title, roles.salary, employees.manager_id
        
        FROM employees
        JOIN roles ON employees.role_id = roles.id
        JOIN departments ON roles.department_id = departments.id;`);
        rows.forEach(employee => {
            console.log(`${employee.id}: ${employee.first_name} ${employee.last_name} 
            - Role ID ${employee.role_id} - Manager ID ${employee.manager_id}`);
        })
    } catch (err) {
        console.error(("Error executing query", err));
    }; 
    
};

module.exports = viewAllEmployees();

