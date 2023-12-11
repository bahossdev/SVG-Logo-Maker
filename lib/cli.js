const inquirer = require('inquirer');
const { createLogo } = require('./createLogo.js');
const { writeFile } = require('fs').promises;

// Array of questions for user input
const questions = [
    {
        type: 'list',
        message: 'Choose one shape:',
        name: 'shape',
        choices: ['circle', 'square', 'triangle'],
    },
    {
        type: 'input',
        message: 'Enter your desired color for the shape. (name of the color, or a hexadecimal number):',
        name: 'shapeColor1',
    },
    {
        type: 'confirm',
        message: 'Do you want a gradient background for your logo?',
        name: 'gradientBG',
    },
    {
        type: 'input',
        message: 'Add the second color for gradient background:',
        name: 'shapeColor2',
        when: (answers) => answers.gradientBG,
    },
    {
        type: 'input',
        message: 'Enter up to three characters:',
        name: 'text',
    },
    {
        type: 'input',
        message: 'Enter your desired color for the text. (name of the color, or a hexadecimal number):',
        name: 'textColor',
    },
]

class CLI {
    constructor() {
        this.data = []
    }

    // Method to run the CLI application
    run() {
        return inquirer.prompt(questions)

            .then((responses) => {
                console.log('responses = ', responses);

                // Create logo and write it to a file
                return writeFile('./demo/logo.svg', createLogo(responses));
            })

            .then(() => console.log('Your logo is ready! 🤩 \nCheck the demo folder.'))
            .catch((error) => {
                console.log(error);
                console.log('Oops... Something went wrong 😕')
            })
    }
}

module.exports = CLI