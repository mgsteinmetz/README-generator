const inquirer = require('inquirer');
const fs = require('fs');

const generateHTML = (answers) =>
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <link rel="stylesheet" href="./assets/css/style.css">
    <title>Professional README.md</title>
</head>
<body>
    <header>
        <h1># ${answers.title} </h1>
    </header>
    <main>
        <div>
        <p>## Table of Contents</p>
        <ul>
            <li><a href="#">Description</a></li>
            <li><a href="#">Installation</a></li>
            <li><a href="#">Usage</a></li>
            <li><a href="#">License</a></li>
            <li><a href="#">Contributing</a></li>
            <li><a href="#">Usage</a></li>
            <li><a href="#">Questions</a></li>
        </ul>
        </div>
        <div>
            <p>## Description</p>
            <p>${answers.description}</p>
        </div>
        <div>
            <p>## Installation</p>
            <p>${answers.installation}</p>
        </div>
        <div>
            <p>## Usage</p>
            <p>${answers.usage}</p>
        </div>
        <div>
            <p>## License</p>
            <p>${answers.license}</p>
        </div>
        <div>
            <p>## Contributing</p>
            <p>${answers.contributing}</p>
        </div>
        <div>
            <p>## Tests</p>
            <p>${answers.tests}</p>
        </div>
        <div>
        <p>## Questions</p>
        <p> If you have any questions about my project you can contact me using the following!</p>
        <ul>
            <li><a href="https://github.com/${answers.github}" target="blank">github</a></li>
            <li>${answers.email}</li>
        </ul>
        </div>
    </main>
</body>
</html>`;

inquirer
.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description of your project?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How does a user install your project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How will a user USE your project?',
    },
    {
        type: 'input',
        name: 'license',
        message: 'What is the license used for your project?',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What are the contribution guidlines for your project?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What are the test instructions for your project?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your gitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },

])
.then((answers) => {
    const htmlPageContent = generateHTML(answers);

    fs.writeFile('index.html', htmlPageContent, (err) =>
        err ? console.log(err) : console.log('Successfully created professional README.md page!')
    );
});