// 路由集合
module.exports = app => {
  app.get('/list/normal', require('../actions/list/normal'))
  app.get('/list/older', require('../actions/list/older'))
  app.get('/list/child', require('../actions/list/child'))
  app.get('/detail/:id', require('../actions/detail'))
  // 加入我们接口
  app.post('/join', require('../actions/join'))
  // 加入候选
  app.post('/follow/add', require('../actions/follow/add'))
  // 候选列表
  app.get('/follow/list/:uid', require('../actions/follow/list'))
};
