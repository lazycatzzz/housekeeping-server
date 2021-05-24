// 添加统一的返回结果方法
module.exports = function (req, res, next) {
  res.sendResult = function (data, code, message) {
    let fmt = req.query.fmt ? req.query.fmt : "rest";
    if (fmt == "rest") {
      res.json({
        data: data,
        meta: {
          msg: message,
          status: code,
        },
      });
    }
  };
  // 模拟真实线上环境
  setTimeout(() => {
    next();
  }, 1000);
};
