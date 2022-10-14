const Employee = require('./Employee');

class Enigneer extends Employee {

    constructor(name, id, email, github, hubUrl) {

        super(name,id,email);

        this.github = github;               // ? github username
        this.hubUrl = hubUrl;              
    }

    getGithub() {
        return this.github;
    }

    getHubUrl() {
        return this.hubUrl;
    }

    getRole() {
        return "Engineer";
    }
}

module.exports = Enigneer;