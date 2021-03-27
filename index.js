// constants
const inquirer = require('inquirer');
const fs = require("fs");
const genReadMe = require("./script/genReadme");

// writeReadme function writes the readme
function writeReadme(fileName, data) {

    fs.writeFile(fileName, data, (error) => {
        if (error) {
            return console.log(Error);
        } else {
            console.log("good to go");
        }
    });
}
// end of writeReadme function

// init function gets everything started
let init = () => {

    inquirer
        .prompt([
            // # <Your-Project-Title>
            {
                type: "input",
                name: "title",
                message: "title: "
            },
            {
                type: "input",
                name: "github",
                message: "github username :"
            },
            {
                type: "input",
                name: "email",
                message: "email :"
            },
            {
                type: "input",
                name: "description",
                message: "description (often psudocode):"
            },
            {
                type: "input",
                name: "installation",
                message: "instillation: "
            },
            {
                type: "input",
                name: "use",
                message: "usage: "
            },
            {
                type: "input",
                name: "credits",
                message: "credits: "
            },
            {
                type: "input",
                name: "testing",
                message: "testing: "
            },
            {
                type: "list",
                name: "license",
                message: "license: ",
                choices: ["No License", "GNU GPL v2", "GNU GPL v3", "GNU LGPL v3", "MIT"]
            },
        ]).then(function (response) {
            const data = genReadMe(response);

            writeReadme("newreadme.md", data);
        })

}
// end of init function

init();
