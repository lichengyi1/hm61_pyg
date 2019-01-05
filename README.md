### 同学们的问题

##### 1.用node做中间层相比于传统的直接从后台直接从后台拿数据，最主要的特点是什么？
a. node是异步的性能好一些 
b. 不需要处理跨域 
c. 组织后台返回的数据  降低客户端业务逻辑复杂度

##### 2.MVC具体指什么
是开发思想，软件开发中的分层思想。高内聚低耦合。
m 数据模型 （操作接口）
v 视图  （模版 页面输出）
c 控制器 （路由）

##### 3.promise对象不应该先new出来一个实例对象再.then吗？
```javascript
    //只有promise对象才会有 then catch
    function get(){
      return new Promise()
    }
    
```

##### 4.在public 文件中放入favicon.ico,在app里不配置app.use(favicon(path.join(__dirname, './public/favicon.ico')))，网页也能显示图标字体，是浏览器的原因吗？

因为你的静态公开的文件是 public 且访问静态资源的路径是没有设置前缀
浏览器自己发送一个获取网站图标的请求 ‘/favicon.ico’ 

##### 5. 实际生产环境中是否需要将日志记录在日志文件夹里?查看文档发现以下几句代码?具体是什么意思呢? var accessLogStream = fs.createWriteStream(__dirname + '/access.log', {flags: 'a'}); app.use(logger('combined', {stream: accessLogStream}));
输出日志操作 保存文件当中

##### 6. 生产环境和开发环境的配置能再说一下吗，不太懂
1. 怎么区分  通过临时的环境变量 
2. SET NODE_ENV=development 开发
3. SET NODE_ENV=production 生产
4. 只能在windows系统使用
5. 使用了 cross-env 命令行工具来运行
6. 在package.json有一个配置项 scripts 执行脚本
7. 快速启动项目   
"dev": "cross-env NODE_ENV=development nodemon app.js",
"start": "cross-env NODE_ENV=production nodemon app.js"
8. 获取nodejs的临时环境变量
```javascript
    //1. 
    req.app.get('env')
    //2.  process node内置的进程对象 env 环境变量
    process.env.NODE_ENV
```

##### 7. 错误处理再讲一下没听明白

1. 404 处理
在所有的中间件 路由执行过后 加上
自己去生成一个错误对象  传递给下一个中间件

2. 同意错误处理中间件
// app.use(err,req,res,next)
// 生成环境  404 500 页面
// 开发环境  响应详细的错误信息  使用 youch 的错误信息页面生成组件

##### 



