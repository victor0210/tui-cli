const shx = require('shelljs')
const fs = require('fs-extra')
const chalk = require('chalk')
const templatePath = 'https://github.com/Bennnis/tui-temp.git'

function cloneTemplate (projectName) {
  return new Promise((resolve, reject) => {
    console.log(chalk.yellow('template downloading...'))
    if (!shx.which('git')) {
      console.log(chalk.red('Sorry, this script requires git'));
      process.exit(1);
    }
    if (shx.exec(`git clone ${templatePath} ${projectName}`, {silent: true}).code === 0) {
      shx.cd(projectName)
      fs.remove('.git')
      resolve()
    } else {
      reject('error in clone template, please check network')
    }
  })
}

module.exports = cloneTemplate