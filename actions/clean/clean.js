// 连接数据库
let dbconfig = require("../../modules/dbconfig");

module.exports = async function (req, res) {
  console.log(req)
  console.log(req.params.id)
  let sql = "select * from clean where id = ?";
  let sqlArr = [req.params.id];
  const data = await dbconfig.sySqlConnect(sql, sqlArr);
  if (!data) return res.sendResult(null, 400, "获取清洁数据失败");
  console.log(data)
  return res.sendResult(data, 200, "获取清洁数据成功");
};