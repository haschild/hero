### 实现当前 hero 项目一些不明确的只是点都会记录在里面




#### 不明确的地方
* package.json 属性 dependencies 和 devDependencies 导入依赖包的区别
[参考博客](https://blog.csdn.net/feiying008/article/details/53033704) 这里有说明： dependencies 是项目运行必须的包，而 devDenpendencies 是项目开发环境会需要的包。你在dependencies 导入依赖就可以了。

* 引入外部依赖包
1、 在 package.json 的 dependencies 添加依赖类,然后执行 cpm install
    或者是直接执行 cpm install [name] --save 或 cpm install [name] --save-dev
2、在 .angular-cli.json 将外部的包路径写进对应的属性里
   ```
   // 导入bootstrap.min.css
   "styles": [
            "styles.css",
            "../node_modules/_bootstrap@4.1.1@bootstrap/dist/css/bootstrap.min.css"
        ],
   // 注意bootstrap这里加了版本号
   ```






