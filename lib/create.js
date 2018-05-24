const chalk = require('chalk')

const validateProjectName = require('./validateProjectName')
const validateDirExist = require('./validateDirExist')
const cloneTemplate = require('./cloneTemplate')
const streamPipe = require('./streamPipe')
const infoMerge = require('./infoMerge')
const printUsageGuide = require('./printUsageGuide')

const create = async (projectName, program) => {
  process.stdout.write(process.platform === 'win32' ? '\x1Bc' : '\x1B[2J\x1B[3J\x1B[H')
  
  try {
    await validateProjectName(projectName)
    await validateDirExist(projectName, program)
    await cloneTemplate(projectName)
    const answers = await streamPipe()
    await infoMerge(answers, process.cwd())
    printUsageGuide(projectName)
  } catch (err) {
    console.log(chalk.red(err))
  }
  
}

module.exports = create