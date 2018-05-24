const path = require('path')
const chalk = require('chalk')
const inquirer = require('inquirer')
const fs = require('fs-extra')
const validateProjectName = require('validate-npm-package-name')
const cloneTemplate = require('./cloneTemplate')
const streamPipe = require('./streamPipe')
const inforMerge = require('./infoMerge')
async function create (projectName, program) {
  const targetDir = path.resolve(projectName)
  // 进行包名的合法性证,并输出错误提示
  const result = validateProjectName(projectName)
  if (!result.validForNewPackages) {
    console.error(chalk.red(`Invalid project name: "${projectName}"`))
    result.errors && result.errors.forEach(err => {
      console.error(chalk.red(err))
    })
    process.exit(1)
  }
  if (fs.existsSync(targetDir)) {
    if (program.force) {
      console.log(chalk.yellow(`Deleting the ${projectName} folder....`))
      await fs.remove(targetDir)
    } else {
      const { deleteProject } = await inquirer.prompt([
        {
          name: 'deleteProject',
          type: 'confirm',
          message: `${projectName} folder already exists, delete it ?`
        }
      ])
      if (deleteProject) {
        console.log(chalk.yellow(`Deleting the ${projectName} folder....`))
        await fs.remove(targetDir)
      } else {
        process.exit(1)
      }
    }
  }
  process.stdout.write(process.platform === 'win32' ? '\x1Bc' : '\x1B[2J\x1B[3J\x1B[H')
  try {
    await cloneTemplate(projectName)
    const answer = await streamPipe()
    await inforMerge(answer, process.cwd())
  } catch (err) {
    console.log(chalk.red(err))
  }
  
}

module.exports = create