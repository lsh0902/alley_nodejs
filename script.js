const fs = require('fs');
const path = require('path');
targetDir = process.argv[2];

fs.promises.readdir(targetDir)
  .then(res => {
    res.forEach(file => {
      const parsed = path.parse(file);
        if('.jpg' === parsed.ext && parsed.name.includes('E'))  middleDir = 'duplicated'
        else if(['.aae', '.png'].includes(parsed.ext))          middleDir = 'captured'
        else if(['.mov','.mp4'].includes(parsed.ext))           middleDir = 'video'

        if(!fs.existsSync(path.join(targetDir, middleDir))) fs.mkdirSync(path.join(targetDir,middleDir))
        fs.rename(path.join(targetDir, parsed.base), path.join(targetDir,middleDir, parsed.base), (error, data) =>{console.log(error, data)})
      })
    }).catch(console.log);
