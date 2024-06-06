const pool = require('../config/connection');
const inquirer = require('inquirer');

async function updateEmployee() {
    try {
        const employeeUpdate = await inquirer.prompt([
            {
                type: 'input',
                name: 'employeeId',
                message: 'Enter the ID of the employee to update:'
            },
            {
                type: 'input',
                name: 'roleId',
                message: 'Enter the new role ID for the employee:'
            },
            {
                type: 'input',
                name: 'managerId',
                message: 'Enter the new manager ID for the employee:'
            }
        ]);

        await pool.query('UPDATE employees SET role_id = $1, manager_id = $2 WHERE id = $3 RETURNING *', 
        [employeeUpdate.roleId, employeeUpdate.managerId, employeeUpdate.employeeId]);

        console.log(`Employee updated successfully`);
    } catch (error) {
        console.error('Error updating employee:', error);
    }
}

module.exports = updateEmployee;
