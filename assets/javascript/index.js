const inquirer = require('inquirer');
const fs = require('fs');

// Sample README.md inputs
const generateREADME = (answers) =>
`# ${answers.title}

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [tests](#tests)
- [Questions](#questions)

## Description
${answers.description}

## Installation
${answers.installation}

## Usage 
${answers.usage}

## License
My project uses the ${answers.license}

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## Questions
If you have any questions about my project, visit my [GitHub](https://github.com/${answers.github}) 
or email me using: ${answers.email}`;

// Prompts that will be asked
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
        type: 'checkbox',
        name: 'license',
        message: 'What is the license used for your project?',
        choices: [
            'MIT License',
            'Apache License 2.0',
            'Mozilla Public License 2.0',
            'Boost Aoftware License 1.0',
        ],
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
// function using .writeFile to create README.md file
.then((answers) => {
    const pageContent = generateREADME(answers);

    fs.writeFile('README.md', pageContent, (err) =>
        err ? console.log(err) : console.log('Successfully created professional README.md page!')
    );
});