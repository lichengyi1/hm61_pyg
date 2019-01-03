const homeModel = require('../models/home')
exports.index = (req, res, next) => {
  //首页的业务
  //1. 轮播图信息
  homeModel.getSlider()
    .then(data => {
      res.locals.sliders = data
      res.render('home.art')
    })
    .catch(err => next(err))
}