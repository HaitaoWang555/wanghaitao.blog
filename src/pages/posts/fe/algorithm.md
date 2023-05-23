
```js
// 查找树节点 

function findPathById(tree, id, path) {
  // 第一层把 path 定为 []
  if (!path) {
    path = []
  }
  // 对 传入的 tree 进行循环 
  for (let index = 0; index < tree.length; index++) {
    const element = tree[index];
    // 存储已经找到的路径
    const tempPath = [...path]
    tempPath.push(element.id)
    // 在循环中找到与传入ID相同的 便 返回已经记录的 路径
    if (element.id === id) {
      return tempPath
    }
    // 如果 此节点下有 子节点 便进行递归查找
    if (element.children && element.children.length > 0) {
      let result = findPathById(element.children, id, tempPath)
      if (result) return result
    }
  }
}
```

