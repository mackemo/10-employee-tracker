const pool = require('../server');
const inquirer = require('inquirer');

async function addDepartment() {
    try {
        const departmentName = await inquirer.prompt({
            type: 'input',
            name: 'name',
            message: 'Enter the name of the department:'
        });

        await pool.query('INSERT INTO departments (name) VALUES ($1) RETURNING *', [departmentName.name]);

        console.log(`Department added successfully`);
    } catch (error) {
        console.error('Error adding department:', error);
    }
}

module.exports = addDepartment();