var fs = require('fs');
var path = require('path');

var infoMerge = function (parmas, projectDir) {
  return new Promise(function (resolve, reject) {
    var filePath = path.resolve(projectDir, 'package.json')
    var defaultObj = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    fs.writeFile(filePath, JSON.stringify(Object.assign({}, defaultObj, parmas), null, 2), function(err) {
      if(err) {
        reject(err)
      }
      
      resolve()
    });
  })
}

module.exports = infoMerge