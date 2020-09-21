const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const teamMembers = [];

// First round of questions to add manager information to roster (teamMembers array)
function managerPrompt() {
    return inquirer.prompt([
        {
            type: "input",
            message: "What is the manager's name?",
            name: "managerName",
            validate: function(answer) {
                if (answer !== "") { 
                    return true;
                }
                return "Please enter at least one character"
            }
        },
        {
            type: "input",
            message: "What is the manager's email address?",
            name: "managerEmail",
            validate: function(answer) {
                if (answer !== "") { 
                    return true;
                }
                return "Please enter at least one character"
            }
        },
        {
            type: "input",
            message: "What is the manager's id number?",
            name: "managerId",
            validate: function(answer) {
                if (answer !== "") { 
                    return true;
                }
                return "Please enter at least one character"
            }
        },
        {
            type: "input",
            message: "What is the manager's office number?",
            name: "managerOfficeNumber",
            validate: function(answer) {
                if (answer !== "") { 
                    return true;
                }
                return "Please enter at least one character"
            }
        },
    ])
        .then(function (response) {
            const manager = new Manager(response.managerName, response.managerId, response.managerEmail, response.managerOfficeNumber)
            function addToArray() {
                teamMembers.push(manager)
            }
            addToArray();
            addEmployeePrompt()
        })
        .catch(function (err) {
            console.log(err);
        });
};

// Asks user questions for engineer, then pushes information to roster.
function addEngineerPrompt() {
    return inquirer.prompt([
        {
            type: "input",
            message: "What is the engineer's name?",
            name: "engineerName",
            validate: function(answer) {
                if (answer !== "") { 
                    return true;
                }
                return "Please enter at least one character"
            }
        },
        {
            type: "input",
            message: "What is the engineer's email address?",
            name: "engineerEmail",
            validate: function(answer) {
                if (answer !== "") { 
                    return true;
                }
                return "Please enter at least one character"
            }
        },
        {
            type: "input",
            message: "What is the engineer's id number?",
            name: "engineerId",
            validate: function(answer) {
                if (answer !== "") { 
                    return true;
                }
                return "Please enter at least one character"
            }
        },
        {
            type: "input",
            message: "What is the engineers Github username?",
            name: "Github",
            validate: function(answer) {
                if (answer !== "") { 
                    return true;
                }
                return "Please enter at least one character"
            }
        }
    ])
        .then(function (response) {
            const engineer = new Engineer(response.engineerName, response.engineerEmail, response.engineerId, response.github);
            function addToArray() {
                teamMembers.push(engineer);
            }
            addToArray();
            addEmpPrompt();
        })
        .catch(function (err) {
            console.log(err);
        });
};

// Asks user questions for intern, then pushes information to roster.
function addInternPrompt() {
    return inquirer.prompt([
        {
            type: "input",
            message: "What is the intern's name?",
            name: "internName",
            validate: function(answer) {
                if (answer !== "") { 
                    return true;
                }
                return "Please enter at least one character"
            }
        },
        {
            type: "input",
            message: "What is the intern's email address?",
            name: "internEmail",
            validate: function(answer) {
                if (answer !== "") { 
                    return true;
                }
                return "Please enter at least one character"
            }
        },
        {
            type: "input",
            message: "What is the intern's id number?",
            name: "internId",
            validate: function(answer) {
                if (answer !== "") { 
                    return true;
                }
                return "Please enter at least one character"
            }
        },
        {
            type: "input",
            message: "Which school is the intern enrolled at?",
            name: "internSchool",
            validate: function(answer) {
                if (answer !== "") { 
                    return true;
                }
                return "Please enter at least one character"
            }
        }
    ])
        .then(function (response) {
            const intern = new Intern(response.internName, response.internEmail, response.internId, response.internSchool)
            function addToArray() {
                teamMembers.push(intern)
            }
            addToArray();
            addEmpPrompt()
        })
        .catch(function (err) {
            console.log(err);
        });
};

// call the inniatal function to start the program 
managerPrompt()


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
