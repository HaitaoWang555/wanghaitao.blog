const { glob } = require('glob')
const path = require('path')
const fs = require('fs')

/**
 * [
    {
      "label": "wsl",
      "value": "/windows/wsl",
      "category": "windows",
      "tag": ["windows"]
    },
    {
      "label": "test",
      "value": "/windows/test",
      "category": "windows",
      "tag": ["windows", "test"]
    }
  ]
 */
let posts = []
const postsDataPath = 'src/assets/posts.json'

fs.readFile(postsDataPath, (err, data) => {
  if (err) throw err
  if (data.toString().length > 0) {
    posts = JSON.parse(data.toString())
  }
})

glob('src/pages/posts/**/*.{md,mdx}').then((res) => {
  if (res && res.length > 0) {
    res.forEach((i) => {
      // src\\pages\\posts\\mysql\\dml.md
      const pathArr = i.split(path.sep)
      // mysql
      const category = pathArr[pathArr.length - 2]
      // dml.md
      const file = pathArr[pathArr.length - 1]
      // dml
      const fileName = file.slice(0, file.lastIndexOf('.'))
      // /mysql/dml
      const value = fileName !== 'index' ? `/${category}/${fileName}` : `/${category}`

      if (posts.findIndex((item) => item.value === value) === -1) {
        posts.unshift({
          label: fileName,
          value: value,
          category: category,
          tag: [fileName],
        })
      }
    })
    fs.writeFile(postsDataPath, JSON.stringify(posts), (err) => {
      if (err) throw err
    })
  }
})
