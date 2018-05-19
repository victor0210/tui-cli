var shx = require('shelljs')
var color = require('colors')

var templatePath = 'https://github.com/Bennnis/tui-temp.git'

var cloneTemplate = function (dirname) {
  return new Promise(function (resolve, reject) {
    console.log(color.yellow('template downloading...'))
    if (shx.exec('git clone ' + templatePath + ' ' + dirname, {silent: true}).code === 0) { //success
      shx.cd(dirname)
      shx.cd('rm -rf .git')
      resolve()
    } else {
      reject('error in clone template, please check network')
    }
  })
}

module.exports = cloneTemplate