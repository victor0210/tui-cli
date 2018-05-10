var inquirer = require('inquirer')
var config  = require('./streamChoicesConfig')

var inputStreamPipe = function () {
  return new Promise(function (resolve, reject) {
    inquirer.prompt(config).then(function (answers) {
      resolve(answers)
    }).catch(function () {
      reject(new Error('error in choose template'))
    })
  })
}

module.exports = inputStreamPipe