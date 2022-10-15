const fs = require('fs');
const {startHtmlFile, closeHtmlFile} = require('./open-close-HTML');

const startFile = () => startHtmlFile();

const generateManagerProfile = (managers) => {
    const profileArr = [];

    const start = `
        <section id="manager-section" class="flex sm:flex-col md:flex-row flex-wrap justify-center">`;

    profileArr.push(start);

    managers.forEach(manager => {
        const position = manager.getRole();
        const managerProfile = getManagerProfile(manager,position);

        profileArr.push(managerProfile);
    });

    const end = `
        </section>`;

    profileArr.push(end);

    const profileStr = profileArr.join(`
`);

    fs.appendFile('./dist/team-profile.html', profileStr,(err) => {
        if(err){ console.error(err)}
    });
}

const generateEngineerProfile = (engineers) => {
    const profileArr = [];

    const start = `
        <section id="engineer-section" class="flex sm:flex-col md:flex-row flex-wrap justify-center">`;

    profileArr.push(start);

    engineers.forEach(engineer => {
        const position = engineer.getRole();
        const engineerProfile = getEngineerProfile(engineer, position);
        
        profileArr.push(engineerProfile);
    });

    const end = `
        </section>`;

    profileArr.push(end);

    const profileStr = profileArr.join(`
`);

    fs.appendFile('./dist/team-profile.html', profileStr,(err) => {
        if(err){ console.error(err)}
    });
}

const generateInternProfile = (interns) => {
    const profileArr = [];

    const start = `
        <section id="intern-section" class="flex sm:flex-col md:flex-row flex-wrap justify-center">`;

    profileArr.push(start);

    interns.forEach(intern => {
        const position = intern.getRole();
        const internProfile = getInternProfile(intern, position);
        
        profileArr.push(internProfile);
    });

    const end = `
        </section>`;

    profileArr.push(end);

    const profileStr = profileArr.join(`
`);

    fs.appendFile('./dist/team-profile.html', profileStr,(err) => {
        if(err){ console.error(err)}
    });
}

const getManagerProfile = ({name, id, email, officeNumber}, position) => {
    const profile = 
    `
            <div id="manager-card" class="sm:mb-6 md:mb-6 mx-4 sm:basis-full md:basis-1/2 lg:basis-1/5 border-2 border-emerald-500 rounded-lg">
                <div id="manager-card-header" class="bg-emerald-500 p-3 mb-3 text-white text-2xl">
                    <h2>
                        ${name}
                    </h2>
                    <h2>
                        ☕ ${position}
                    </h2>
                </div>
                <div id="manager-card-body">
                    <ul class="mx-4 mb-5 text-lg text-white">
                        <li class="bg-emerald-500 border-1 border-white rounded p-4 mb-0.5">ID: ${id}</li>
                        <li class="bg-emerald-500 border-1 border-white rounded p-4 mb-0.5">Email: <a class="text-yellow-300 hover:text-white" href="mailto:${email}">${email}</a></li>
                        <li class="bg-emerald-500 border-1 border-white rounded p-4 mb-0.5">Office Number: ${officeNumber}</li>
                    </ul>
                </div>
            </div>`;

    return profile;
}

const getEngineerProfile = ({name, id, email, github, hubUrl}, position) => {
    const profile = 
    `
            <div id="engineer-card" class="sm:mb-6 md:mb-6 mx-4 sm:basis-full md:basis-1/2 lg:basis-1/5 border-2 border-emerald-500 rounded-lg">
                <div id="engineer-card-header" class="bg-emerald-500 p-3 mb-3 text-white text-2xl">
                    <h2>
                        ${name}
                    </h2>
                    <h2>
                        🤓 ${position}
                    </h2>
                </div>
                <div id="engineer-card-body">
                    <ul class="mx-4 mb-5 text-lg text-white">
                        <li class="bg-emerald-500 border-1 border-white rounded p-4 mb-0.5">ID: ${id}</li>
                        <li class="bg-emerald-500 border-1 border-white rounded p-4 mb-0.5">Email: <a class="text-yellow-300 hover:text-white" href="mailto:${email}">${email}</a></li>
                        <li class="bg-emerald-500 border-1 border-white rounded p-4 mb-0.5">GitHub: <a class="text-yellow-300 hover:text-white" target="_blank" href="${hubUrl}">${github}</a></li>
                    </ul>
                </div>
            </div>`;

    return profile;
}

const getInternProfile = ({name, id, email, school}, position) => {
    const profile = 
    `
            <div id="intern-card" class="sm:mb-6 md:mb-6 mx-4 sm:basis-full md:basis-1/2 lg:basis-1/5 border-2 border-emerald-500 rounded-lg">
                <div id="intern-card-header" class="bg-emerald-500 p-3 mb-3 text-white text-2xl">
                    <h2>
                        ${name}
                    </h2>
                    <h2>
                        📚 ${position}
                    </h2>
                </div>
                <div id="intern-card-body">
                    <ul class="mx-4 mb-5 text-lg text-white">
                        <li class="bg-emerald-500 border-1 border-white rounded p-4 mb-0.5">ID: ${id}</li>
                        <li class="bg-emerald-500 border-1 border-white rounded p-4 mb-0.5">Email: <a class="text-yellow-300 hover:text-white" href="mailto:${email}">${email}</a></li>
                        <li class="bg-emerald-500 border-1 border-white rounded p-4 mb-0.5">School: ${school}</li>
                    </ul>
                </div>
            </div>`;

    return profile;
}

const finishFile = () => closeHtmlFile();

module.exports = {
    startFile,
    generateManagerProfile,
    generateEngineerProfile,
    generateInternProfile,
    finishFile,
};