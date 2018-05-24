const inquirer = require('inquirer')
const config  = require('../config/streamChoicesConfig')

function inputStreamPipe () {
  return new Promise((resolve, reject) => {
    inquirer.prompt(config).then(answers => {
      resolve(answers)
    }).catch((error) => {
      reject(error)
    })
  })
}

module.exports = inputStreamPipe