const validate = require('validate-npm-package-name')
const chalk = require('chalk')

const validateProjectName = (projectName) => {
  const result = validate(projectName)
  
  if (!result.validForNewPackages) {
    console.error(chalk.red(`Invalid project name: "${projectName}"`))
    result.errors && result.errors.forEach(err => {
      console.error(chalk.red(err))
    })
    process.exit(1)
  }
}

module.exports = validateProjectName