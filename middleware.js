const config = require('./config')
//自定义中间件
exports.base = (req, res, next) => {
  //1. 设置头部信息
  res.locals.site = config.site
  //2.
  next()
}