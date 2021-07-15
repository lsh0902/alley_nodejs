const fs = require('fs');
const path = require('path');
const os = require('os');
targetDir = process.argv[2];

fs.promises
  .readdir(targetDir)
  .then(res => {
    res.forEach(file => {
      middleDir = getMiddleDir(file);

      if(!middleDir) return;
      !fs.existsSync(path.join(targetDir, middleDir)) && fs.mkdirSync(path.join(targetDir,middleDir))
      fs.rename(path.join(targetDir, parsed.base), path.join(targetDir,middleDir, parsed.base), (error, data) =>{console.log(error, data)})
    })
  }).catch(console.log);

function getMiddleDir(file) {
  const parsed = path.parse(file);
  if('.jpg' === parsed.ext && parsed.name.includes('E'))  return 'duplicated'
  else if(['.aae', '.png'].includes(parsed.ext))          return 'captured'
  else if(['.mov','.mp4'].includes(parsed.ext))           return 'video'
  else return; 
}











