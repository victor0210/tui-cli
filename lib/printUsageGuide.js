const chalk = require('colors')

function printUsageGuide (dirname) {
  console.log(
    chalk.yellow(`start project with:\n`),
    chalk.blue(`1: cd ${dirname}\n`),
    chalk.blue(`2: "npm install" or "cnpm install" or "yarn add"\n`),
    chalk.blue('3: npm run dev\n')
  )
}

module.exports = printUsageGuide