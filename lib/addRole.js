const pool = require('../config/connection');
const inquirer = require('inquirer');

async function addRole() {
    try {
        const role = await inquirer.prompt([
            {
            type: 'input',
            name: 'title',
            message: 'Enter the title of the role:'
            },
            {
            type: 'input',
            name: 'salary',
            message: 'Enter the salary for the role:'
            },
            {
            type: 'input',
            name: 'departmentId',
            message: 'Enter the department ID for the role:'
            }
        ]);

        await pool.query('INSERT INTO roles (title, salary, department_id) VALUES ($1, $2, $3) RETURNING *', 
        [role.title, role.salary, role.departmentId]);

        console.log(`Role added successfully`);
    } catch (error) {
        console.error('Error adding role:', error);
    }
}

module.exports = addRole;
