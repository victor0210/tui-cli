const fs = require('fs-extra')
const path = require('path');

function infoMerge(answers, projectDir) {
  return new Promise((reslove, reject) => {
    const packageJsonPath = path.resolve(projectDir, 'package.json')
    console.log(packageJsonPath)
    const packageJson = fs.readJsonSync(packageJsonPath)
    console.log(packageJson)
    fs.writeFile(packageJsonPath, JSON.stringify(Object.assign({}, packageJson, answers), null, 2)).then(err => {
      if(err) {
        reject(err)
      }
    })
  })
}

module.exports = infoMerge