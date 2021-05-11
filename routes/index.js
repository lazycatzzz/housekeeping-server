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
  // 生成订单
  app.post('/order/add', require('../actions/order/add'))
  // 订单列表
  app.get('/order/list/:uid', require('../actions/order/list'))
  // 获取全部人员
  app.get('/list/:intention', require('../actions/list/intention'))
  // 获取清洁
  app.get('/clean/:id', require('../actions/clean/clean'))
};
