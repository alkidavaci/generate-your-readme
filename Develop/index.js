// Packages needed for this application
const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js")


//Array of questions for user input
const questions = [{
    type: "input",
    name: "title",
    message: "What is the project title?",
    validate: function (answer) {
        if (answer.length < 1) {
            return console.log("Please enter the project title.");
        }
        return true;
    }
},
{
    type: "input",
    name: "description",
    message: "Describe your project: ",
    validate: function (answer) {
        if (answer.length < 1) {
            return console.log("Please enter description of your project.");
        }
        return true;
    }
},
{
    type: "input",
    name: "installation",
    message: "What are the steps required to install your project? ",
},
{
    type: "input",
    name: "usage",
    message: "Provide instructions and examples for use: "
},
{
    type: "list",
    name: "license",
    message: "Chose the license used for this project: ",
    choices: [
        "Apache",
        "GNU",
        "IMB",
        "MIT",
        "Mozilla",
        "Open"
    ],
    validate: function (answer) {
        if (answer.length < 1) {
            return console.log("Please enter the license used.");
        }
        return true;
    }
},
{
    type: "input",
    name: "contributing",
    message: "Who are the contributors of this projects?"
},
{
    type: "input",
    name: "tests",
    message: "If is test included, provide the test: "
},
{
    type: "input",
    name: "questions",
    message: "What do I do if I have an issue? "
},
{
    type: "input",
    name: "username",
    message: "Please enter your GitHub username: ",
    validate: function (answer) {
        if (answer.length < 1) {
            return console.log("Please enter your GitHub username.");
        }
        return true;
    }
},
{
    type: "input",
    name: "email",
    message: "Please enter your email: ",
    validate: function (answer) {
        const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if(!emailValid.test(answer)) {
            return "You have to provide a valid email address!"
        }
        return true
    }
}
];

//Function to write README file
function writeToFile(fileName, data)  {
    
    fs.writeFile(fileName, data, err => {
        if(err) throw err;
        console.log('README has been created!')
    });        
}

// Function to initialize app
function init() {
    inquirer
    .prompt(questions) //ask question in terminal
    .then(answer => generateMarkdown(answer)) //generate markdown with input answers
    .then(markdown => writeToFile('README.md', markdown)) //write the file
    
}

// Function call to initialize app
init();
