//  Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "Apache") {
    return `[![License: AGPL v3](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  } else if (license === "GNU") {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
  } else if (license === "IMB") {
    return `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`;
  } else if (license === "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  } else if (license === "Mozilla") {
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
  } else if (license === "Open") {
    return `[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)`;
  } else {
    return "";
  }
}


// Function to generate markdown for README
function generateMarkdown(data) {
  const{title, description, installation, usage, license,  contributing, tests, questions, username, email} = data
  // Add on table of content only if is an input for installation, usage, contributions and test
  let tabOfCont = `- [Description](#description)`;

  if (installation !== '') { 
    tabOfCont += `
  - [Installation](#installation)` };

  if (usage !== '') {
    tabOfCont += `
  - [Usage](#usage)`};

  if (contributing !== '') { 
    tabOfCont += `
  - [Contributing](#contributing)`};

  if (tests !== '') { tabOfCont += `
  - [Tests](#tests)` };
  
  if (questions !== '') { tabOfCont += `
  - [Questions](#Questions)
  ` }else{
    tabOfCont += `
  - [Contact](#Contact)`};

  // Add on readme template only if is an input for installation, usage, contributions and test
    let installationAdd=''
    let usageAdd=''
    let contributingAdd=''
    let testAdd=''
    let questionAdd=''

  if (installation !== '') { 
    installationAdd += `
  ## Installation
  💾 ${installation}
    ` };

  if (usage !== '') {
    usageAdd += `
  ## Usage
  💻 ${usage}
    `};

  if (contributing !== '') { 
    contributingAdd += `
  ## Contributing
  👪 ${contributing}
    `};

  if (tests !== '') { 
    testAdd += `
  ## Tests
  ✏️ ${tests}
  ` };

  if (questions !== '') { 
    questionAdd += `
  ## Questions
  ✋ ${questions}<br>
  `}
  else {
    questionAdd += `
  ## Contact
  `};

// return readme template
  return `# ${title}
   
  ## Table of Contents
  ${tabOfCont}

  ## Description
  🔍 ${description}

  ${installationAdd}

  ${usageAdd}

  ## License 
  ${renderLicenseBadge(license)}
    
  ${contributingAdd}

  ${testAdd}
  ${questionAdd}
  ✉️ Email me with any questions: [${email}](${email})<br>
  :octocat: Find me on GitHub: [${username}](https://github.com/${username})
  `;
 }

module.exports = generateMarkdown;
