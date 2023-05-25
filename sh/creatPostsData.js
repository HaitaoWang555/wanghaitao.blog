const { glob } = require('glob')
const path = require('path')
const fs = require('fs')

let posts = []
let tags = []
let categories = []
const postsDataPath = 'src/assets/posts.json'
const tagsDataPath = 'src/assets/tags.json'
const categoriesDataPath = 'src/assets/categories.json'

function generateTag(tagVal) {
  if (tags.findIndex((item) => item.value === tagVal) === -1) {
    tags.push({
      label: tagVal,
      value: tagVal,
    })
  }
}

function generateCategory(categoryVal) {
  if (categories.findIndex((item) => item.value === categoryVal) === -1) {
    categories.push({
      label: categoryVal,
      value: categoryVal,
    })
  }
}

function formatPostsData() {
  posts.forEach((p) => {
    if (p.category && p.category.value) {
      p.category = categories.find((i) => i.value === p.category.value)
    }
    if (p.tag) {
      p.tag = p.tag.map((t) => {
        return tags.find((i) => i.value === t.value)
      })
    }
  })
}

function readFile(pathVal, type) {
  return new Promise((resolve, reject) => {
    fs.readFile(pathVal, (err, data) => {
      if (err) {
        reject(err)
        throw err
      }
      if (data.toString().length > 0) {
        switch (type) {
          case 'posts':
            posts = JSON.parse(data.toString())
            break
          case 'tags':
            tags = JSON.parse(data.toString())
            break
          case 'categories':
            categories = JSON.parse(data.toString())
            break

          default:
            break
        }
        resolve(true)
      }
    })
  })
}

function generate() {
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

        generateTag(fileName)
        generateCategory(category)

        if (posts.findIndex((item) => item.value === value) === -1) {
          posts.unshift({
            label: fileName,
            value: value,
            category: {
              label: category,
              value: category,
            },
            tag: [{ label: fileName, value: fileName }],
          })
        }
      })

      formatPostsData()

      fs.writeFile(tagsDataPath, JSON.stringify(tags), (err) => {
        if (err) throw err
      })
      fs.writeFile(categoriesDataPath, JSON.stringify(categories), (err) => {
        if (err) throw err
      })
      fs.writeFile(postsDataPath, JSON.stringify(posts), (err) => {
        if (err) throw err
      })
    }
  })
}

Promise.all([
  readFile(postsDataPath, 'posts'),
  readFile(tagsDataPath, 'tags'),
  readFile(categoriesDataPath, 'categories'),
]).then((res) => {
  generate()
})
