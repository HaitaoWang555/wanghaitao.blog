const { glob } = require('glob')
const fs = require('fs-extra')
const path = require('path')

glob('src/pages/posts/**/images').then((res) => {
  if (res && res.length > 0) {
    res.forEach((i) => {
      const str = i.split(path.sep).slice(2).join(path.sep)
      fs.copySync(i, 'public' + path.sep + str)
    })
  }
})
