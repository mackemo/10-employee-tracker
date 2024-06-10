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
        'Add a department', 'Add a role', 'Add an employee', 'Update an employee role', 'Exit'],
       
    }
];

function init() {
    return inquirer
        .prompt(questions)
        .then((answers) => {


            switch (answers.choice) {
                case 'View all departments':
                    return viewAllDepartments().then(init);


                case 'View all roles':
                    return viewAllRoles().then(init);


                case 'View all employees':
                    return viewAllEmployees().then(init);


                case 'Add a department':
                    return addDepartment().then(init);


                case 'Add a role':
                    return addRole().then(init);


                case 'Add an employee':
                    return addEmployee().then(init);


                case 'Update an employee role':
                    return updateEmployee().then(init);


                case 'Exit':
                    console.log('Goodbye!')
                    return;
            }

        })


        .catch(function(err) {
            console.error(("Error occurred:", err));
        }); 
        
};

init();