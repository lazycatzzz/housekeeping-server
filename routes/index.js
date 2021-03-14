// 路由集合
module.exports = app => {
  app.get('/list/normal', require('../actions/list/normal'))
  app.get('/list/older', require('../actions/list/older'))
  app.get('/list/child', require('../actions/list/child'))
  app.get('/detail/:id', require('../actions/detail'))
  app.post('/join', require('../actions/join'))
};
