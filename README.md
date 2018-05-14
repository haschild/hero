### 实现当前 hero 项目一些不明确的只是点都会记录在里面




#### 不明确的地方
* package.json 属性 dependencies 和 devDependencies 导入依赖包的区别
[参考博客](https://blog.csdn.net/feiying008/article/details/53033704) 这里有说明： dependencies 是项目运行必须的包，而 devDenpendencies 是项目开发环境会需要的包。你在dependencies 导入依赖就可以了。

* 引入外部依赖包
1. 在 package.json 的 dependencies 添加依赖类,然后执行 cpm install
    或者是直接执行 cpm install [name] --save 或 cpm install [name] --save-dev
2. 在 .angular-cli.json 将外部的包路径写进对应的属性里
   ```
   // 导入bootstrap.min.css
   "styles": [
            "styles.css",
            "../node_modules/_bootstrap@4.1.1@bootstrap/dist/css/bootstrap.min.css"
        ],
   // 注意bootstrap这里加了版本号
   ```
* @Injectable 注解的服务
1. 服务是可以缓存数据的，一个服务是可以更改另一个服务保存的值
2. 在 construction 中声明服务，如果是 public 类型可以直接被 HTML 引用值
* 在 ts 文件中声明外部常量 const 可以直接在 import 下 声明。
* 在使用 routerLink注意
1.  最好是在路径前 + ‘/’，eg：routerLink='/detail'。如果是在根目录下，可以默认匹配，有路由嵌套的时候就访问不到。

* string to number :js 中 +string = number 这个我还真没注意到。    
* npm clean : 可以刷新 \mode_modules\里的包
* 出错 ERROR in Error:Metadata version mismatch for module,found version 4, expected 3
1. 第一感觉就是傻眼，昨天代码都是好好的，今天就出现问题了。上网查看了下，[参考操作](http://www.yayihouse.com/yayishuwu/chapter/1049)结果也没办法。尝试执行 git stash ——> git stash pop 。因为代码我仅仅是在本地更改过,并没有git add, 之后就解决了。
2. 更改它提示解析失败的文件（增加空格）
* 使用 npm 下载依赖包
1. 下载最新的包 eg: cnpm install bootstrap
2. 下载特定版本的包 eg: cnpm install bootstrap@3 (3版本最新包)  或 cnpm install bootstrap@3.1.1

* typeScript => 函数的介绍
1. () => {}  ：这是标准的模式，{} 里可以写多个执行语句
2.  => 前后都没有的， 前面是参数，后面只能跟一个执行语句
#### 知识点介绍

* 结构型指令：这些指令都是运用在 HTML 页面中，并且都带 “*” 因为要更改页面结构；用驼峰法书写；两个结构型指令不能同时作用一个 HTML 元素不然 angular 不知道采用哪个指令。
* 双向数据绑定：[(ngModel)]='' 必须在 input 元素中使用才有效果
* 单项数据绑定，更改 HTML 元素的属性和内容
1.  {{}} ： 获取 component 中的值
2. []: 结合 @Input() 可以在 HTML 中接收参数（父组件传递参数给子组件）；还可以绑定 class 值

* 事件绑定
1. ():  里面也可以写自定义的事件名称。

* 异步数据获取用 Observable
* angular 模拟数据
1. 会用到内存 Web API（In-memory Web API）
    1. npm install angular-in-memory-web-api --save   安装
    2. 导入类： 
    import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
    import { InMemoryDataService }  from './in-memory-data.service';
2. HttpClient 发送请求
* NgModule 
    1. 那些属于这个 NgModule 的组件会共享同一个编译上下文环境。可以知道变量共享的作用域

#### http 请求数据
* HttpClient.get 默认情况下把响应体当做无类型的 JSON 对象进行返回。
* 所有的 HttpClient 方法都会返回某个值的 RxJS Observable。
* 通常，Observable 可以在一段时间内返回多个值。 但来自 HttpClient 的 Observable 总是发出一个值，然后结束，再也不会发出其它值。

#### http 错误处理
* 使用 RxJS 的 catchError() 操作符来建立对 Observable 结果的处理管道（pipe）。

#### 谨记
* 下载的依赖包也不要太新，出现莫名奇妙的错误。
* git merge [branchname] 之后需要 git push 下。不然代码是不会上传到 origin







