var shx = require('shelljs')
var color = require('colors')

var installDependencies = function (path, dirname) {
  console.log(color.yellow('install dependencies...'))
  
  shx.cd(dirname)
  shx.exec('npm install', {silent: false})
  shx.exec('rm -rf .git')
  
  console.log(color.yellow('start project with: '))
  console.log(color.blue('cd '+ dirname), '&&', color.blue('npm run dev'))
}

module.exports = installDependencies