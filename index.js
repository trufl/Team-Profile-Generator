const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const {startFile, generateManagerProfile, generateEngineerProfile, generateInternProfile, finishFile} = require('./src/generateTeamProfile');

const managers = [];
const engineers = [];
const interns = [];

function init() {

    console.log();
    console.log('Welcome!');
    console.log(`This application will: 
- Collect information about your team
- Generate an HTML document to display your team's profile\n`);

    const initPrompt = inquirer.createPromptModule();
    initPrompt({
        type: 'confirm',
        name: 'continue',
        message: 'Would you like to start generating a team profile?'
    })
    .then((answers) => {
        if(answers.continue) {
            console.log('=============================================================\n')
            getManagerInformation();
        } else {
            console.clear();
            init();
        }
    });
}

function getManagerInformation() {
    startFile();

    const managerQs = getQuestions("Manager",[{
        type: 'input',
        name: 'officeNum',
        message: `Please enter the Manager's office number:`
    }]);
    
    inquirer.prompt(managerQs)
    .then((answers) => {

        managers.push(answers);

        if(answers.continue) {

            getManagerInformation();
        } else {

            //*generateManagerProfile(managers);
            const wantEngineer = wantNextRole('Engineer');

            if(wantEngineer) {
                getEngineerInforamtion();
            } else {

                const wantIntern = wantNextRole('Intern');

                if(wantIntern) {
                    getInternInformation();
                } else {
                    finishFile();
                }
            }
        }
    })
    .catch(console.error);
}

function getQuestions(position, objArr) {

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

    objArr.forEach((obj) => {questions.push(obj)});
    questions.push(getRepeatQ(position));

    return questions;
}

function getRepeatQ(position) {

    const repeatPrompt = {
        type: 'confirm',
        name: 'continue',
        message: `Would you like to add another ${position}?`,
    }

    return repeatPrompt;
}

function wantNextRole(position) {

    const rolePrompt = inquirer.createPromptModule();
            rolePrompt({
                type: 'confirm',
                name: 'continue',
                message: `Would you like to generate a profile for an ${position}?`
            })
            .then((answers) => {
                if(answers.continue) {
                    return true
                } else {
                    return false
                }
            });
}

init();