var shx = require('shelljs')
var color = require('colors')

var installDependences = function (path, dirname) {
  console.log(color.yellow('install dependences...'))
  shx.exec('npm install', {silent: false})
  shx.cd('..')
  console.log(color.yellow('start project with: '))
  console.log(color.blue('cd '+ dirname), '&&', color.blue('npm run dev'))
}

module.exports = installDependences