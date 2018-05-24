const inquirer = require('inquirer')
const fs = require('fs-extra')
const path = require('path')
const chalk = require('chalk')

let targetDir

const validateDirExist = (projectName, program) => {
  targetDir = path.resolve(projectName)
  
  return new Promise(resolve => {
    if (fs.existsSync(targetDir)) {
      program.force ? removeDir(projectName, resolve) : deleteConfirmAction(projectName, resolve)
    } else {
      resolve()
    }
  })
}

const deleteConfirmAction = (projectName, resolve) => {
  inquirer.prompt([
    {
      name: 'deleteProject',
      type: 'confirm',
      message: `${projectName} folder already exists, delete it ?`
    }
  ])
    .then(({deleteProject}) => {
      deleteProject ? removeDir(projectName, resolve) : process.exit(1)
    })
}

const removeDir = (projectName, resolve) => {
  console.log(chalk.yellow(`Deleting the ${projectName} folder....`))
  fs.remove(targetDir, () => {
    resolve()
  })
}

module.exports = validateDirExist