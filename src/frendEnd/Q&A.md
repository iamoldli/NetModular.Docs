# Q&A

### 1、更新包后运行起来不是最新的效果？

因为 node 有缓存机制，您可以在 node_modules 找到一个.cache 文件夹，有时候虽然包更新了，但是运行的时候走的旧的缓存，所以当更新包以后，推荐删除该文件夹，在 package.json 文件里面已经添加了对应的脚本命令

```json
 "scripts": {
    "cc": "rimraf node_modules/.cache",
 }
```

只需要执行`npm run cc`即可
