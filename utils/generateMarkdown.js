// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
    switch (license) {
      case "MIT":
        return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]";
      case "Apache 2.0":
        return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]";
      case "Boost":
        return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]";
      case "BSD 3-Clause License":
        return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]";
      case "BSD 2-Clause License":
        return "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)]";
      default:
        return "";
    }
  } else {
    return "";
  }
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license) {
    switch (license) {
      case "MIT":
        return "(https://opensource.org/licenses/MIT)";
      case "Apache 2.0":
        return "(https://opensource.org/licenses/Apache-2.0)";
      case "Boost":
        return "(https://www.boost.org/LICENSE_1_0.txt)";
      case "BSD 3-Clause License":
        return "(https://opensource.org/licenses/BSD-3-Clause)";
      case "BSD 2-Clause License":
        return "(https://opensource.org/licenses/BSD-2-Clause)";
      default:
        return "";
    }
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const badge = renderLicenseBadge(license);
  const link = renderLicenseLink(license);

  if (badge && link) {
    return "## License ## License\n${badge}${link}";
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description 
  ${data.description}
  ## Insalation 
  ${data.insallation}
  ## Usage 
  ${data.usage}
  ## Credits 
  ${data.credits}
`;
}

module.exports = generateMarkdown;
