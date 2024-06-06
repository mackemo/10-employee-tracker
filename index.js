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
        name: 'choices',
        message: 'What would you like to do?',
        choices: ['View all departments', 'View all roles', 'View all employees',
        'Add a department', 'Add a role', 'Add an employee', 'Update an employee role'],
       
    }
]

function init() {
    inquirer
        .prompt(questions)
        .then(async (answers) => {


            switch (answers) {
                case 'View all departments':
                    await viewAllDepartments();
                    break;


                case 'View all roles':
                    await viewAllRoles();
                    break;


                case 'View all employees':
                    await viewAllEmployees();
                    break;


                case 'Add a department':
                    await addDepartment();
                    break;


                case 'Add a role':
                    await addRole();
                    break;


                case 'Add an employee':
                    await addEmployee();
                    break;


                case 'Update an employee role':
                    await updateEmployee();
                    break;
   
            }
        })


        .catch(function(err) {
            console.error(("Error occurred:", err));
        });  
}

init();
