const Employee = require('./Employee');

class Enigneer extends Employee {

    constructor(name, id, email, github) {

        super(name,id,email);

        this.github = github;                // ? github username
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return "Engineer";
    }
}

module.exports = Enigneer;