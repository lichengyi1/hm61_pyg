//汇总所有的路由
const express = require('express')
const router = express.Router()
const home = require('./controllers/home')
const account = require('./controllers/account')
const list = require('./controllers/list')

//首页展示
router.get('/', home.index)
//猜你喜欢接口
router.get('/like', home.like)

//列表页面
// url /list?id=100  req.query.id
// url /list/100     req.params.id
router.get('/list/:id(\\d+)',list.index)

//登录
router.get('/login', account.login)

module.exports = router