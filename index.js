const inquirer = require('inquirer');

const { 
    viewAllDepartments, 
    viewAllEmployees,
    viewAllRoles,
    addDepartment,
    addEmployee,
    addRole,
    updateEmployee
} = require('./lib/index');

const questions = [
    {
        type: 'list',
        name: 'choice',
        message: 'What would you like to do?',
        choices: ['View all departments', 'View all roles', 'View all employees',
        'Add a department', 'Add a role', 'Add an employee', 'Update an employee role'],
       
    }
]

function init() {
    return inquirer
        .prompt(questions)
        .then((answers) => {


            switch (answers.choice) {
                case 'View all departments':
                    viewAllDepartments();
                    break;


                case 'View all roles':
                    viewAllRoles();
                    break;


                case 'View all employees':
                    viewAllEmployees();
                    break;


                case 'Add a department':
                    addDepartment();
                    break;


                case 'Add a role':
                    addRole();
                    break;


                case 'Add an employee':
                    addEmployee();
                    break;


                case 'Update an employee role':
                    updateEmployee();
                    break;
   
            }
        })


        .catch(function(err) {
            console.error(("Error occurred:", err));
        });  
}

init();
