// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "Name your file",
  },
  {
    type: "input",
    name: "description",
    message: "add description",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log("success")
  );
  //   console.log(fileName, data);
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    //   .then((answers) => {
    .then(function (answers) {
      //   console.log(answers);
      const readMeContent = generateMarkdown(answers);
      //   console.log(readMeContent);
      writeToFile("./utils/README.md", readMeContent);
    });
}

// Function call to initialize app
init();
