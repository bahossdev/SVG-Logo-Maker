
const inquirer = require('inquirer');
const { createLogo } = require('./createLogo.js');
const { writeFile } = require('fs');

const questions = [
    {
        type: 'checkbox',
        message: 'Choose one shape:',
        name: 'shape',
        choices: ['square', 'circle', 'triangle'],
    },
    {
        type: 'input',
        message: 'Enter your desired color for the shape. (name of the color, or a hexadecimal number):',
        name: 'shapeColor',
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
    run() {
        return inquirer.prompt(questions)

            .then((responses) => {
                console.log('responses = ', responses);
                return writeFile('./demo/logo.svg', createLogo(this.responses));
            })

            .then(() => console.log('Your logo is ready! 🤩 \n Check the demo folder.'))
            .catch((error) => {
                console.log(error);
                console.log('Oops... Something went wrong 😕')
            })
    }
}

module.exports = CLI