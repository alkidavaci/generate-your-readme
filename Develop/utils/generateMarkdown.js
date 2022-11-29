//  Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "Apache") {
    return "[![License: AGPL v3]([![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0))";
  } else if (license === "GNU") {
    return "[![License: GPL v3]([![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0))";
  } else if (license === "IMB") {
    return "[![License: LGPL v3]([![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0))";
  } else if (license === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (license === "Mozilla") {
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
  } else if (license === "Open") {
    return "[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)";
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

function renderLicenseLink(license) {}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// Function to generate markdown for README
function generateMarkdown(data) {
  const{title, description, installation, usage, license,  contributing, tests, questions, username, email} = data
  

  return `# ${title}
   
  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Description
  🔍 ${description}

  ## Installation
  💾 ${installation}

  ## Usage
  💻 ${usage}

  ## License 
    ${renderLicenseBadge(license)}

  ## Contributing
  👪 ${contributing}

  ## Tests
  ✏️ ${tests}

  ## Questions
  ✋ ${questions}
  ✉️ Email me with any questions: [${email}](${email})
  Find me on GitHub: [${username}](https://github.com/${username})
  `;
}

module.exports = generateMarkdown;
