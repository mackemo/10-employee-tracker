const pool = require('../config/connection');
const inquirer = require('inquirer');

async function addEmployee() {
    try {
        const employee = await inquirer.prompt(
            {
            type: 'input',
            name: 'firstName',
            message: 'Enter the first name of the employee:'
            },
            {
            type: 'input',
            name: 'lastName',
            message: 'Enter the last name of the employee:'
            },
            {
            type: 'input',
            name: 'roleId',
            message: 'Enter the role ID for the employee:'
            },
            {
            type: 'input',
            name: 'managertId',
            message: 'Enter the manager ID for the employee:'
            }
        );

        await pool.query('INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4) RETURNING *', 
        [employee.firstName, employee.lastName, employee.roleId, employee.managerId]);

        console.log(`Employee added successfully`);
    } catch (error) {
        console.error('Error adding employee:', error);
    }
}

module.exports = addEmployee;
