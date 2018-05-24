const fs = require('fs-extra')
const path = require('path');

function infoMerge(answers, projectDir) {
  return new Promise((resolve, reject) => {
    const packageJsonPath = path.resolve(projectDir, 'package.json')
    const packageJson = fs.readJsonSync(packageJsonPath)
    fs.writeFile(packageJsonPath, JSON.stringify(Object.assign({}, packageJson, answers), null, 2)).then(err => {
      if(err) {
        reject(err)
      }
      resolve()
    })
  })
}

module.exports = infoMerge