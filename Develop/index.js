// Packages needed for this application
const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js")


//Array of questions for user input
const questions = [{
    type: "input",
    name: "projectTitle",
    message: "What is the project title?",
},
{
    type: "input",
    name: "description",
    message: "Describe your project: "
},
{
    type: "input",
    name: "tableOfContents",
    message: "Add a table of contents: ",
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
    ]
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
    message: "Please enter your GitHub username: "
},
{
    type: "input",
    name: "email",
    message: "Please enter your email: "
}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data)  {
    
        //  const markdown =  generateMarkdown.generateMarkdown(data)
        // fs.writeFile(fileName, markdown)        
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((answers) => console.log(answers))
     // .then((data) => writeToFile("fileName.md", data))
    
}

// Function call to initialize app
init();
