const fs = require('fs');



function generateManagerProfile(managers) {
    let managerProfile;

    managers.forEach(manager => {
        managerProfile = getManagerProfile(manager);
        let managerStr  = JSON.stringify(managerProfile,null,2);
        fs.appendFile('../dist/teamProfile.html', managerStr,(err) => {
            err ? console.error(err) : console.log("Manager profile sucessfully added!");
        })
    });

}



module.exports = generateTeamProfile;