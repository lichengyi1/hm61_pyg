//汇总所有的路由
const express = require('express')
const router = express.Router()
const home = require('./controllers/home')
const account = require('./controllers/account')
const list = require('./controllers/list')
const item = require('./controllers/item')
const cart = require('./controllers/cart')

//首页展示
router.get('/', home.index)
//猜你喜欢接口
router.get('/like', home.like)

//列表页面
// url /list?id=100  req.query.id
// url /list/100     req.params.id
router.get('/list/:id(\\d+)', list.index)
router.get('/search', list.search)
//详情页面
router.get('/item/:id(\\d+)', item.index)

//购物车相关路由
router.get('/cart/add', cart.add)
router.get('/cart', cart.index)     //响应页面
router.get('/cart/list', cart.list)  //查询
router.post('/cart/edit', cart.edit)  //编辑
router.post('/cart/remove', cart.remove) //删除

//登录
router.get('/login', account.login)

module.exports = router