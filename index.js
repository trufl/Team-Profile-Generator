const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');

const managers = [];
const engineers = [];
const interns = [];
let position = 'employee';
const questions = [{
    type: 'input',
    name: 'name',
    message: `Please enter the ${position}'s name:`,
}, {
    type: 'input',
    name: 'id',
    message: `Please enter the ${position}'s id:`,
}, {
    type: 'input',
    name: 'email',
    message: `Please enter the ${position}'s email:`
}]

function init() {

    console.log('Welcome!')
    console.log(`This application will: 
- Collect information about your team
- Generate an HTML document to display your team's profile`);

    const initPrompt = inquirer.createPromptModule();
    initPrompt({
        type: 'confirm',
        name: 'continue',
        message: 'Would you like to start generating a team profile?'
    })
    .then((answers) => {
        if(answers.continue) {
            new inquirer.Separator();
            getManagerInformation();
        } else {
            console.clear();
            init();
        }
    });
}



init();