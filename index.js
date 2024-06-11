const inquirer = require('inquirer');

// importing all files with functions to be used
const { 
    viewAllDepartments, 
    viewAllEmployees,
    viewAllRoles,
    addDepartment,
    addEmployee,
    addRole,
    updateEmployee
} = require('./lib/index');

// array of questions for user input
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

            //  switch statement to run a function based off of user choice
            // runs init after running a function to display questions again after a choice
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

                // the exit choice exits the inquirer prompt questions
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