const shx = require('shelljs')
const chalk = require('colors')

function installDependences (dirname) {
  console.log(chalk.yellow('start project with: '))
  console.log(chalk.blue(`cd ${dirname}`), '&&', chalk.blue('npm run dev'))
}

module.exports = installDependences