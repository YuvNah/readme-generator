// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
    switch (license) {
      case "MIT":
        return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)] (https://opensource.org/licenses/MIT)";
      case "Apache 2.0":
        return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)] (https://opensource.org/licenses/Apache-2.0)";
      case "Boost":
        return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)] (https://www.boost.org/LICENSE_1_0.txt)";
      case "BSD 3-Clause License":
        return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)] (https://opensource.org/licenses/BSD-3-Clause)";
      case "BSD 2-Clause License":
        return "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)] (https://opensource.org/licenses/BSD-2-Clause)";
      default:
        return "";
    }
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description 
  ${data.description}
  ## Installation 
  ${data.installation}
  ## Usage 
  ${data.usage}
  ## Credits 
  ${data.credit}
  ## License
  
 ${renderLicenseBadge(data.license)}
`;
}

module.exports = generateMarkdown;
