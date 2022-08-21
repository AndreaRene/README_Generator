// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  switch (someWord) {
    case "MIT":
      return
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Badges

![](https://img.shields.io/badge/license-${data.license}-ff69b4)
  
## Description
  
${data.description}
  
## Contents
  
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Credits](#credits)
- [License](#license)
- [Questions](#questions)
  
## Installation
  
${data.install}
  
## Usage
  
${data.usage}
  
## Contributing
  
${data.contribute}
  
## Tests
  
${data.tests}
  
## Credits
  
### Colaborators
${data.colaborators}
  
### Attributed 
${data.attributions}
  
${data.tutorials}
  
## License
  
${data.license}
  
## Questions

If you have any questions, feel free to reach out:

[${data.github}](https://github.com/${data.github})
- [${data.email}](mailto:${data.email}?subject=[GitHub]%20README.md%20Generator%20Question)
`;
}

module.exports = generateMarkdown;
