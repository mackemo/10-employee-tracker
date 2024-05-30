const inquirer = require('inquirer');

const questions = [
    {
        type: 'list',
        name: '',
        message: '', 
        choices: ['View all departments', 'View all roles', 'View all employees', 
        'Add a department', 'Add a role', 'Add an employee', 'Update an employee role'],
        
    }
]
