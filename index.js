const inquirer = require('inquirer');
const viewAllDepartments = require('./lib/viewAllDepartments');
const viewAllRoles = require('./lib/viewAllRoles');


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
                case 'View all departmetns':
                    await viewAllDepartments();
                    break;

                case 'View all roles':
                    await viewAllRoles();
                    break;

                case 'View all employees':
                    await
                    break;

                case 'Add a department':
                    await
                    break;

                case 'Add a role':
                    await
                    break;

                case 'Add an employee':
                    await
                    break;

                case 'Update an employee role':
                    await
                    break;
    
            }
        })

        .catch(function(err) {
            console.error(("Error occurred:", err));
        });  
}

init();