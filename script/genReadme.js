// addlicenseBadge checks the license and adds the badge
addLicenseBadge = (license) => {

    switch (license) {
        case "GNU GPL v2":
            return `![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)`;
            break;

        case "GNU GPL v3":
            return `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`;
            break;

        case "GNU LGPL v3":
            return `![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)`;
            break;

        case "MIT":
            return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
            break;

        default:
            return ``;
            break;
    }
}
// end of addLicenseBadge 

writeLicenseInfo = license => {
    if (license != "No License") {
        `## License Info
        License: ${license}`;
    } else {
        `## License Info
        No license used or offered`
    }
}
// end of writeLicenseinfo function



genReadme = data => {
    return `
    # ${data.title}
  
    ## Description
    ${data.description}
  
    ${checkToC()}
    
    ${checkInstallation(data.installation)}

    ${checkUsage(data.use)}
  
    ${checkCredits(data.credits)}
    
    ${checkLicense(data.license)}
  
    ## Installation
    ${data.installation}
  
    ## Usage
    ${data.use}
  
    ## Credits
    ${data.credits}

    ## License
    ${writeLicenseInfo(data.license)}
    ${addLicenseBadge(data.license)}
    
    ## How to Contribute
  
    Email me at: ${data.email}. 
    For my other projects: [${data.github}](https://github.com/${data.github}/).

    ## Tests
    ${data.tests} 
  `;
}
var toc = false;

// // checks if the user entered a value for installation
checkInstallation = check => {
    if (check == "") {
        return "";
    } else {
        return `* [Installation](#installation)`
        toc = true;
    }
};

// // checks if the user entered a value for usage
checkUsage = check => {
    if (check == "") {
        return "";
    } else {
        return `* [Use](#usage)`
        toc = true;
    }
};

// // checks if the user entered a value for credits
checkCredits = check => {
    if (check == "") {
        return "";
    } else {
        return `* [Credits](#credits)`
        toc = true;
    }
};

// // checks if the user entered a value for license
checkLicense = check => {
    if (check == "No License") {
        return "";
    } else {
        return `* [license] (#License)`
        toc = true;
    }
};

// // checks if the user entered any values for any of the Table of Content items and if they did 
// // it creates a Table of Contents if they didn't then it doesn't
checkToC = () => {
    if (toc) {
        return `## Table of Contents`;
    } else {
        return "";
    }
};

module.exports = genReadme;
