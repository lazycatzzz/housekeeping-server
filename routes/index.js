// 路由集合
module.exports = app => {
  app.get('/test', require('../actions/test'))
};
