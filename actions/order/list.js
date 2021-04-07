// 连接数据库
let dbconfig = require("../../modules/dbconfig");

module.exports = async function (req, res) {
  let sql = "select * from hkorder where uid = ?";
  let sqlArr = [req.params.uid];
  const data = await dbconfig.sySqlConnect(sql, sqlArr);
  if (!data) return res.sendResult(null, 200, "获取订单列表失败");
  return res.sendResult(data, 200, "获取订单列表成功");
};