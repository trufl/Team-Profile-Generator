const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
//const {startFile, generateManagerProfile, generateEngineerProfile, generateInternProfile, finishFile} = require('./src/generateTeamProfile');

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
            getLineBreak();
            getManagerInformation();
        } else {
            console.clear();
            init();
        }
    });
}

function getManagerInformation() {
    //startFile();

    const managerQs = getQuestions("Manager",[{
        type: 'input',
        name: 'officeNum',
        message: `Please enter the Manager's office number:`
    }]);
    
    inquirer.prompt(managerQs)
    .then(async ({name, id, email, officeNum, runAgain}) => {

        const newManager = new Manager(name,id,email,officeNum)

        managers.push(newManager);

        if(runAgain) {

            getManagerInformation();
        } else {

            //*generateManagerProfile(managers);
            const wantEngineer = await wantNextRole('Engineer');

            if(wantEngineer) {
                getLineBreak();
                getEngineerInformation();
            } else {

                const wantIntern = await wantNextRole('Intern');

                if(wantIntern) {
                    getLineBreak();
                    getInternInformation();
                } else {
                    getLineBreak();
                    //finishFile();
                }
            }
        }
    })
    .catch(console.error);
}

function getEngineerInformation() {

    const engineerQs = getQuestions("Engineer",[{
        type: 'input',
        name: 'github',
        message: `Please enter the Engineers GitHub username:`
    }, {
        type: 'input',
        name: 'hubUrl',
        message: `Please enter the Engineers GitHub profile url:`
    }]);
    
    inquirer.prompt(engineerQs)
    .then(async ({name, id, email, github, hubUrl, runAgain}) => {

        const newEngineer = new Engineer(name, id, email, github, hubUrl);

        engineers.push(newEngineer);

        if(runAgain) {

            getEngineerInformation();
        } else {

            //*generateEngineerProfile(engineers);
            const wantIntern =  await wantNextRole('Intern');

            if(wantIntern) {
                getLineBreak();
                getInternInformation();
            } else {
                getLineBreak();
                //finishFile();
            }
        }
    })
    .catch(console.error);
}

function getInternInformation() {

    const internQs = getQuestions("Intern",[{
        type: 'input',
        name: 'school',
        message: `Please enter the school your Intern attends:`
    }]);
    
    inquirer.prompt(internQs)
    .then(({name, id, email, school, runAgain}) => {

        const newIntern = new Intern(name, id, email, school);

        interns.push(newIntern);

        if(runAgain) {
            getInternInformation();
        } else {
            getLineBreak();
            //*generateInternProfile(interns);
        }
    })
    .catch(console.error);
}

function getQuestions(position, promptArr) {

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

    promptArr.forEach((prompt) => {questions.push(prompt)});
    questions.push({
        type: 'confirm',
        name: 'runAgain',
        message: `Would you like to add another ${position}?`,
    });

    return questions;
}

function wantNextRole(position) {

    const rolePrompt = inquirer.createPromptModule();
    return new Promise((resolve) => { 
        rolePrompt({
        type: 'confirm',
        name: 'wantNext',
        message: `Would you like to generate a profile for an ${position}?`
        })
        .then((answers) => {
            if(answers.wantNext) {
                resolve(true);
            } else {
                resolve(false);
            }
        })
    });
}

function getLineBreak() {
    console.log('=============================================================\n');
}

init();